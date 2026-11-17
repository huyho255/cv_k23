import zipfile, xml.etree.ElementTree as ET
import subprocess, re, random, unicodedata, json

random.seed(20261117)

# --- HELPER FUNCTIONS ---
def clean_compare(s):
    s = unicodedata.normalize('NFKD', s)
    s = re.sub(r'[\uF058\uF057✓]', '', s)
    s = re.sub(r'[^\w\s]', ' ', s)
    return ' '.join(s.lower().split())

# --- 1. PARSE DOCX (60 QUESTIONS) ---
docx_path = 'ngan hang trac nghiem/raw/Tong_hop_60_cau_hoi_va_dap_an.docx'
with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    paragraphs = []
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
        if texts:
            paragraphs.append(''.join(texts))

docx_questions = []
curr_q = None
for p in paragraphs:
    m = re.match(r'^Câu\s+(\d+)[\.\:]\s*(.+)$', p.strip())
    if m:
        if curr_q:
            docx_questions.append(curr_q)
        curr_q = {'num': m.group(1), 'stem': m.group(2).strip(), 'options': [], 'answer': '', 'explanation': '', 'source': 'docx'}
    elif curr_q:
        opt_m = re.match(r'^(✓\s*)?([A-D])[\.\:]\s*(.+)$', p.strip())
        ans_m = re.match(r'^Đáp án[\:\s]+([A-D])[\.\:]?\s*(.*)$', p.strip())
        if opt_m:
            curr_q['options'].append({
                'is_correct': bool(opt_m.group(1)),
                'letter': opt_m.group(2),
                'text': opt_m.group(3).strip()
            })
        elif ans_m:
            curr_q['answer'] = ans_m.group(1)
            curr_q['explanation'] = ans_m.group(2).strip()
        elif not curr_q['options']:
            curr_q['stem'] += ' ' + p.strip()

if curr_q:
    docx_questions.append(curr_q)

# Fix Q43 (Câu 3 Bộ 2) in DOCX
for q in docx_questions:
    if 'Làm thế nào tính phân bố biên p(X)' in q['stem']:
        q['options'] = [
            {'letter': 'A', 'text': 'p(X) = ∫p(X,Y)dY (cho biến liên tục)', 'is_correct': False},
            {'letter': 'B', 'text': 'p(X) = p(X,Y)/p(Y)', 'is_correct': False},
            {'letter': 'C', 'text': 'p(X) = ∑_Y p(X,Y) (cho biến rời rạc)', 'is_correct': False},
            {'letter': 'D', 'text': 'Cả A và C đều đúng (tùy Y rời rạc hay liên tục)', 'is_correct': True}
        ]
        q['answer'] = 'D'
        q['explanation'] = 'Tính phân bố biên (marginalization): lấy tích phân qua Y nếu Y liên tục (A), hoặc lấy tổng qua Y nếu Y rời rạc (C). Do đó cả A và C đều đúng.'

print(f'DOCX extracted: {len(docx_questions)} questions')

# Verify DOCX
for idx, q in enumerate(docx_questions):
    assert len(q['options']) == 4, f'DOCX Q{idx+1} does not have 4 options'
    assert q['answer'] in ['A', 'B', 'C', 'D'], f'DOCX Q{idx+1} has invalid answer'

# --- 2. PARSE PDFS (80 QUESTIONS) ---
pdfs = [
    'ngan hang trac nghiem/raw/Quiz 1 - Ôn tập giữa kỳ (Lý thu1yết)_ Attempt review _ HCMUS Moodle.pdf',
    'ngan hang trac nghiem/raw/Quiz 1 - Ôn tập giữa kỳ (Lý thuyết)_ Att2empt review _ HCMUS Moodle.pdf',
    'ngan hang trac nghiem/raw/Quiz 1 - Ôn tập giữa kỳ (Lý thuyết)_ Attempt review _ HCMUS Moodle.pdf'
]

