# BỘ CÂU HỎI ĐẶC BIỆT ÔN TẬP GIỮA KỲ THỊ GIÁC MÁY TÍNH (126 CÂU ĐÃ LỌC TRÙNG LẶP TUYỆT ĐỐI)

Tài liệu đã được lọc sạch toàn bộ trùng lặp trực tiếp và trùng lặp ngữ nghĩa giữa các đề:
- **Phần 1 (Câu 1 - 74)**: 74 câu hỏi độc bản từ các lượt thi HCMUS Moodle Quiz 1.
- **Phần 2 (Câu 75 - 126)**: 52 câu hỏi tổng hợp nâng cao & bài tập tính toán ma trận, HOG block, SIFT cell, MAP.

> Lưu ý: Vị trí các đáp án (A, B, C, D) đã được xáo trộn ngẫu nhiên, không cố định full A.

---

## PHẦN 1: BỘ ĐỀ THI MOODLE QUIZ 1 (THỰC TẾ) - 74 CÂU

### Câu 1
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phương pháp Cân bằng Trắng (Whitening) nhằm mục đích đưa giá trị trung bình (𝜇) và phương sai (𝜎 2 ) của cường độ điểm ảnh về bao nhiêu?

A. μ = 0, σ² = 0
B. μ = 0, σ² = 1
C. μ = 0.5, σ² = 0.5
D. μ = 1, σ² = 1

**Đáp án đúng**: B

---

### Câu 2
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong kỹ thuật cân bằng Histogram, giá trị của hàm phân phối tích lũy (CDF) sau khi tính toán cần được chuẩn hóa trong đoạn nào đối với ảnh xám 8-bit?

A. Trong đoạn [0, 1].
B. Trong đoạn [p_min, p_max].
C. Trong đoạn [0, μ] (giá trị trung bình).
D. Trong đoạn [0, 255].

**Đáp án đúng**: D

---

### Câu 3
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong bước cân bằng Histogram cho ảnh màu, ta thường tập trung cân chỉnh kênh nào trong hệ màu YCbCr?

A. Kênh Cb (Chrominance Blue).
B. Kênh Cr (Chrominance Red).
C. Cân chỉnh đồng thời cả 3 kênh.
D. Kênh Y (Luma/độ sáng).

**Đáp án đúng**: D

---

### Câu 4
**Chuyên đề**: Đặc biệt - Moodle Quiz

Feature Descriptor là gì?

A. Một ma trận nhân chập để lọc nhiễu.
B. Một thuật toán tìm kiếm các góc và cạnh.
C. Một cách tóm tắt nội dung của ảnh dưới dạng một mô tả mới, thường là một vector.
D. Một bước trong Hysteresis Thresholding.

**Đáp án đúng**: C

---

### Câu 5
**Chuyên đề**: Đặc biệt - Moodle Quiz

Nhược điểm lớn nhất của Feature Descriptor đơn giản dựa trên Histogram cường độ màu là gì?

A. Mất thông tin về cấu trúc không gian (Spatial Structure).
B. Không thể dùng cho ảnh xám.
C. Bị ảnh hưởng bởi nhiễu Gaussian.
D. Khó tính toán.

**Đáp án đúng**: A

---

### Câu 6
**Chuyên đề**: Đặc biệt - Moodle Quiz

Ưu điểm chính của Local Binary Patterns (LBP) là gì, khiến nó thường được dùng làm nền cho các thuật toán nhận diện mặt người?

A. LBP có thể dò được các góc nhọn.
B. LBP tạo ra vector đặc tả 128 chiều.
C. LBP không bị ảnh hưởng nhiều bởi sự thay đổi độ sáng.
D. LBP không cần tính biên độ gradient.

**Đáp án đúng**: C

---

### Câu 7
**Chuyên đề**: Đặc biệt - Moodle Quiz

Hàm mật độ xác suất (PDF) 𝑝 (𝑥) được dùng cho loại biến ngẫu nhiên nào?

A. Biến nhị phân.
B. Biến ngẫu nhiên rời rạc.
C. Các nhãn phân loại (Categorical).
D. Biến ngẫu nhiên liên tục.

**Đáp án đúng**: D

---

### Câu 8
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong Định luật Bayes, thành phần nào mô tả xác suất của giả thuyết bằng chứng nào? 𝑋 𝑌 trước khi quan sát bất kỳ

A. 𝑝 (𝑌 ) (Prior)
B. 𝑝 (𝑋) (Evidence)
C. 𝑝 (𝑌 |𝑋) (Posterior)
D. 𝑝 (𝑋|𝑌 ) (Likelihood)

**Đáp án đúng**: A

---

### Câu 9
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong định luật Bayes, 𝑝 (𝑋) được gọi là Evidence (Bằng chứng). Vai trò chính của nó là gì?

A. Luôn bằng 1.
B. Mô tả khả năng quan sát X khi biết Y.
C. Đóng vai trò là hằng số chuẩn hóa để ∑_Y p(Y|X) = 1.
D. Xác suất xảy ra giả thuyết Y.

**Đáp án đúng**: C

---

### Câu 10
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong ngữ cảnh của LBP, một giá trị được gọi là "uniform" khi nào?

A. Khi giá trị LBP là 0 hoặc 255.
B. Khi giá trị LBP nhỏ hơn 58.
C. Khi giá trị chỉ có nhiều nhất hai lần chuyển tiếp từ 0 -> 1 hoặc 1 -> 0.
D. Khi tất cả các bit đều là 1.

**Đáp án đúng**: C

---

### Câu 11
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phân bố tự nhiên đa biến (Multivariate Gaussian), Σ là ma trận gì?

A. Ma trận hiệp phương sai có kích thước D × D.
B. Ma trận chẩn đoán.
C. Ma trận nhận dạng.
D. Ma trận hiệp phương sai của vector trung bình μ.

**Đáp án đúng**: A

---

### Câu 12
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong HOG Descriptor, góc gradient thường được chọn trong đoạn nào khi sử dụng 9 bins?

A. (0, 180) độ (góc gradient không dấu).
B. (0, 360) độ.
C. (0, 90) độ.
D. (-180, 180) độ.

**Đáp án đúng**: A

---

### Câu 13
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phép toán nào thường được sử dụng để lấp đầy các lỗ hổng nhỏ và nối liền các khe hẹp trong đối tượng?

A. Phép Đóng (Closing)
B. Phép Co (Erosion)
C. Phép Mở (Opening)
D. Phép Giãn Nỡ (Dilation)

**Đáp án đúng**: A

---

### Câu 14
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phép toán nào được sử dụng để tìm cực đại của hàm Log-likelyhood dưới điều kiện ràng buộc ( ∑ 𝜆𝑘 = 1) trong ML cho phân bố Categorical?

A. Khai triển chuỗi Taylor.
B. Non-maximum Suppression.
C. Lọc Gaussian.
D. Lagrange Multipliers.

**Đáp án đúng**: D

---

### Câu 15
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phép nhân chập ảnh (Convolution), tại sao kích thước của ma trận nhân chập (kernel) thường là số lẻ?

A. Để đảm bảo tính đối xứng của hệ số ma trận.
B. Để tiết kiệm bộ nhớ.
C. Để tránh hiện tượng răng cưa.
D. Để đảm bảo tốc độ xử lý.

**Đáp án đúng**: A

---

### Câu 16
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong SIFT Descriptor, sau khi gán góc quay (Orientation Assignment), mục đích của việc điều chỉnh lại góc gradient theo góc của keypoint là gì?

A. Để tăng tốc độ tính toán.
B. Để đảm bảo descriptor không phụ thuộc vào góc quay của điểm ảnh (Rotation Invariance).
C. Để giảm số lượng bins.
D. Để giảm sự phụ thuộc vào độ tương phản.

**Đáp án đúng**: B

---

### Câu 17
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phân bố nào là phân bố liên tục, thường được dùng để mô tả phân bố của thông số 𝜆 ∈ [0, 1] trong phân bố Bernoulli?

A. Phân bố Beta.
B. Phân bố Dirichlet.
C. Phân bố Gaussian.
D. Phân bố Categorical.

**Đáp án đúng**: A

---

### Câu 18
**Chuyên đề**: Đặc biệt - Moodle Quiz

Ưu điểm lớn nhất của LBP là gì?

A. Bất biến với sự thay đổi ánh sáng đồng đều.
B. Tạo ra vector đặc trưng 128 chiều nhỏ gọn.
C. Bất biến với tỷ lệ và góc quay.
D. Chỉ sử dụng 9 bin.

