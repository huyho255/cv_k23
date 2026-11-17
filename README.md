# Thị Giác Máy Tính (Computer Vision) - Trắc Nghiệm Thông Minh

Ứng dụng web ôn tập trắc nghiệm môn **Thị Giác Máy Tính (Computer Vision)** với giao diện hiện đại, chế độ ôn tập thông minh (Spaced Repetition) và hỗ trợ phân loại theo bài học. Được phát triển và kế thừa từ template quiz `c--oop-multichoice`.

---

## 🚀 Tính năng nổi bật

- **📚 Học theo bài học (Topics):** Tự động phân loại câu hỏi theo 6 chuyên đề slide bài giảng:
  - **Bài 1:** Tổng quan về Thị giác máy tính & Không gian màu (RGB, Grayscale, HSV,...)
  - **Bài 2:** Tiền xử lý ảnh (Lọc ảnh Gaussian, Median, Cân bằng Histogram, Hình thái học)
  - **Bài 3:** Phân tách ảnh & Rút trích đặc tả (Otsu, Canny, Sobel, Harris Corner, SIFT, HOG,...)
  - **Bài 4:** Xác suất - Thống kê trong Thị giác máy tính (Gaussian, MLE, MAP, Bayes)
  - **Bài 5:** Classifier & Dimension Reduction (KNN, SVM, PCA, LDA)
  - **Bài 6:** Mạng Neural nhân tạo & Deep Learning (Perceptron, MLP, Backpropagation, CNN)
- **⚡ Chế độ Luyện tập thông minh (Spaced Repetition):**
  - **Lần 1:** Làm 30 câu hỏi ngẫu nhiên từ ngân hàng câu hỏi.
  - **Lần 2:** 100% câu làm sai ở lần 1 sẽ xuất hiện lại + 50% câu đúng lặp lại.
  - **Lần 3:** Tiếp tục ưu tiên khắc phục các câu còn sai.
- **🎓 Đề thi Giữa kỳ & Cuối kỳ:** Tách riêng các bộ đề ôn tập giữa kỳ và cuối kỳ.
- **💻 Trình hiển thị code & công thức:** Tự động định dạng khối code (Python, OpenCV, C++) và giải thích chi tiết cho từng câu hỏi.
- **📊 Thống kê & Lịch sử làm bài:** Lưu trữ lịch sử bài làm trên `localStorage`, xem lại câu đúng/sai chi tiết qua popup modal.

---

## 📁 Cấu trúc thư mục

```text
.
├── slides/                      # Slide bài giảng môn học (Bài 1 - Bài 6 PDF)
├── ngan hang trac nghiem/       # Thư mục lưu các file đề trắc nghiệm Markdown (.md)
├── tools/
│   └── generate_questions.js    # Script node.js tự động gộp file markdown sang JS
├── index.html                   # Giao diện chính của ứng dụng
├── style.css                    # Toàn bộ CSS phong cách Dark/Glassmorphism hiện đại
├── script.js                    # Engine xử lý trắc nghiệm, thuật toán ôn tập thông minh
├── questions.js                 # Ngân hàng câu hỏi trắc nghiệm chung
├── topic_questions.js           # Ngân hàng câu hỏi theo chuyên đề
├── midterm_questions.js         # Ngân hàng đề giữa kỳ
├── final_questions.js           # Ngân hàng đề cuối kỳ
├── .gitignore
└── README.md
```

---

## 🛠️ Hướng dẫn sử dụng

### 1. Khởi chạy ứng dụng
Mở trực tiếp file `index.html` bằng trình duyệt web hoặc chạy một local server:
```bash
# Python 3
python3 -m http.server 8000

# Hoặc dùng Live Server trong VS Code / IDE
```
Sau đó truy cập: `http://localhost:8000`

### 2. Nạp thêm câu hỏi trắc nghiệm
Bạn có thể gửi file PDF / văn bản câu hỏi, hoặc thêm trực tiếp vào `questions.js` theo định dạng Markdown chuẩn:
```markdown
## Câu 1
Chủ đề: Bài 1: Tổng quan
Nội dung câu hỏi ở đây?

- [ ] Lựa chọn A (sai)
- [x] Lựa chọn B (đúng)
- [ ] Lựa chọn C (sai)
- [ ] Lựa chọn D (sai)

> Giải thích: Giải thích chi tiết đáp án...
```