FIXES = {
    "phương pháp cân bằng trắng (whitening) nhằm mục đích đưa giá": {
        "options": [
            "μ = 0.5, σ² = 0.5",
            "μ = 1, σ² = 1",
            "μ = 0, σ² = 1",
            "μ = 0, σ² = 0"
        ],
        "correct": "μ = 0, σ² = 1"
    },
    "trong kỹ thuật cân bằng histogram, giá trị của hàm phân phối tích lũy": {
        "options": [
            "Trong đoạn [0, μ] (giá trị trung bình).",
            "Trong đoạn [0, 255].",
            "Trong đoạn [0, 1].",
            "Trong đoạn [p_min, p_max]."
        ],
        "correct": "Trong đoạn [0, 255]."
    },
    "trong định luật bayes, p (x) được gọi là evidence (bằng chứng)": {
        "options": [
            "Mô tả khả năng quan sát X khi biết Y.",
            "Xác suất xảy ra giả thuyết Y.",
            "Đóng vai trò là hằng số chuẩn hóa để ∑_Y p(Y|X) = 1.",
            "Luôn bằng 1."
        ],
        "correct": "Đóng vai trò là hằng số chuẩn hóa để ∑_Y p(Y|X) = 1."
    },
    "trong phân bố tự nhiên đa biến (multivariate gaussian), σ là ma trận gì": {
        "options": [
            "Ma trận nhận dạng.",
            "Ma trận hiệp phương sai của vector trung bình μ.",
            "Ma trận chẩn đoán.",
            "Ma trận hiệp phương sai có kích thước D × D."
        ],
        "correct": "Ma trận hiệp phương sai có kích thước D × D."
    },
    "trong sift descriptor, sau khi gán góc quay (orientation assignment)": {
        "options": [
            "Để tăng tốc độ tính toán.",
            "Để đảm bảo descriptor không phụ thuộc vào góc quay của điểm ảnh (Rotation Invariance).",
            "Để giảm sự phụ thuộc vào độ tương phản.",
            "Để giảm số lượng bins."
        ],
        "correct": "Để đảm bảo descriptor không phụ thuộc vào góc quay của điểm ảnh (Rotation Invariance)."
    },
    "trong phép lọc tuyến tính, kết quả của phép lọc là tổng hợp của các điểm ảnh": {
        "options": [
            "Zero padding",
            "Ảnh gốc (f(i, j))",
            "Ảnh đầu ra (g(i, j))",
            "Ma trận Mặt nạ (Kernel) h(k, l)"
        ],
        "correct": "Ma trận Mặt nạ (Kernel) h(k, l)"
    },
    "nếu ta xoay ảnh một góc β = 90": {
        "options": [
            "[[0, -1], [1, 0]]",
            "[[1, 0], [0, 1]]",
            "[[-1, 0], [0, -1]]",
            "[[0, 1], [-1, 0]]"
        ],
        "correct": "[[0, -1], [1, 0]]"
    },
    "ước lượng maximum a posteriori (map) khác với ml ở điểm nào": {
        "options": [
            "MAP tối đa hóa hàm Likelihood.",
            "MAP tích hợp thêm thông tin tiền nghiệm (Prior) p(θ) về tham số.",
            "MAP không sử dụng ràng buộc.",
            "MAP chỉ áp dụng cho dữ liệu liên tục."
        ],
        "correct": "MAP tích hợp thêm thông tin tiền nghiệm (Prior) p(θ) về tham số."
    },
    "thị giác máy tính được định nghĩa là việc rút trích các dữ liệu như hình dạng": {
        "options": [
            "Để tạo ra các ma trận xoay và nhân chập.",
            "Để xác định ngưỡng nhị phân hóa bằng Otsu.",
            "Để tính toán vector đặc tả HOG 3780 chiều.",
            "Từ đó xây dựng một đặc tả mới để phục vụ cho một công việc nhất định."
        ],
        "correct": "Từ đó xây dựng một đặc tả mới để phục vụ cho một công việc nhất định."
    },
    "mục đích của việc tính difference of gaussians (dog) trong thuật toán sift": {
        "options": [
            "Để tạo ra ảnh nhị phân.",
            "Để chuẩn hóa cường độ gradient.",
            "Để xác định các góc với tỉ lệ (scale) khác nhau bằng cách trừ các hình lọc Gauss lân cận.",
            "Để làm mịn toàn bộ ảnh."
        ],
        "correct": "Để xác định các góc với tỉ lệ (scale) khác nhau bằng cách trừ các hình lọc Gauss lân cận."
    },
    "để giảm sự phụ thuộc vào độ tương phản (biên độ gradient) trong sift descriptor": {
        "options": [
            "Áp dụng Hysteresis Thresholding.",
            "Chuyển sang ảnh nhị phân.",
            "Lọc Gaussian.",
            "Chuẩn hóa vector về độ dài đơn vị (unit length) và đảm bảo các giá trị không lớn hơn 0.2."
        ],
        "correct": "Chuẩn hóa vector về độ dài đơn vị (unit length) và đảm bảo các giá trị không lớn hơn 0.2."
    },
    "trong bước phân ngưỡng hysteresis của canny, một cạnh yếu": {
        "options": [
            "Nó nằm gần ngưỡng cao (T_high).",
            "Nó nằm gần ngưỡng thấp (T_low).",
            "Nó có độ lớn gradient lớn hơn 200.",
            "Nó kết nối trực tiếp hoặc gián tiếp với một cạnh mạnh (Strong Edge)."
        ],
        "correct": "Nó kết nối trực tiếp hoặc gián tiếp với một cạnh mạnh (Strong Edge)."
    },
    "phép nhân chập sobel": {
        "options": [
            "Chiều ngang (Gx).",
            "Chiều dọc (Gy).",
            "Đường chéo 135°.",
            "Đường chéo 45°."
        ],
        "correct": "Chiều ngang (Gx)."
    },
    "phân bố nào thường được sử dụng để mô hình hóa cường độ sáng của pixel": {
        "options": [
            "Phân bố Gaussian (Normal)",
            "Phân bố Dirichlet",
            "Phân bố Categorical",
            "Phân bố Bernoulli"
        ],
        "correct": "Phân bố Gaussian (Normal)"
    },
    "một trong những nhược điểm của việc sử dụng histogram đơn giản": {
        "options": [
            "Mất thông tin về cấu trúc và vị trí không gian của các điểm ảnh.",
            "Tính toán quá phức tạp và chậm.",
            "Dễ bị ảnh hưởng bởi nhiễu muối tiêu.",
            "Không thích hợp cho các ứng dụng nhận dạng vật thể cần cấu trúc."
        ],
        "correct": "Mất thông tin về cấu trúc và vị trí không gian của các điểm ảnh."
    },
    "mục đích chính của bước tiền xử lý (pre-processing) là gì": {
        "options": [
            "Để loại bỏ các thành phần không mong muốn khỏi ảnh nhằm đơn giản hóa các bước xử lý tiếp theo.",
            "Để thực hiện phân lớp (classification).",
            "Để phân tách ảnh thành các vùng màu khác nhau.",
            "Để tạo ra vector đặc tả 128 chiều."
        ],
        "correct": "Để loại bỏ các thành phần không mong muốn khỏi ảnh nhằm đơn giản hóa các bước xử lý tiếp theo."
    },
    "mục đích của việc phân tách ảnh (segmentation) là gì": {
        "options": [
            "Để chia ảnh thành các vùng khác nhau nhằm đơn giản hóa ảnh và giảm độ phức tạp trong quá trình phân tích.",
            "Để chuyển ảnh màu sang ảnh trắng đen.",
            "Để tăng cường độ tương phản.",
            "Để làm mỏng các cạnh."
        ],
        "correct": "Để chia ảnh thành các vùng khác nhau nhằm đơn giản hóa ảnh và giảm độ phức tạp trong quá trình phân tích."
    },
    "phương pháp maximum a posteriori (map) khác với maximum likelihood (ml) ở điểm nào": {
        "options": [
            "MAP luôn cho kết quả θ̂ là giá trị trung bình.",
            "MAP tích hợp thông tin tiền nghiệm (prior information) về thông số θ vào việc tìm thông số.",
            "MAP không yêu cầu tính log-likelihood.",
            "MAP chỉ áp dụng cho biến liên tục."
        ],
        "correct": "MAP tích hợp thông tin tiền nghiệm (prior information) về thông số θ vào việc tìm thông số."
    },
    "trong harris corner detector, kỹ thuật này vẫn lệ thuộc vào đặc tính nào": {
        "options": [
            "Độ tương phản của ảnh.",
            "Kích thước (scale) của điểm góc (góc có thể trở thành đường cong khi thay đổi kích thước).",
            "Góc quay của điểm ảnh.",
            "Độ sáng của ảnh."
        ],
        "correct": "Kích thước (scale) của điểm góc (góc có thể trở thành đường cong khi thay đổi kích thước)."
    },
    "bộ lọc (kernel) nào sau đây thường được sử dụng để làm sắc nét ảnh": {
        "options": [
            "Kernel Laplacian [[0, -1, 0], [-1, 5, -1], [0, -1, 0]]",
            "Kernel Gaussian 3x3 (1/16 * [[1, 2, 1], [2, 4, 2], [1, 2, 1]])",
            "Kernel Box Filter 3x3 (1/9 * [[1, 1, 1], [1, 1, 1], [1, 1, 1]])",
            "Kernel Sobel [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]"
        ],
        "correct": "Kernel Laplacian [[0, -1, 0], [-1, 5, -1], [0, -1, 0]]"
    },
    "trong phép co ( xảy ra? 𝐚 ⊖ 𝐛), một pixel ở ảnh kết quả": {
        "options": [
            "Toàn bộ phần tử cấu trúc B hoàn toàn chứa trong vùng ảnh con tương ứng của A.",
            "A và phần tử B có cùng kích thước.",
            "Tất cả các pixel trong vùng ảnh con đều là 0.",
            "Có ít nhất một pixel của phần tử cấu trúc B trùng với pixel 1 của ảnh A."
        ],
        "correct": "Toàn bộ phần tử cấu trúc B hoàn toàn chứa trong vùng ảnh con tương ứng của A."
    },
    "đâu là công thức chính xác cho định luật bayes": {
        "options": [
            "p(Y|X) = [p(X|Y) * p(Y)] / p(X)",
            "p(Y|X) = p(X|Y) * p(Y)",
            "p(Y|X) = [p(X|Y) * p(X)] / p(Y)",
            "p(X) = ∑_Y p(X|Y)"
        ],
        "correct": "p(Y|X) = [p(X|Y) * p(Y)] / p(X)"
    },
    "công thức kết quả? 𝑎 ⊕ 𝑏 = 𝑧|[𝑐𝑖𝑡𝑒𝑠𝑡𝑎𝑟𝑡]𝑏𝑧 ∩ 𝑎 ≠ ∅ có ý nghĩa là gì": {
        "options": [
            "Có ít nhất một phần tử của B dịch chuyển đến z khớp với A (foreground).",
            "z là điểm góc.",
            "z là điểm nền (background).",
            "z là điểm biên."
        ],
        "correct": "Có ít nhất một phần tử của B dịch chuyển đến z khớp với A (foreground)."
    },
    "trong phương pháp maximum likelihood (ml), mục tiêu là tìm tập giá trị": {
        "options": [
            "Tại đó tập dữ liệu {x_i} có khả năng xảy ra (likelihood) lớn nhất.",
            "Tối đa hóa tiền nghiệm.",
            "Tối thiểu hóa log-likelihood.",
            "Giảm thiểu sai số."
        ],
        "correct": "Tại đó tập dữ liệu {x_i} có khả năng xảy ra (likelihood) lớn nhất."
    },
    "kỹ thuật hysteresis thresholding (double thresholding) sử dụng hai ngưỡng": {
        "options": [
            "Để giảm lỗi khi điểm ảnh là cạnh nhưng có biên độ gradient thấp, hoặc không phải cạnh nhưng có biên độ cao (dựa trên tính liên tục của cạnh).",
            "Để tăng tốc độ lọc nhiễu.",
            "Để giảm thời gian tính toán gradient.",
            "Để làm tròn góc gradient."
        ],
        "correct": "Để giảm lỗi khi điểm ảnh là cạnh nhưng có biên độ gradient thấp, hoặc không phải cạnh nhưng có biên độ cao (dựa trên tính liên tục của cạnh)."
    },
    "tính liên hợp (conjugacy) có vai trò quan trọng vì khi ta nhân một phân bố": {
        "options": [
            "Một phân bố mới có cùng dạng với phân bố liên hợp (VD: Bern(x|λ) * Beta(λ|α,β) cho ra Beta(λ) mới).",
            "Sẽ luôn là một phân bố Dirichlet.",
            "Sẽ luôn là một phân bố Gaussian.",
            "Sẽ luôn là một hằng số."
        ],
        "correct": "Một phân bố mới có cùng dạng với phân bố liên hợp (VD: Bern(x|λ) * Beta(λ|α,β) cho ra Beta(λ) mới)."
    },
    "ảnh màu rgb được lưu trữ dưới dạng ma trận": {
        "options": [
            "1 chiều",
            "2 chiều",
            "2.5 chiều",
            "3 chiều"
        ],
        "correct": "3 chiều"
    },
    "trong ước lượng maximum likelihood (ml) cho phân bố categorical": {
        "options": [
            "λ_k = N_k / N (với N_k là số lần xuất hiện lớp k, N là tổng số quan sát)",
            "λ_k = N / N_k",
            "λ_k = 1 / K (luôn cố định đồng đều)",
            "λ_k = (N_k + α_k - 1) / (N + Σ α_j - K)"
        ],
        "correct": "λ_k = N_k / N (với N_k là số lần xuất hiện lớp k, N là tổng số quan sát)"
    }
}