**Đáp án đúng**: A

---

### Câu 19
**Chuyên đề**: Đặc biệt - Moodle Quiz

𝐿 𝐿 𝐿 𝐿 , 𝐿 , 𝐿 ]. Số Trong một bài toán phân loại có 4 lớp, vector nhãn quan sát được là [ 1 , 2 , 3 , lần xuất hiện của 1 là 1 = 3, = 6. Nếu dùng ML, xác suất 𝜆 1 là bao nhiêu? 𝐿 𝑁 𝐼 1 3 1

A. 0.33
B. 0.5
C. 0.6
D. 0.167

**Đáp án đúng**: B

---

### Câu 20
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phép lọc tuyến tính, kết quả của phép lọc là tổng hợp của các điểm ảnh lân cận với trọng số được định nghĩa trong thành phần nào?

A. Ảnh đầu ra (g(i, j))
B. Ảnh gốc (f(i, j))
C. Zero padding
D. Ma trận Mặt nạ (Kernel) h(k, l)

**Đáp án đúng**: D

---

### Câu 21
**Chuyên đề**: Đặc biệt - Moodle Quiz

Nếu ta xoay ảnh một góc 𝛽 = 90 ∘ (𝜋/2 rad), ma trận biến đổi tọa độ là gì?

A. [[0, 1], [-1, 0]]
B. [[-1, 0], [0, -1]]
C. [[1, 0], [0, 1]]
D. [[0, -1], [1, 0]]

**Đáp án đúng**: D

---

### Câu 22
**Chuyên đề**: Đặc biệt - Moodle Quiz

Ước lượng Maximum A Posteriori (MAP) khác với ML ở điểm nào?

A. MAP tối đa hóa hàm Likelihood.
B. MAP không sử dụng ràng buộc.
C. MAP chỉ áp dụng cho dữ liệu liên tục.
D. MAP tích hợp thêm thông tin tiền nghiệm (Prior) p(θ) về tham số.

**Đáp án đúng**: D

---

### Câu 23
**Chuyên đề**: Đặc biệt - Moodle Quiz

Mục đích chính của kỹ thuật Cân bằng Histogram là gì?

A. Cải thiện độ tương phản của ảnh bằng cách điều chỉnh phân bố giá trị điểm ảnh.
B. Giảm số lượng màu của ảnh.
C. Tăng độ sáng của toàn bộ ảnh.
D. Làm mờ ảnh để giảm nhiễu.

**Đáp án đúng**: A

---

### Câu 24
**Chuyên đề**: Đặc biệt - Moodle Quiz

Bộ dò đặc tả nào được biết đến là không phụ thuộc vào kích thước (Scale Invariant), góc quay, và độ sáng của ảnh?

A. Harris Corner Detector.
B. Canny Edge Detector.
C. LBP.
D. SIFT Detector.

**Đáp án đúng**: D

---

### Câu 25
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phép biến đổi hình thái học, phép toán nào làm tăng kích thước của các đối tượng trong ảnh, giúp nối liền các điểm đứt gãy?

A. Phép Đóng (Closing)
B. Phép Mở (Opening)
C. Phép Co (Erosion)
D. Phép Giãn Nỡ (Dilation)

**Đáp án đúng**: D

---

### Câu 26
**Chuyên đề**: Đặc biệt - Moodle Quiz

Thị giác Máy tính được định nghĩa là việc rút trích các dữ liệu như hình dạng, độ sáng, phân bố màu sắc, v.v. từ ảnh để làm gì?

A. Từ đó xây dựng một đặc tả mới để phục vụ cho một công việc nhất định.
B. Để xác định ngưỡng nhị phân hóa bằng Otsu.
C. Để tính toán vector đặc tả HOG 3780 chiều.
D. Để tạo ra các ma trận xoay và nhân chập.

**Đáp án đúng**: A

---

### Câu 27
**Chuyên đề**: Đặc biệt - Moodle Quiz

Nếu áp dụng hiệu chỉnh Gamma với 𝛾 = 0.5 lên ảnh, kết quả sẽ như thế nào?

A. Độ tương phản giảm.
B. Không thay đổi.
C. Ảnh sáng hơn (tăng cường vùng tối).
D. Ảnh tối hơn.

**Đáp án đúng**: C

---

### Câu 28
**Chuyên đề**: Đặc biệt - Moodle Quiz

Mục đích của việc tính Difference of Gaussians (DoG) trong thuật toán SIFT là gì?

A. Để chuẩn hóa cường độ gradient.
B. Để tạo ra ảnh nhị phân.
C. Để làm mịn toàn bộ ảnh.
D. Để xác định các góc với tỉ lệ (scale) khác nhau bằng cách trừ các hình lọc Gauss lân cận.

**Đáp án đúng**: D

---

### Câu 29
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong thuật toán SIFT, bước nào giúp thuật toán không phụ thuộc vào góc quay của vật thể?

A. Sử dụng Uniform LBP.
B. Difference of Gaussians (DoG).
C. Loại bỏ các điểm có độ tương phản thấp.
D. Gán hướng chính (Orientation Assignment) cho Keypoint.

**Đáp án đúng**: D

---

### Câu 30
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phép toán nào trong số các lựa chọn sau có thể được dùng để loại bỏ các điểm nhiễu nhỏ (Isolated Noise Points) trong ảnh nhị phân? (Tham khảo hình ảnh đính kèm)

A. Phép Cộng (Addition).
B. Phép Giãn Nở (Dilation).
C. Phép Đóng (Closing).
D. Phép Co (Erosion).

**Đáp án đúng**: D

---

### Câu 31
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong thuật toán HOG, việc chuẩn hóa theo Block (Block Normalization) nhằm mục đích gì?

A. Giảm ảnh hưởng của sự thay đổi ánh sáng và độ tương phản cục bộ.
B. Tăng tốc độ tính toán gradient.
C. Làm mỏng cạnh (NMS).
D. Tăng số lượng bins.

**Đáp án đúng**: A

---

### Câu 32
**Chuyên đề**: Đặc biệt - Moodle Quiz

Để giảm sự phụ thuộc vào độ tương phản (biên độ gradient) trong SIFT Descriptor, bước nào được thực hiện sau khi tạo vector 128 chiều?

A. Áp dụng Hysteresis Thresholding.
B. Lọc Gaussian.
C. Chuẩn hóa vector về độ dài đơn vị (unit length) và đảm bảo các giá trị không lớn hơn 0.2.
D. Chuyển sang ảnh nhị phân.

**Đáp án đúng**: C

---

### Câu 33
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phép toán 𝐀 ⊖ 𝐁 được gọi là gì?

A. Phép Co (Erosion)
B. Phép Mở (Opening)
C. Phép Đóng (Closing)
D. Phép Giãn Nỡ (Dilation)

**Đáp án đúng**: A

---

### Câu 34
**Chuyên đề**: Đặc biệt - Moodle Quiz

Kỹ thuật nội suy nào lấy giá trị của điểm ảnh mới bằng cách lấy giá trị của điểm ảnh lân cận gần nhất trong ảnh gốc?

A. Nội suy Bilinear.
B. Nội suy Nearest-Neighbor.
C. Nội suy Bicubic.
D. Box sampling.

**Đáp án đúng**: B

---

### Câu 35
**Chuyên đề**: Đặc biệt - Moodle Quiz

Kỹ thuật nhị phân hóa ảnh Otsu tìm giá trị ngưỡng tối ưu dựa trên nguyên tắc nào?

A. Dựa trên giá trị trung bình của toàn bộ điểm ảnh.
B. Dựa trên đỉnh cao nhất của histogram.
C. Dựa trên thuật toán Non-maximum Suppression.
D. Dựa trên việc tối đa hóa phương sai giữa hai lớp (giữa vùng nền và vùng tiền cảnh).

**Đáp án đúng**: D

---

### Câu 36
**Chuyên đề**: Đặc biệt - Moodle Quiz

Công thức 𝐴 ∘ 𝐵 = (𝐴 ⊖ 𝐵) ⊕ 𝐵 mô tả phép toán kết hợp nào?

A. Phép Giãn Nỡ
B. Phép Co
C. Phép Mở (Opening)
D. Phép Đóng (Closing)

**Đáp án đúng**: C

---

### Câu 37
**Chuyên đề**: Đặc biệt - Moodle Quiz

Giá trị trung bình của hàm f(x) dưới phân bố xác suất p(x) được gọi là gì?

A. Hiệp phương sai (Covariance).
B. Phương sai (Variance).
C. Phân bố Biên.
D. Kỳ vọng (Expectation).

**Đáp án đúng**: D

---

### Câu 38
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong bước Phân ngưỡng Hysteresis của Canny, một cạnh yếu (Weak Edge) sẽ được giữ lại nếu:

A. Nó nằm gần ngưỡng thấp (T_low).
B. Nó nằm gần ngưỡng cao (T_high).
C. Nó có độ lớn gradient lớn hơn 200.
D. Nó kết nối trực tiếp hoặc gián tiếp với một cạnh mạnh (Strong Edge).

**Đáp án đúng**: D

---

### Câu 39
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phép nhân chập Sobel theo hướng nào?

A. Chiều dọc (Gy).
B. Đường chéo 135°.
C. Đường chéo 45°.
D. Chiều ngang (Gx).

**Đáp án đúng**: D

---

### Câu 40
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong chu trình nhận dạng ảnh, bước nào thường được thực hiện ngay sau bước "Tiền xử lý (Preprocessing)"?

A. Phép hậu xử lý (Post-processing).
B. Phân tách ảnh (Segmentation).
C. Phép rút trích đặc tả (Feature Extraction).
D. Phép lấy ảnh.

**Đáp án đúng**: B

---

### Câu 41
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phân bố nào thường được sử dụng để mô hình hóa cường độ sáng của pixel hoặc nhiễu trong ảnh (biến liên tục ∈ (−∞, ∞))? 𝑥

A. Phân bố Categorical
B. Phân bố Gaussian (Normal)
C. Phân bố Dirichlet
D. Phân bố Bernoulli

**Đáp án đúng**: B

---

### Câu 42
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong Canny Edge Detector, bước nào chịu trách nhiệm loại bỏ các điểm ảnh không phải là đỉnh (maximum) của gradient, nhằm làm mỏng cạnh (edge thinning)?

A. Tìm góc và biên độ gradient.
B. Non-maximum Suppression.
C. Hysteresis Thresholding.
D. Lọc nhiễu (Lọc Gauss).

**Đáp án đúng**: B

---

### Câu 43
**Chuyên đề**: Đặc biệt - Moodle Quiz

Bộ lọc nào được sử dụng để loại bỏ hiệu quả nhiễu muối tiêu (salt-and-pepper noise) mà vẫn giữ được các cạnh tốt hơn so với lọc trung bình?

A. Lọc Gaussian.
B. Lọc Median.
C. Lọc Sobel.
D. Lọc Laplacian.

**Đáp án đúng**: B

---

### Câu 44
**Chuyên đề**: Đặc biệt - Moodle Quiz

Phân bố Bernoulli thường được sử dụng để mô hình hóa ứng dụng nào trong Thị giác Máy tính?

A. Vector đặc trưng SIFT 128 chiều.
B. Hướng gradient trong HOG.
C. Cường độ sáng của ảnh xám.
D. Mô hình hóa mặt nạ phân vùng nhị phân (Object/Background).

**Đáp án đúng**: D

---

### Câu 45
**Chuyên đề**: Đặc biệt - Moodle Quiz

Công thức chuẩn để chuyển đổi ảnh RGB sang ảnh xám là gì?

A. 𝐺𝑟𝑎𝑦 = (𝑅 + 𝐺 + 𝐵) /3
B. 𝐺𝑟𝑎𝑦 = 0.5𝑅 + 0.3𝐺 + 0.2𝐵
C. 𝐺𝑟𝑎𝑦 = 0.25𝑅 + 0.5𝐺 + 0.25𝐵
D. 𝐺𝑟𝑎𝑦 = 0.299 × 𝑅 + 0.587 × 𝐺 + 0.114 × 𝐵

**Đáp án đúng**: D

---

### Câu 46
**Chuyên đề**: Đặc biệt - Moodle Quiz

Đặc tả SIFT Descriptor được tạo ra bằng cách ghép nối các histogram từ bao nhiêu vùng (4 × 4) và mỗi vùng có bao nhiêu bin?

A. 8 vùng, mỗi vùng có histogram 16 bin.
B. 16 vùng, mỗi vùng có histogram 8 bin.
C. 32 vùng, mỗi vùng có histogram 4 bin.
D. 4 vùng, mỗi vùng có histogram 32 bin.

**Đáp án đúng**: B

---

### Câu 47
**Chuyên đề**: Đặc biệt - Moodle Quiz

Một trong những nhược điểm của việc sử dụng Histogram đơn giản (như Histogram màu RGB) làm Feature Descriptor là gì?

A. Tính toán quá phức tạp và chậm.
B. Mất thông tin về cấu trúc và vị trí không gian của các điểm ảnh.
C. Không thích hợp cho các ứng dụng nhận dạng vật thể cần cấu trúc.
D. Dễ bị ảnh hưởng bởi nhiễu muối tiêu.

**Đáp án đúng**: B

---

### Câu 48
**Chuyên đề**: Đặc biệt - Moodle Quiz

Mục đích chính của bước Tiền xử lý (Pre-processing) là gì?

A. Để tạo ra vector đặc tả 128 chiều.
B. Để thực hiện phân lớp (classification).
C. Để loại bỏ các thành phần không mong muốn khỏi ảnh nhằm đơn giản hóa các bước xử lý tiếp theo.
D. Để phân tách ảnh thành các vùng màu khác nhau.

**Đáp án đúng**: C

---

### Câu 49
**Chuyên đề**: Đặc biệt - Moodle Quiz

Mục tiêu của thuật toán Harris Corner Detector là tìm ra các điểm có sự thay đổi lớn về cường độ điểm ảnh theo:

A. Chỉ theo chiều dọc.
B. Chỉ theo một hướng xác định.
C. Chỉ theo chiều ngang.
D. Mọi hướng.

**Đáp án đúng**: D

---

### Câu 50
**Chuyên đề**: Đặc biệt - Moodle Quiz

Histogram of Oriented Gradients (HOG) Descriptor thường được sử dụng cho ứng dụng nào đầu tiên?

A. Nhận diện mặt người.
B. Khai triển chuỗi Taylor.
C. Cân bằng Histogram.
D. Tìm vật thể trong ảnh (ví dụ: tìm người đi bộ).

**Đáp án đúng**: D

---

### Câu 51
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong HOG Descriptor (theo Dalal & Triggs), vector đặc tả cuối cùng có bao nhiêu chiều nếu cửa sổ = 64 × 128, phân vùng 𝑊 = 8 × 8, và 9 bins được sử dụng? 𝑊 𝑆

A. 3780 chiều (36 x 105).
B. 36 chiều.
C. 256 chiều.
D. 128 chiều.

**Đáp án đúng**: A

---

### Câu 52
**Chuyên đề**: Đặc biệt - Moodle Quiz

Một Phần tử Cấu trúc (Structuring Element) trong hình thái học là gì?

A. Một histogram màu.
B. Một vector đặc tả HOG.
C. Một ma trận nhỏ chứa các giá trị 0 và 1 dùng để quét qua ảnh nhị phân.
D. Một ma trận Sobel.

**Đáp án đúng**: C

---

### Câu 53
**Chuyên đề**: Đặc biệt - Moodle Quiz

Mục đích của việc phân tách ảnh (Segmentation) là gì?

A. Để tăng cường độ tương phản.
B. Để chia ảnh thành các vùng khác nhau nhằm đơn giản hóa ảnh và giảm độ phức tạp trong quá trình phân tích.
C. Để chuyển ảnh màu sang ảnh trắng đen.
D. Để làm mỏng các cạnh.

**Đáp án đúng**: B

---

### Câu 54
**Chuyên đề**: Đặc biệt - Moodle Quiz

Nếu một phân bố Tiền nghiệm (Prior) và Hàm khả năng (Likelihood) là một cặp liên hợp (conjugate), điều gì xảy ra?

A. Dữ liệu phải là Gaussian.
B. Phân bố Hậu nghiệm (Posterior) có cùng dạng với Prior.
C. Phân bố Likelihood có cùng dạng với Prior.
D. Phân bố Hậu nghiệm (Posterior) luôn là Gaussian.

**Đáp án đúng**: B

---

### Câu 55
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong Harris Corner Detector, kỹ thuật này vẫn lệ thuộc vào đặc tính nào của điểm góc, dẫn đến sự phát triển của SIFT?

A. Độ sáng của ảnh.
B. Kích thước (scale) của điểm góc (góc có thể trở thành đường cong khi thay đổi kích thước).
C. Góc quay của điểm ảnh.
D. Độ tương phản của ảnh.

**Đáp án đúng**: B

---

### Câu 56
**Chuyên đề**: Đặc biệt - Moodle Quiz

𝑆 Trong HOG Descriptor, mỗi khối (Block - 𝐵 ) thường được tạo từ bao nhiêu histogram của phân vùng ( 𝑊 )? 𝑆

A. Tám histogram.
B. Một histogram.
C. Bốn histogram.
D. Hai histogram.

**Đáp án đúng**: C

---

### Câu 57
**Chuyên đề**: Đặc biệt - Moodle Quiz

Giá trị LBP cơ bản (Local Binary Pattern) được tạo ra bằng cách tóm tắt thông tin gì của các điểm ảnh trong một vùng lân cận nhỏ 3 × 3?

A. Các mối quan hệ không gian (tương đối cường độ sáng) giữa tâm và lân cận.
B. Giá trị màu RGB.
C. Giá trị độ lớn gradient.
D. Tần suất xuất hiện của góc 45 ∘ .

**Đáp án đúng**: A

---

### Câu 58
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phép nhân chập ảnh (Convolution), nếu sử dụng Kernel làm mờ Gaussian 3 × 3, tại sao cần sử dụng Zero Padding với chiều rộng = 1? 𝑝

A. Để đảm bảo kích thước ảnh đầu ra bằng kích thước ảnh đầu vào.
B. Để nhân chập nhanh hơn.
C. Để loại bỏ nhiễu Salt-and-Pepper.
D. Để làm sắc nét ảnh đầu ra.

**Đáp án đúng**: A

---

### Câu 59
**Chuyên đề**: Đặc biệt - Moodle Quiz

Ảnh màu RGB được lưu trữ dưới dạng ma trận mấy chiều trong máy tính?

A. 2.5 chiều
B. 2 chiều
C. 3 chiều
D. 1 chiều

**Đáp án đúng**: C

---

### Câu 60
**Chuyên đề**: Đặc biệt - Moodle Quiz

Bộ lọc (Kernel) nào sau đây thường được sử dụng để làm sắc nét ảnh?

A. Kernel Gaussian 3x3 (1/16 * [[1, 2, 1], [2, 4, 2], [1, 2, 1]])
B. Kernel Box Filter 3x3 (1/9 * [[1, 1, 1], [1, 1, 1], [1, 1, 1]])
C. Kernel Sobel [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]
D. Kernel Laplacian [[0, -1, 0], [-1, 5, -1], [0, -1, 0]]

**Đáp án đúng**: D

---

### Câu 61
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phép Co ( xảy ra? 𝐀 ⊖ 𝐁), một pixel ở ảnh kết quả được đặt là 1 (foreground) nếu điều kiện nào

A. Tất cả các pixel trong vùng ảnh con đều là 0.
B. Có ít nhất một pixel của phần tử cấu trúc B trùng với pixel 1 của ảnh A.
C. A và phần tử B có cùng kích thước.
D. Toàn bộ phần tử cấu trúc B hoàn toàn chứa trong vùng ảnh con tương ứng của A.

**Đáp án đúng**: D

---

### Câu 62
**Chuyên đề**: Đặc biệt - Moodle Quiz

𝑓𝑥 Cho một pixel có giá trị ( ) = 100. Nếu áp dụng phép điều chỉnh độ tương phản và độ sáng với = 1.5 và = 10, giá trị pixel mới ( ) là bao nhiêu? 𝑎 𝑏 𝑔𝑥

A. 100
B. 160
C. 150
D. 115

**Đáp án đúng**: B

---

### Câu 63
**Chuyên đề**: Đặc biệt - Moodle Quiz

Ảnh số được lưu trữ trong máy tính dưới dạng cấu trúc dữ liệu nào?

A. Dưới dạng một tập hợp các hàm liên tục.
B. Dưới dạng một phân bố xác suất.
C. Dưới dạng một ma trận (hoặc tensor) lưu thông tin về màu sắc của các điểm ảnh.
D. Dưới dạng một chuỗi byte dài.

**Đáp án đúng**: C

---

### Câu 64
**Chuyên đề**: Đặc biệt - Moodle Quiz

𝐴 𝐵 Trong Phép Mở ( ∘ ), bước nào được thực hiện trước?

A. Cân bằng Histogram
B. Phép Dịch chuyển
C. Phép Co (Erosion)
D. Phép Giãn Nỡ (Dilation)

**Đáp án đúng**: C

---

### Câu 65
**Chuyên đề**: Đặc biệt - Moodle Quiz

Đâu là công thức chính xác cho Định luật Bayes?

A. p(Y|X) = [p(X|Y) * p(Y)] / p(X)
B. p(X) = ∑_Y p(X|Y)
C. p(Y|X) = p(X|Y) * p(Y)
D. p(Y|X) = [p(X|Y) * p(X)] / p(Y)

**Đáp án đúng**: A

---

### Câu 66
**Chuyên đề**: Đặc biệt - Moodle Quiz

𝑝 −𝜇 Công thức 𝑖𝑗 = 𝑖𝑗𝜎 mô tả kỹ thuật tiền xử lý nào, nhằm chỉnh giá trị trung bình về 0 và phương sai về 1? 𝑝𝑁

A. Whitening (Làm Trắng).
B. Hysteresis Thresholding.
C. Grayscale Normalization.
D. Cân bằng Histogram.

**Đáp án đúng**: A

---

### Câu 67
**Chuyên đề**: Đặc biệt - Moodle Quiz

Công thức kết quả? 𝐴 ⊕ 𝐵 = 𝑧|[𝑐𝑖𝑡𝑒𝑠𝑡𝑎𝑟𝑡]𝐵𝑧 ∩ 𝐴 ≠ ∅ có ý nghĩa là gì đối với một điểm ảnh 𝑧 trong ảnh

A. Có ít nhất một phần tử của B dịch chuyển đến z khớp với A (foreground).
B. z là điểm góc.
C. z là điểm biên.
D. z là điểm nền (background).

**Đáp án đúng**: A

---

### Câu 68
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong phương pháp Maximum Likelihood (ML), mục tiêu là tìm tập giá trị 𝜃ˆ cho các thông số của phân bố sao cho điều gì xảy ra?

A. Giảm thiểu sai số.
B. Tối đa hóa tiền nghiệm.
C. Tại đó tập dữ liệu {x_i} có khả năng xảy ra (likelihood) lớn nhất.
D. Tối thiểu hóa log-likelihood.

**Đáp án đúng**: C

---

### Câu 69
**Chuyên đề**: Đặc biệt - Moodle Quiz

Kỹ thuật Hysteresis Thresholding (Double Thresholding) sử dụng hai ngưỡng ( để giải quyết vấn đề gì trong dò cạnh Canny? 𝑇𝐻ℎ𝑖𝑔ℎ, 𝑇𝐻𝑙𝑜𝑤)

A. Để giảm lỗi khi điểm ảnh là cạnh nhưng có biên độ gradient thấp, hoặc không phải cạnh nhưng có biên độ cao (dựa trên tính liên tục của cạnh).
B. Để giảm thời gian tính toán gradient.
C. Để tăng tốc độ lọc nhiễu.
D. Để làm tròn góc gradient.

**Đáp án đúng**: A

---

### Câu 70
**Chuyên đề**: Đặc biệt - Moodle Quiz

Mục đích chính của bước Non-Maximum Suppression (NMS) trong thuật toán Canny là gì?

A. Làm mỏng các cạnh, đảm bảo chúng chỉ dày một pixel.
B. Tìm hướng gradient.
C. Quyết định một cạnh là mạnh hay yếu.
D. Giảm nhiễu ảnh gốc.

**Đáp án đúng**: A

---

### Câu 71
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong SIFT Descriptor, vector đặc tả cuối cùng có bao nhiêu chiều (kích thước chuẩn) và được tạo ra bằng cách nào?

A. 64 chiều, từ 8 histogram 8 bins.
B. 128 chiều, từ việc gộp 16 histogram (mỗi histogram 8 bins) của các vùng 4x4.
C. 256 chiều, từ LBP.
D. 36 chiều, từ 105 khối.

**Đáp án đúng**: B

---

### Câu 72
**Chuyên đề**: Đặc biệt - Moodle Quiz

Nếu áp dụng phép điều chỉnh tuyến tính phản của ảnh sẽ: 𝑔 (𝑥) = 𝑎𝑓 (𝑥) + 𝑏 với 𝑎 = 0.5 và 𝑏 = 0, độ tương

A. Tăng.
B. Không đổi.
C. Chuyển sang ảnh nhị phân.
D. Giảm.

**Đáp án đúng**: D

---

### Câu 73
**Chuyên đề**: Đặc biệt - Moodle Quiz

Tính liên hợp (Conjugacy) có vai trò quan trọng vì khi ta nhân một phân bố với phân bố liên hợp của nó, kết quả cuối cùng sẽ là gì?

A. Một phân bố mới có cùng dạng với phân bố liên hợp (VD: Bern(x|λ) * Beta(λ|α,β) cho ra Beta(λ) mới).
B. Sẽ luôn là một phân bố Gaussian.
C. Sẽ luôn là một hằng số.
D. Sẽ luôn là một phân bố Dirichlet.

**Đáp án đúng**: A

---

### Câu 74
**Chuyên đề**: Đặc biệt - Moodle Quiz

Trong ước lượng Maximum Likelihood (ML) cho phân bố Categorical với số 𝜆 𝑘 là gì? 𝐾 lớp, ước lượng tham

A. λ_k = (N_k + α_k - 1) / (N + Σ α_j - K)
B. λ_k = N / N_k
C. λ_k = 1 / K (luôn cố định đồng đều)
D. λ_k = N_k / N (với N_k là số lần xuất hiện lớp k, N là tổng số quan sát)

**Đáp án đúng**: D

---

## PHẦN 2: BỘ CÂU HỎI TỔNG HỢP NÂNG CAO & BÀI TẬP - 52 CÂU

### Câu 75
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Thuật toán dò cạnh Canny (Canny Edge Detector) thực hiện trọn vẹn theo 4 bước đúng thứ tự nào sau đây?

A. Phân ngưỡng Hysteresis → NMS → Tính Gradient → Giảm nhiễu bằng Gauss
B. NMS → Giảm nhiễu bằng Gauss → Tính Gradient → Phân ngưỡng Hysteresis
C. Tính Gradient → Giảm nhiễu bằng Gauss → Phân ngưỡng Hysteresis → NMS
D. Giảm nhiễu bằng Gauss → Tính Gradient → Loại bỏ điểm không phải cực đại (NMS) → Phân ngưỡng Hysteresis

**Đáp án đúng**: D
> **Giải thích**: Canny thực hiện Gaussian smoothing, tính gradient, non-maximum suppression (NMS), rồi hysteresis thresholding.

---

### Câu 76
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Quá trình số hóa hình ảnh từ tín hiệu liên tục trong thế giới thực sang định dạng kỹ thuật số bao gồm hai công đoạn cốt lõi nào?

A. Thu phóng (Scaling) và Đảo màu (Color Inversion)
B. Lọc không gian (Spatial Filtering) và Biến đổi Fourier (FFT)
C. Lấy mẫu (Sampling) và Lượng hóa (Quantization)
D. Tích chập (Convolution) và Tương quan (Correlation)

**Đáp án đúng**: C
> **Giải thích**: Sampling rời rạc hóa tọa độ không gian; quantization rời rạc hóa mức biên độ/cường độ.

---

### Câu 77
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Ứng dụng chụp ảnh toàn cảnh Panorama cần tìm các cặp điểm tương đồng giữa hai ảnh cùng khung cảnh nhưng khác kích thước và góc xoay. Thuật toán mô tả đặc trưng nào phù hợp nhất?

A. Local Binary Patterns (LBP)
B. Biểu đồ tần suất Histogram màu sắc
C. Box Filter
D. Scale-Invariant Feature Transform (SIFT)

**Đáp án đúng**: D
> **Giải thích**: SIFT tạo keypoint và descriptor có khả năng chống chịu thay đổi scale và rotation.

---

### Câu 78
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Ảnh camera giao thông đồng thời có nhiễu muối tiêu và nhiễu Gaussian. Chuỗi tiền xử lý nào khử nhiễu tốt mà vẫn giữ chi tiết biên?

A. Áp dụng Sobel Filter trước, sau đó dùng Box Filter
B. Áp dụng Canny Edge Detector trực tiếp trên ảnh thô
C. Áp dụng Median Filter trước để triệt tiêu nhiễu muối tiêu, sau đó dùng Bilateral Filter để khử nhiễu Gaussian mà vẫn bảo toàn đường biên
D. Thực hiện chuyển vị ma trận ảnh

**Đáp án đúng**: C
> **Giải thích**: Median Filter hiệu quả với nhiễu xung muối tiêu; Bilateral Filter làm mịn có xét cả khoảng cách không gian và chênh lệch cường độ để giữ biên.

---

### Câu 79
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Cho ảnh 4×4 (N=16 pixel, L=8 mức xám 0–7) có histogram: h(0)=4, h(1)=4, h(2)=2, h(3)=2, h(4)=2, h(5)=1, h(6)=1, h(7)=0. Theo s(v)=round((L−1)×CDF(v)), các mức xám cũ v=0,1,2,3 ánh xạ thành các mức mới nào?

A. s(0)=0, s(1)=2, s(2)=4, s(3)=6
B. s(0)=1, s(1)=2, s(2)=3, s(3)=4
C. s(0)=2, s(1)=4, s(2)=4, s(3)=5
D. s(0)=2, s(1)=3, s(2)=5, s(3)=7

**Đáp án đúng**: C
> **Giải thích**: CDF tại v=0,1,2,3 lần lượt là 4/16, 8/16, 10/16, 12/16. Nhân 7 và làm tròn được 2, 4, 4, 5.

---

### Câu 80
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Thiết kế hệ thống chấm công khuôn mặt trong điều kiện ánh sáng thay đổi liên tục: chuỗi thuật toán truyền thống nào kết hợp tốt giữa khả năng chịu biến thiên ánh sáng và tốc độ xử lý?

A. Canny Edge Detector → FFT → k-NN
B. Histogram 2 bin → biến đổi Perspective
C. Trích xuất LBP nhờ tính bất biến với biến đổi ánh sáng đồng đều → phân loại bằng Cascade/SVM
D. SVD nén ảnh → Box Filter → Hough Transform

**Đáp án đúng**: C
> **Giải thích**: LBP dựa trên quan hệ cường độ giữa pixel lân cận và pixel trung tâm, tương đối bền với biến đổi sáng đồng đều; Cascade/SVM là bộ phân loại phù hợp trong các lựa chọn.

---

### Câu 81
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong phép nhân chập 2D, mục đích chính của Zero Padding với chế độ SAME Padding là gì?

A. Chuyển ảnh RGB thành ảnh xám
B. Bảo toàn kích thước không gian của feature map và cho phép xử lý các điểm ảnh vùng biên
C. Tự động lật ngược kernel một góc
D. Làm tăng độ tương phản ở viền ngoài

**Đáp án đúng**: B
> **Giải thích**: SAME padding thêm biên để đầu ra giữ kích thước không gian theo quy ước SAME.

---

### Câu 82
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong HOG, tại sao các cell được nhóm thành các block gối lên nhau (overlapping blocks) để chuẩn hóa L2-Norm?

A. Chuyển đổi góc gradient từ độ sang radian
B. Giảm số chiều vector đặc trưng xuống tối thiểu
C. Loại bỏ các điểm biên Canny yếu
D. Tăng tính bền vững trước thay đổi ánh sáng, bóng râm và độ tương phản cục bộ

**Đáp án đúng**: D
> **Giải thích**: Chuẩn hóa block cục bộ và sự chồng lấp giúp descriptor bền hơn với biến thiên độ sáng/độ tương phản cục bộ.

---

### Câu 83
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong Canny, tại pixel có Sobel Gx=160 và Gy=−20, độ lớn gradient và hướng lượng tử hóa về 0°,45°,90°,135° lần lượt là gì?

A. Gmag≈140.0; hướng 45°
B. Gmag≈161.2; hướng 135°
C. Gmag≈161.2; hướng 0°
D. Gmag≈180.0; hướng 90°

**Đáp án đúng**: C
> **Giải thích**: Gmag=√(160²+(-20)²)≈161.2. Góc atan2(−20,160)≈−7.1°, quy về [0°,180°) là khoảng 172.9°, gần hướng 0°/180° nhất.

---

### Câu 84
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Ảnh 3×3 có I(1,1)=100 và I(3,3)=190. Áp dụng g(x)=a·f(x)+b với a=1.2, b=50 và clip về [0,255], hai giá trị đầu ra lần lượt là gì?

A. 170 và 255
B. 170 và 278
C. 120 và 240
D. 150 và 255

**Đáp án đúng**: A
> **Giải thích**: 100×1.2+50=170; 190×1.2+50=278, sau clipping còn 255.

---

### Câu 85
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Hai vector HOG v1=[3,4,0,12] và v2=[6,8,0,24]. Sau chuẩn hóa L2-Norm (bỏ qua epsilon), kết quả phản ánh tính chất nào?

A. Vector chuẩn hóa của v2 lớn gấp đôi v1
B. Chuẩn hóa L2-Norm biến vector HOG thành chuỗi LBP
C. Cả hai vector bị triệt tiêu về 0
D. Hai vector chuẩn hóa bằng nhau: [3/13, 4/13, 0, 12/13], thể hiện bất biến với phép nhân đồng đều trong ví dụ này

**Đáp án đúng**: D
> **Giải thích**: v2=2v1 nên ||v2||2=2||v1||2; chia mỗi vector cho chuẩn tương ứng cho cùng một vector chuẩn hóa. Đây là tính bất biến với phép co giãn dương đồng đều trong ví dụ, không phải miễn nhiễm tuyệt đối với mọi thay đổi ánh sáng.

---

### Câu 86
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Tại sao CLAHE thường tốt hơn Global Histogram Equalization khi xử lý ảnh thực tế?

A. CLAHE chuyển toàn bộ pixel về hai mức 0 và 255
B. CLAHE làm tăng kích thước khung hình
C. CLAHE chia ảnh thành các tiles để cân bằng cục bộ và dùng Clip Limit để hạn chế khuếch đại nhiễu ở vùng phẳng
D. CLAHE tự động biến đổi ảnh sang miền tần số Fourier

**Đáp án đúng**: C
> **Giải thích**: Cân bằng cục bộ cải thiện tương phản theo vùng; clipping hạn chế khuếch đại quá mức các đỉnh histogram và nhiễu.

---

### Câu 87
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong Eigenfaces, tại sao dùng eigenvectors và eigenvalues của ma trận hiệp phương sai?

A. Chuyển ảnh RGB thành ảnh nhị phân
B. Loại bỏ hoàn toàn méo ống kính
C. Tăng độ phân giải không gian
D. Xác định các hướng biến thiên chính có phương sai lớn, hỗ trợ nén và giảm chiều mà vẫn giữ thông tin biến thiên khuôn mặt

**Đáp án đúng**: D
> **Giải thích**: Eigenvectors của covariance biểu diễn các thành phần chính; eigenvalues cho biết lượng phương sai theo từng hướng.

---

### Câu 88
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Một cell SIFT có 4 pixel: (0,0) Mag=10, Angle=0°; (0,1) Mag=20, Angle=45°; (1,0) Mag=15, Angle=0°; (1,1) Mag=5, Angle=90°. Histogram 8-bin theo thứ tự 0°,45°,90°,135°,180°,225°,270°,315° là gì?

A. [0,25,20,5,0,0,0,0]
B. [25,20,5,0,0,0,0,0]
C. [10,20,15,5,0,0,0,0]
D. [50,0,0,0,0,0,0,0]

**Đáp án đúng**: B
> **Giải thích**: Bin 0° nhận 10+15=25; bin 45° nhận 20; bin 90° nhận 5; các bin còn lại bằng 0.

---

### Câu 89
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Vector HOG block v=[3,4,0,12]. Độ dài L2-Norm và vector sau chuẩn hóa là gì?

A. ||v||2=19; vnorm=[3/19,4/19,0,12/19]
B. ||v||2=13; vnorm=[1,1,0,1]
C. ||v||2=13; vnorm=[3/13,4/13,0,12/13]≈[0.231,0.308,0,0.923]
D. ||v||2=169; vnorm=[9,16,0,144]

**Đáp án đúng**: C
> **Giải thích**: ||v||2=√(9+16+0+144)=√169=13; chia từng phần tử cho 13.

---

### Câu 90
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Để phát hiện người đi bộ thời gian thực bằng phương pháp truyền thống, quy trình kết hợp descriptor và mô hình học máy nào phù hợp nhất?

A. Trích xuất HOG từ các cửa sổ trượt → phân loại bằng SVM
B. Median Filter → Affine → Naive Bayes
C. LBP → SVD → k-Means
D. Harris Corner → Histogram Equalization → Otsu

**Đáp án đúng**: A
> **Giải thích**: HOG mô tả phân bố hướng gradient; SVM phân loại vector HOG, là pipeline kinh điển cho phát hiện người đi bộ.

---

### Câu 91
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Cho I=[[5,6,5],[8,9,8],[5,6,5]] và kernel Laplacian [[0,1,0],[1,−4,1],[0,1,0]]. Giá trị đầu ra tại tâm với VALID padding là gì?

A. −8
B. 0
C. −36
D. +8

**Đáp án đúng**: A
> **Giải thích**: Tích chập tại tâm: 6+8+8+6−4×9=28−36=−8.

---

### Câu 92
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Ma trận kết cấu Harris S=[[225,200],[200,300]], k=0.04. Tính đáp ứng R=det(S)−k·trace(S)².

A. R=11025
B. R=16475
C. R=−13525
D. R=27500

**Đáp án đúng**: B
> **Giải thích**: det(S)=225×300−200²=27500; trace(S)=525; R=27500−0.04×525²=16475.

---

### Câu 93
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Với cửa sổ LBP có tâm 50 và các lân cận theo chiều kim đồng hồ bắt đầu góc trên-trái: 75,90,80,100,60,30,25,40. Quy ước ≥50→1, <50→0. Chuỗi và giá trị thập phân là gì?

A. 00011111 = 31
B. 11111000 = 248
C. 10101010 = 170
D. 11101000 = 232

**Đáp án đúng**: B
> **Giải thích**: Năm giá trị đầu ≥50, ba giá trị cuối <50: 11111000₂=248₁₀.

---

### Câu 94
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong Harris Corner Detector, vùng ảnh là một corner khi hai trị riêng λ1, λ2 của tensor kết cấu thỏa mãn điều kiện nào?

A. Cả λ1 và λ2 đều rất lớn
B. Cả hai đều rất nhỏ, xấp xỉ 0
C. Một trị riêng rất lớn, trị kia rất nhỏ
D. Hai trị riêng bằng nhau và âm

**Đáp án đúng**: A
> **Giải thích**: Corner có biến thiên cường độ mạnh theo cả hai phương, nên cả hai trị riêng đều lớn.

---

### Câu 95
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Tensor Harris có λ1=800 và λ2=50. Cấu trúc bề mặt thuộc loại nào và thuật toán phản ứng ra sao?

A. Cạnh (Edge) vì biến thiên mạnh theo một hướng (λ1≫λ2); đáp ứng R<0 nên bị loại khỏi danh sách góc
B. Nhiễu muối tiêu
C. Vùng phẳng (Flat); R≈0
D. Góc (Corner); đáp ứng R>0 đạt cực đại

**Đáp án đúng**: A
> **Giải thích**: *. Theo trị riêng, λ1≫λ2 biểu thị cấu trúc cạnh. Tuy nhiên, phần khẳng định R<0 không thể kết luận nếu đề không cho k. Nếu lấy k=0.04 thì R=800×50−0.04×850²=11100>0. Vì vậy B là lựa chọn gần nhất với ý phân loại cạnh, nhưng câu có lỗi/thiếu dữ kiện về dấu R.

---

### Câu 96
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Phép biến đổi hình học nào luôn bảo toàn tính song song của các đường thẳng?

A. Biến đổi Affine
B. Biến đổi Gamma
C. Biến đổi Perspective (phối cảnh)
D. Biến đổi Fourier

**Đáp án đúng**: A
> **Giải thích**: Biến đổi affine bảo toàn tính thẳng hàng và tính song song; phép phối cảnh nói chung không bảo toàn song song.

---

### Câu 97
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Cho P(TaiNhọn|Mèo)=0.8, P(TaiNhọn|Chó)=0.3, P(Mèo)=0.6, P(Chó)=0.4. Tính P(Mèo|TaiNhọn).

A. 0.500
B. 0.720
C. 0.800
D. 0.600

**Đáp án đúng**: C
> **Giải thích**: Bayes: 0.8×0.6 / (0.8×0.6+0.3×0.4)=0.48/0.60=0.8.

---

### Câu 98
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong FFT 2D, các thành phần tần số thấp đại diện cho thông tin gì?

A. Đường biên sắc nét và chi tiết nhỏ
B. Vùng phẳng/mảng màu đồng nhất, cường độ thay đổi chậm
C. Nhiễu hạt mịn tần số cao
D. Vùng ảnh cháy sáng cục bộ

**Đáp án đúng**: B
> **Giải thích**: Tần số thấp biểu diễn biến thiên chậm trên không gian; cạnh sắc và chi tiết nhỏ thường đóng góp thành phần tần số cao.

---

### Câu 99
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Gray World Assumption trong Auto White Balance dựa trên giả định nào?

A. Trung bình cường độ ba kênh R,G,B trên toàn ảnh là màu xám trung tính
B. Mọi ảnh phải đưa về mức xám 0–127
C. Pixel sáng nhất luôn có màu xám
D. Kênh Green luôn có năng lượng gấp đôi Red và Blue

**Đáp án đúng**: A
> **Giải thích**: Giả định Gray World cho rằng trung bình màu của cảnh là xám trung tính; cân bằng trắng hiệu chỉnh các kênh để đạt điều này.

---

### Câu 100
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Nhiệm vụ xác định vị trí đối tượng và khoanh vùng bằng bounding boxes được gọi là gì?

A. Object Detection
B. Object Segmentation
C. Image Whitening
D. Object Classification

**Đáp án đúng**: A
> **Giải thích**: Object detection dự đoán nhãn lớp và vị trí hộp bao của từng đối tượng.

---

### Câu 101
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong SIFT, Orientation Assignment dựa trên histogram gradient 36 bin mang lại đặc tính nào?

A. Tự động phân đoạn vật thể khỏi nền
B. Bất biến với scale
C. Bất biến với phép xoay ảnh
D. Bất biến với nhiễu muối tiêu

**Đáp án đúng**: C
> **Giải thích**: Gán hướng chuẩn cho keypoint giúp descriptor được biểu diễn tương đối theo hướng chính, tạo tính bất biến quay.

---

### Câu 102
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Nếu bỏ Gaussian smoothing trước khi tính Sobel trong Canny trên ảnh nhiễu hạt, hệ quả nghiêm trọng nhất là gì?

A. Đạo hàm khuếch đại biến thiên do nhiễu, tạo nhiều cạnh giả/đứt gãy
B. Ảnh đầu ra đen hoàn toàn
C. Hướng gradient bị cố định
D. Kích thước ảnh giảm 4 lần

**Đáp án đúng**: A
> **Giải thích**: Đạo hàm nhạy với biến thiên cường độ nhanh; nhiễu tần số cao có thể tạo nhiều đáp ứng gradient giả.

---

### Câu 103
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Cơ chế nào giúp Bilateral Filter làm mịn vùng phẳng nhưng giữ sắc nét đường biên?

A. Thay pixel tâm bằng median
B. Phân rã Wavelet tần số cao
C. Chỉ tính trên pixel có cường độ 0
D. Kết hợp trọng số khoảng cách không gian và độ chênh lệch cường độ

**Đáp án đúng**: D
> **Giải thích**: Trọng số range giảm ảnh hưởng của pixel khác cường độ, hạn chế làm nhòe qua biên.

---

### Câu 104
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Nhận diện biển báo ngoài trời khi RGB thay đổi theo nắng/bóng râm: giải pháp kiến trúc nào phù hợp nhất trong các lựa chọn?

A. Chuyển sang HSV và đặt ngưỡng trên Hue
B. Áp dụng Laplacian bậc hai
C. Tăng gấp đôi sampling/độ phân giải
D. Chuyển ảnh thành vector 1D và tính tích vô hướng

**Đáp án đúng**: A
> **Giải thích**: Hue tách thông tin sắc màu khỏi Value nên thường ổn định hơn RGB trước thay đổi độ sáng; lưu ý Hue kém tin cậy ở vùng ít bão hòa hoặc quá tối.

---

### Câu 105
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Công thức Định luật Bayes dùng trong nhận dạng và suy luận xác suất là công thức nào?

A. P(Y|X)=P(X|Y)P(Y)/P(X)
B. P(Y|X)=P(Y|X)P(X)/P(Y)
C. P(Y|X)=P(X)+P(Y)−P(X,Y)
D. P(Y|X)=P(X|Y)·P(X)

**Đáp án đúng**: A
> **Giải thích**: Bayes: posterior = likelihood × prior / evidence.

---

### Câu 106
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

HOG có cửa sổ 128×128 pixel, cell 16×16, block 2×2 cell, stride 1 cell, mỗi cell 9 bins. Chiều dài vector HOG là bao nhiêu?

A. 441
B. 128
C. 3780
D. 1764

**Đáp án đúng**: D
> **Giải thích**: Có 8×8=64 cell; số block=(8−2+1)²=49; mỗi block có 2×2×9=36 phần tử; tổng 49×36=1764.

---

### Câu 107
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong Canny hysteresis, pixel có Gmag=160, Tlow=100, Thigh=200 (weak edge) được xử lý thế nào?

A. Tự động loại bỏ vì không đạt ngưỡng cao
B. Giữ lại nếu kết nối trực tiếp/gián tiếp với ít nhất một strong edge
C. Tự động giữ lại vì vượt ngưỡng thấp
D. Chuyển thành điểm góc Harris

**Đáp án đúng**: B
> **Giải thích**: Weak edge chỉ được giữ nếu liên thông với strong edge; nếu không sẽ bị loại.

---

### Câu 108
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Dữ liệu pixel x=[0.8,0.9,1.0,0.8,1.0] theo Gaussian. Ước lượng ML cho trung bình và phương sai là gì?

A. μ̂=1.00 và σ̂²=0.002
B. μ̂=0.90 và σ̂²=0.008
C. μ̂=0.90 và σ̂²=0.040
D. μ̂=0.85 và σ̂²=0.010

**Đáp án đúng**: B
> **Giải thích**: μ̂=0.9; phương sai ML chia N=5: (0.01+0+0.01+0.01+0.01)/5=0.008.

---

### Câu 109
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Không gian màu nào tách Hue (thông tin sắc màu) khỏi Value (cường độ sáng)?

A. RGB
B. HSV
C. YIQ
D. CMYK

**Đáp án đúng**: B
> **Giải thích**: HSV biểu diễn Hue, Saturation và Value riêng biệt.

---

### Câu 110
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong thí nghiệm tung xúc xắc 20 lần, mặt số 1 xuất hiện 4 lần (N1=4). Ước lượng ML λ̂1 cho mặt số 1 là bao nhiêu?

A. 1/20
B. 4/20
C. 4/26
D. 1/6

**Đáp án đúng**: B
> **Giải thích**: Ước lượng ML cho xác suất categorical là tần suất thực nghiệm: λ̂1=N1/N=4/20=0.2.

---

### Câu 111
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Làm thế nào tính phân bố biên p(X) từ phân bố kết hợp p(X,Y)?

A. p(X) = ∑_Y p(X,Y) (cho biến rời rạc)
B. p(X) = ∫p(X,Y)dY (cho biến liên tục)
C. p(X) = p(X,Y)/p(Y)
D. Cả A và C đều đúng (tùy Y rời rạc hay liên tục)

**Đáp án đúng**: D
> **Giải thích**: Tính phân bố biên (marginalization): lấy tích phân qua Y nếu Y liên tục (A), hoặc lấy tổng qua Y nếu Y rời rạc (C). Do đó cả A và C đều đúng.

---

### Câu 112
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Ưu điểm chính của Full Bayesian so với ML và MAP là gì?

A. Luôn trả về một giá trị θ duy nhất giống ML
B. Không cần thông tin tiền nghiệm
C. Luôn tính nhanh hơn
D. Trả về phân bố xác suất p(θ|Data), cho phép đánh giá độ tin cậy/độ bất định của ước lượng

**Đáp án đúng**: D
> **Giải thích**: Full Bayesian giữ lại toàn bộ posterior thay vì chỉ lấy một ước lượng điểm như ML/MAP.

---

### Câu 113
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Khi tìm ước lượng ML cho phân bố Categorical, tại sao dùng nhân tử Lagrange?

A. Vì log-likelihood là hàm lồi
B. Để tìm minimum thay vì maximum
C. Để chuyển phép nhân thành phép cộng
D. Để xử lý ràng buộc Σ(k=1..K) λk=1

**Đáp án đúng**: D
> **Giải thích**: Các xác suất categorical phải không âm và tổng bằng 1; nhân tử Lagrange xử lý ràng buộc tổng bằng 1.

---

### Câu 114
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Để mô hình hóa xác suất của một sự kiện nhị phân (pixel là vật thể 1 hay nền 0), nên dùng phân bố nào?

A. Bernoulli
B. Categorical
C. Gaussian
D. Beta

**Đáp án đúng**: A
> **Giải thích**: Bernoulli mô hình hóa một biến ngẫu nhiên có hai kết quả 0/1.

---

### Câu 115
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Với prior Dir[α1,...,αK] và quan sát Nk lần cho mỗi kết quả k, posterior p(λ|Data) là gì?

A. Dir[N1,...,NK]
B. Dir[α1/N1,...,αK/NK]
C. Dir[α1−N1,...,αK−NK]
D. Dir[α1+N1,...,αK+NK]

**Đáp án đúng**: D
> **Giải thích**: Dirichlet là prior liên hợp của Categorical; tham số hậu nghiệm bằng tham số prior cộng số lần quan sát.

---

### Câu 116
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong câu hỏi hiển thị trên Moodle, thành phần P(X|Y) trong Định luật Bayes được gọi là gì?

A. Khả năng (Likelihood)
B. Bằng chứng (Evidence)
C. Hậu nghiệm (Posterior)
D. Tiền nghiệm (Prior)

**Đáp án đúng**: A
> **Giải thích**: P(X|Y) là likelihood: xác suất quan sát dữ liệu X khi giả thuyết Y đúng. P(Y|X) mới là posterior.

---

### Câu 117
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Phân bố Beta(α,β) thường mô tả phân bố của tham số nào?

A. μ (trung bình) của Gaussian
B. Ma trận hiệp phương sai Σ của Gaussian đa biến
C. λ (xác suất thành công) của Bernoulli
D. K (số kết quả) của Categorical

**Đáp án đúng**: C
> **Giải thích**: Beta là prior liên hợp phổ biến cho tham số xác suất λ của Bernoulli/Binomial.

---

### Câu 118
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Khi nhân likelihood với prior liên hợp (ví dụ Bernoulli và Beta), posterior thu được sẽ có tính chất gì?

A. Cùng dạng/họ phân bố với prior
B. Là hằng số
C. Cùng dạng với likelihood
D. Luôn là Gaussian

**Đáp án đúng**: A
> **Giải thích**: Tính liên hợp (conjugacy) nghĩa là posterior thuộc cùng họ phân bố với prior.

---

### Câu 119
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Categorical là trường hợp tổng quát của Bernoulli khi nào?

A. Xác suất các kết quả bằng nhau
B. Dữ liệu có phân bố hình chuông
C. Có nhiều hơn 2 kết quả rời rạc có thể có
D. Biến ngẫu nhiên liên tục

**Đáp án đúng**: C
> **Giải thích**: Bernoulli có hai kết quả; Categorical tổng quát hóa cho K kết quả rời rạc.

---

### Câu 120
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Cho P(X=Sấp|Y=Xu1)=0.3 và P(Y=Xu1)=0.5. Xác suất kết hợp P(X=Sấp,Y=Xu1) là bao nhiêu?

A. 0.5/0.3≈1.67
B. 0.3+0.5=0.8
C. 0.3/0.5=0.6
D. 0.3×0.5=0.15

**Đáp án đúng**: D
> **Giải thích**: P(X,Y)=P(X|Y)P(Y)=0.3×0.5=0.15.

---

### Câu 121
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Trong Gaussian một biến N(μ,σ²), tham số σ² quyết định điều gì?

A. Diện tích dưới đường cong
B. Vị trí đỉnh/trung bình
C. Giá trị lớn nhất
D. Độ rộng/phương sai của phân bố

**Đáp án đúng**: D
> **Giải thích**: σ² là phương sai; nó đo độ phân tán quanh trung bình μ.

---

### Câu 122
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Mục tiêu của Maximum Likelihood (ML) là gì?

A. Tìm θ để tối đa hóa p(θ)
B. Tìm toàn bộ phân bố p(θ|Data)
C. Tìm θ để tối đa hóa p(Data|θ)
D. Tìm θ để tối đa hóa p(θ|Data)

**Đáp án đúng**: C
> **Giải thích**: ML tối đa hóa likelihood của dữ liệu theo tham số θ.

---

### Câu 123
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Phương sai var[f] đo lường điều gì?

A. Mối tương quan giữa f(x) và f(y)
B. Tần suất xuất hiện của f(x)
C. Mức độ phân tán/sai lệch của f(x) quanh kỳ vọng
D. Giá trị trung bình của f(x)

**Đáp án đúng**: C
> **Giải thích**: Phương sai là kỳ vọng của bình phương độ lệch so với trung bình: Var[f]=E[(f−E[f])²].

---

### Câu 124
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Phân bố Dirichlet là phân bố liên hợp (conjugate) của phân bố nào?

A. Bernoulli
B. Beta
C. Categorical
D. Gaussian

**Đáp án đúng**: C
> **Giải thích**: Dirichlet là prior liên hợp của Categorical (và dạng mở rộng multinomial).

---

### Câu 125
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Để mô hình hóa vector đặc trưng nhiều chiều (ví dụ HOG) có các chiều tương quan, phân bố nào phù hợp nhất?

A. Gaussian đa biến (Multivariate Gaussian)
B. Dirichlet
C. Nhiều Gaussian một biến độc lập
D. Categorical

**Đáp án đúng**: A
> **Giải thích**: Gaussian đa biến dùng vector trung bình và ma trận hiệp phương sai để mô hình hóa tương quan giữa các chiều.

---

### Câu 126
**Chuyên đề**: Đặc biệt - Tổng hợp nâng cao

Theo tài liệu, “thời gian xe bus tới trễ” x∈(−∞,+∞) là ví dụ về biến ngẫu nhiên nào?

A. Liên tục (Continuous)
B. Rời rạc (Discrete)
C. Bernoulli
D. Categorical

**Đáp án đúng**: A
> **Giải thích**: Độ trễ được mô hình hóa trên miền giá trị thực liên tục theo giả thiết đề bài.

---

# BẢNG TỔNG HỢP ĐÁP ÁN (126 CÂU)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | **B** | 33 | **A** | 65 | **A** | 97 | **C** |
| 2 | **D** | 34 | **B** | 66 | **A** | 98 | **B** |
| 3 | **D** | 35 | **D** | 67 | **A** | 99 | **A** |
| 4 | **C** | 36 | **C** | 68 | **C** | 100 | **A** |
| 5 | **A** | 37 | **D** | 69 | **A** | 101 | **C** |
| 6 | **C** | 38 | **D** | 70 | **A** | 102 | **A** |
| 7 | **D** | 39 | **D** | 71 | **B** | 103 | **D** |
| 8 | **A** | 40 | **B** | 72 | **D** | 104 | **A** |
| 9 | **C** | 41 | **B** | 73 | **A** | 105 | **A** |
| 10 | **C** | 42 | **B** | 74 | **D** | 106 | **D** |
| 11 | **A** | 43 | **B** | 75 | **D** | 107 | **B** |
| 12 | **A** | 44 | **D** | 76 | **C** | 108 | **B** |
| 13 | **A** | 45 | **D** | 77 | **D** | 109 | **B** |
| 14 | **D** | 46 | **B** | 78 | **C** | 110 | **B** |
| 15 | **A** | 47 | **B** | 79 | **C** | 111 | **D** |
| 16 | **B** | 48 | **C** | 80 | **C** | 112 | **D** |
| 17 | **A** | 49 | **D** | 81 | **B** | 113 | **D** |
| 18 | **A** | 50 | **D** | 82 | **D** | 114 | **A** |
| 19 | **B** | 51 | **A** | 83 | **C** | 115 | **D** |
| 20 | **D** | 52 | **C** | 84 | **A** | 116 | **A** |
| 21 | **D** | 53 | **B** | 85 | **D** | 117 | **C** |
| 22 | **D** | 54 | **B** | 86 | **C** | 118 | **A** |
| 23 | **A** | 55 | **B** | 87 | **D** | 119 | **C** |
| 24 | **D** | 56 | **C** | 88 | **B** | 120 | **D** |
| 25 | **D** | 57 | **A** | 89 | **C** | 121 | **D** |
| 26 | **A** | 58 | **A** | 90 | **A** | 122 | **C** |
| 27 | **C** | 59 | **C** | 91 | **A** | 123 | **C** |
| 28 | **D** | 60 | **D** | 92 | **B** | 124 | **C** |
| 29 | **D** | 61 | **D** | 93 | **B** | 125 | **A** |
| 30 | **D** | 62 | **B** | 94 | **A** | 126 | **A** |
| 31 | **A** | 63 | **C** | 95 | **A** | - | - |
| 32 | **C** | 64 | **C** | 96 | **A** | - | - |