clean_fixes = {clean_compare(k): v for k, v in FIXES.items()}

def clean_txt(txt):
    txt = re.sub(r'https?://courses\.hcmus\.edu\.vn[^\n]*', '', txt)
    txt = re.sub(r'\d+/\d+/\d+,\s*\d+:\d+\s*[AP]M\s*', '', txt)
    txt = re.sub(r'Quiz 1 - Ôn tập giữa kỳ[^\n]*', '', txt)
    txt = re.sub(r'\b\d+/(?:24|25|26|27|31)\b', '', txt)
    return txt

pdf_questions_raw = []
for p in pdfs:
    raw_txt = subprocess.check_output(['pdftotext', p, '-']).decode('utf-8', errors='ignore')
    txt = clean_txt(raw_txt)
    blocks = re.split(r'\nQuestion\s+(\d+)\s*\n', txt)[1:]
    for i in range(0, len(blocks), 2):
        b = blocks[i+1]
        
        ans_m = re.search(r'The correct answer is:\s*(.+?)(?:\n\n|\Z)', b, re.DOTALL)
        correct_text = ' '.join(ans_m.group(1).split()) if ans_m else ''
        
        if 'Select one:' in b:
            stem_part, opts_part = b.split('Select one:', 1)
        else:
            lines = [l for l in b.split('\n') if l.strip()]
            stem_part = lines[0] if lines else ''
            opts_part = '\n'.join(lines[1:])
            
        if ans_m:
            opts_part = opts_part[:opts_part.find('The correct answer is:')]
            
        stem = ' '.join([l.strip() for l in stem_part.split('\n') if l.strip() and not l.strip().startswith('Correct') and not l.strip().startswith('Incorrect') and not l.strip().startswith('Mark')])
        if not stem and 'Thị giác Máy tính được định nghĩa là' in opts_part:
            stem = 'Thị giác Máy tính được định nghĩa là việc rút trích các dữ liệu như hình dạng, độ sáng, phân bố màu sắc, v.v. từ ảnh để làm gì?'
            
        raw_lines = [l.strip() for l in opts_part.split('\n') if l.strip()]
        
        pdf_questions_raw.append({
            'stem': stem,
            'correct': correct_text,
            'lines': raw_lines
        })

pdf_unique = {}
for q in pdf_questions_raw:
    if not q['stem']:
        for l in q['lines']:
            if 'Ảnh màu RGB' in l:
                q['stem'] = 'Ảnh màu RGB được lưu trữ dưới dạng ma trận mấy chiều trong máy tính?'
                break
    k = clean_compare(q['stem'])[:60]
    if k not in pdf_unique:
        pdf_unique[k] = q

print(f'PDF unique extracted: {len(pdf_unique)} questions')

def match_opt(corr, opts):
    if corr in opts: return corr
    corr_c = re.sub(r'\s+', '', clean_compare(corr))
    for o in opts:
        if re.sub(r'\s+', '', clean_compare(o)) == corr_c:
            return o
    for o in opts:
        o_c = re.sub(r'\s+', '', clean_compare(o))
        if corr_c in o_c or o_c in corr_c:
            return o
    return None

pdf_clean_questions = []
for idx, (k, q) in enumerate(pdf_unique.items()):
    stem_norm = clean_compare(q['stem'])
    matched_fix = None
    for fix_k, fix_val in clean_fixes.items():
        if fix_k in stem_norm:
            matched_fix = fix_val
            break
            
    if matched_fix:
        opts = list(matched_fix['options'])
        corr = matched_fix['correct']
    else:
        cleaned_lines = []
        for l in q['lines']:
            l_clean = re.sub(r'[\uF058\uF057✓]', '', l).strip()
            l_clean = ' '.join(l_clean.split())
            if l_clean and not l_clean.startswith('Your answer') and not l_clean.startswith('Mark'):
                cleaned_lines.append(l_clean)
        opts = cleaned_lines
        corr = q['correct']
        
    assert len(opts) == 4, f'PDF Q{idx+1} {q["stem"][:40]} has {len(opts)} options: {opts}'
    matched_corr = match_opt(corr, opts)
    assert matched_corr, f'PDF Q{idx+1} cannot match correct answer {repr(corr)} in {opts}'
    
    pdf_clean_questions.append({
        'stem': q['stem'],
        'options': opts,
        'correct_text': matched_corr,
        'explanation': '',
        'source': 'pdf',
        'topic': 'Đặc biệt - Moodle Quiz'
    })

# --- 3. DEDUPLICATE (REMOVE BOTH DIRECT & SEMANTIC DUPLICATES) ---
# Dropping duplicates from Moodle:
# 1. Q7 (idx 6: Categorical special case of Bernoulli -> covered better in DOCX Q53)
# 2. Q48 (idx 47: PDF continuous -> duplicate of Q8)
# 3. Q57 (idx 56: MAP vs ML -> duplicate of Q23)
# 4. Q73 (idx 72: p(Y) Prior -> duplicate of Q9)
# 5. Q77 (idx 76: Erosion noise -> duplicate of Q31)
# 6. Q79 (idx 78: LBP uniform 2 transitions -> duplicate of Q11)
moodle_drop_indices = {6, 47, 56, 72, 76, 78}
deduped_moodle = [q for idx, q in enumerate(pdf_clean_questions) if idx not in moodle_drop_indices]
print(f'Moodle after semantic deduplication: {len(pdf_clean_questions)} -> {len(deduped_moodle)} questions')

# Dropping duplicates from DOCX that overlap with Moodle / DOCX:
# 1. DOCX Q16 (idx 15: Median filter removes salt-pepper noise -> duplicate of Moodle Q44)
# 2. DOCX Q24 (idx 23: MAP vs ML core difference -> duplicate of Moodle Q23)
# 3. DOCX Q27 (idx 26: Histogram loses spatial info -> duplicate of Moodle Q5)
# 4. DOCX Q29 (idx 28: SIFT vector 128D -> duplicate of Moodle Q75)
# 5. DOCX Q36 (idx 35: LBP 8-neighbor uniform -> duplicate of Moodle Q11)
# 6. DOCX Q41 (idx 40: Bayes P(Y) prior -> duplicate of Moodle Q9)
# 7. DOCX Q48 (idx 47: Expectation E[f] is average -> duplicate of Moodle Q38)
# 8. DOCX Q49 (idx 48: MAP vs ML -> duplicate of Moodle Q23)
docx_drop_indices = {15, 23, 26, 28, 35, 40, 47, 48}
deduped_docx = [q for idx, q in enumerate(docx_questions) if idx not in docx_drop_indices]
print(f'DOCX after semantic deduplication: {len(docx_questions)} -> {len(deduped_docx)} questions')

# --- 4. SHUFFLE OPTIONS (NEVER ALL A) ---
combined_questions = []

# Add clean Moodle questions (74 questions)
for q in deduped_moodle:
    opts = list(q['options'])
    corr = q['correct_text']
    indices = [0, 1, 2, 3]
    random.shuffle(indices)
    shuffled_opts = [opts[i] for i in indices]
    new_corr_idx = shuffled_opts.index(corr)
    new_corr_letter = chr(65 + new_corr_idx)
    combined_questions.append({
        'stem': q['stem'],
        'options': shuffled_opts,
        'correct_idx': new_corr_idx,
        'correct_letter': new_corr_letter,
        'correct_text': corr,
        'explanation': q['explanation'],
        'topic': q['topic'],
        'source': 'Moodle Quiz 1 (HCMUS Moodle)'
    })

# Add clean DOCX questions (52 questions)
for q in deduped_docx:
    corr_opt = [opt['text'] for opt in q['options'] if opt['letter'] == q['answer']][0]
    opts = [opt['text'] for opt in q['options']]
    indices = [0, 1, 2, 3]
    random.shuffle(indices)
    shuffled_opts = [opts[i] for i in indices]
    new_corr_idx = shuffled_opts.index(corr_opt)
    new_corr_letter = chr(65 + new_corr_idx)
    combined_questions.append({
        'stem': q['stem'],
        'options': shuffled_opts,
        'correct_idx': new_corr_idx,
        'correct_letter': new_corr_letter,
        'correct_text': corr_opt,
        'explanation': q['explanation'],
        'topic': 'Đặc biệt - Tổng hợp nâng cao',
        'source': 'Tổng hợp câu hỏi nâng cao & Bài tập'
    })

print(f'Total combined clean questions: {len(combined_questions)} (74 Moodle + 52 DOCX)')

# Verify distribution of answers
from collections import Counter
letter_counts = Counter(q['correct_letter'] for q in combined_questions)
print('Correct letter distribution across 126 questions:', sorted(letter_counts.items()))

# --- 5. EXPORT TO MARKDOWN FILE ---
md_out_path = 'ngan hang trac nghiem/bo_cau_hoi_dac_biet_giua_ky.md'
md_lines = []
md_lines.append(f'# BỘ CÂU HỎI ĐẶC BIỆT ÔN TẬP GIỮA KỲ THỊ GIÁC MÁY TÍNH ({len(combined_questions)} CÂU ĐÃ LỌC TRÙNG LẶP TUYỆT ĐỐI)\n')
md_lines.append('Tài liệu đã được lọc sạch toàn bộ trùng lặp trực tiếp và trùng lặp ngữ nghĩa giữa các đề:')
md_lines.append(f'- **Phần 1 (Câu 1 - {len(deduped_moodle)})**: {len(deduped_moodle)} câu hỏi độc bản từ các lượt thi HCMUS Moodle Quiz 1.')
md_lines.append(f'- **Phần 2 (Câu {len(deduped_moodle) + 1} - {len(combined_questions)})**: {len(deduped_docx)} câu hỏi tổng hợp nâng cao & bài tập tính toán ma trận, HOG block, SIFT cell, MAP.\n')
md_lines.append('> Lưu ý: Vị trí các đáp án (A, B, C, D) đã được xáo trộn ngẫu nhiên, không cố định full A.\n')
md_lines.append('---\n')

for idx, q in enumerate(combined_questions):
    if idx == 0:
        md_lines.append(f'## PHẦN 1: BỘ ĐỀ THI MOODLE QUIZ 1 (THỰC TẾ) - {len(deduped_moodle)} CÂU\n')
    elif idx == len(deduped_moodle):
        md_lines.append(f'## PHẦN 2: BỘ CÂU HỎI TỔNG HỢP NÂNG CAO & BÀI TẬP - {len(deduped_docx)} CÂU\n')
        
    md_lines.append(f'### Câu {idx + 1}')
    md_lines.append(f'**Chuyên đề**: {q["topic"]}\n')
    md_lines.append(f'{q["stem"]}\n')
    for opt_idx, opt_text in enumerate(q['options']):
        letter = chr(65 + opt_idx)
        md_lines.append(f'{letter}. {opt_text}')
    md_lines.append(f'\n**Đáp án đúng**: {q["correct_letter"]}')
    if q['explanation']:
        md_lines.append(f'> **Giải thích**: {q["explanation"]}')
    md_lines.append('\n---\n')

md_lines.append(f'# BẢNG TỔNG HỢP ĐÁP ÁN ({len(combined_questions)} CÂU)\n')
md_lines.append('| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |')
md_lines.append('|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|')
rows = (len(combined_questions) + 3) // 4
for r in range(rows):
    cols = []
    for c_i in range(4):
        c_num = r + 1 + c_i * rows
        if c_num <= len(combined_questions):
            cols.append(f'| {c_num} | **{combined_questions[c_num-1]["correct_letter"]}** ')
        else:
            cols.append('| - | - ')
    md_lines.append(''.join(cols) + '|')

with open(md_out_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(md_lines))

print(f'Exported Markdown successfully to {md_out_path}')

# --- 6. UPDATE MIDTERM_QUESTIONS.JS ---
with open('midterm_questions.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

m_js = re.search(r'window\.midtermQuestionBankData\s*=\s*(["\'])(.*?)\1;\s*$', js_content, re.DOTALL)
existing_md = json.loads(m_js.group(0).split('=', 1)[1].strip().rstrip(';'))
q_blocks = re.split(r'\n## (?:Câu|Question)\s+\d+', existing_md)
header_part = q_blocks[0]
existing_qs = q_blocks[1:321] # Keep exactly first 320 questions

print(f'Preserving original {len(existing_qs)} midterm questions (1 to 320)')

new_md_parts = [header_part.strip()]
for idx, q_text in enumerate(existing_qs):
    new_md_parts.append(f'## Câu {idx + 1}\n{q_text.strip()}')

# Append the 126 clean special questions (numbered 321 to 446)
for idx, q in enumerate(combined_questions):
    q_num = 321 + idx
    q_str = f'## Câu {q_num}\nChủ đề: {q["topic"]}\n{q["stem"]}\n\n'
    for opt_idx, opt_text in enumerate(q['options']):
        check = 'x' if opt_idx == q['correct_idx'] else ' '
        q_str += f'- [{check}] {opt_text}\n'
    if q['explanation']:
        q_str += f'> {q["explanation"]}\n'
    new_md_parts.append(q_str.strip())

final_md = '\n\n'.join(new_md_parts)
new_js_content = f'window.midtermQuestionBankData = {json.dumps(final_md, ensure_ascii=False)};\n'

with open('midterm_questions.js', 'w', encoding='utf-8') as f:
    f.write(new_js_content)

print(f'Updated midterm_questions.js: total questions = {len(new_md_parts) - 1} (446 questions)')
