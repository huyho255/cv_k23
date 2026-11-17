# 50 CÂU TRẮC NGHIỆM - THAO TÁC VÀ XỬ LÝ ẢNH CƠ BẢN

## Phạm vi

- Point Operators
- RGB → Grayscale, Grayscale → Binary
- Điều chỉnh độ sáng và độ tương phản
- Gamma
- Linear Stretch
- Whitening
- Convolution, Correlation, Padding
- Gaussian, Sobel, Gradient

---

## Câu 1

Point Operator là phép xử lý trong đó giá trị pixel đầu ra phụ thuộc vào:

A. Toàn bộ ảnh
B. Pixel tương ứng của ảnh đầu vào
C. 8 pixel lân cận
D. Một kernel 3×3

---

## Câu 2

Công thức tổng quát của Point Operator là:

A. $g(i,j)=h(f(i,j))$
B. $g(i,j)=\sum K$
C. $g(i,j)=f(i-1,j)+f(i+1,j)$
D. $g(i,j)=K*f(i,j)$

---

## Câu 3

Trong công thức $g(x)=a\,f(x)+b$, tham số $a$ chủ yếu điều chỉnh:

A. Độ sáng
B. Độ tương phản
C. Độ phân giải
D. Số kênh màu

---

## Câu 4

Trong công thức $g(x)=a\,f(x)+b$, tham số $b$ chủ yếu điều chỉnh:

A. Độ sáng
B. Độ tương phản
C. Kích thước ảnh
D. Hướng gradient

---

## Câu 5

Nếu $a>1$ và $b=0$, ảnh có xu hướng:

A. Giảm tương phản
B. Tăng tương phản
C. Tối hoàn toàn
D. Chuyển thành binary

---

## Câu 6

Nếu $0<a<1$ và $b=0$, ảnh có xu hướng:

A. Tăng tương phản
B. Giảm tương phản
C. Đảo màu
D. Tăng độ phân giải

---

## Câu 7

Nếu $a=1$ và $b>0$, ảnh có xu hướng:

A. Sáng hơn
B. Tối hơn
C. Mờ hơn
D. Thu nhỏ

---

## Câu 8

Nếu $a=1$ và $b<0$, ảnh có xu hướng:

A. Sáng hơn
B. Tối hơn
C. Tăng số kênh
D. Tăng kích thước

---

## Câu 9

Công thức chuyển RGB sang Grayscale dùng trong tài liệu là:

A. $Gray=(R+G+B)/3$
B. $Gray=0.299R+0.587G+0.114B$
C. $Gray=0.5R+0.5B$
D. $Gray=R-G+B$

---

## Câu 10

Trong công thức RGB → Grayscale, kênh có trọng số lớn nhất là:

A. R
B. G
C. B
D. Cả ba bằng nhau

---

## Câu 11

Với $(R,G,B)=(255,0,0)$, giá trị Gray xấp xỉ là:

A. 29
B. 76
C. 150
D. 255

---

## Câu 12

Với $(R,G,B)=(0,255,0)$, giá trị Gray xấp xỉ là:

A. 29
B. 76
C. 150
D. 255

---

## Câu 13

Với $(R,G,B)=(0,0,255)$, giá trị Gray xấp xỉ là:

A. 29
B. 76
C. 150
D. 255

---

## Câu 14

Theo thuật toán trong tài liệu, nếu $G(i,j)>T$ thì pixel binary nhận giá trị:

A. 0
B. 1
C. T
D. G(i,j)

---

## Câu 15

Theo thuật toán trong tài liệu, nếu $G(i,j)=T$ thì pixel binary nhận giá trị:

A. 0
B. 1
C. 255
D. Không xác định

---

## Câu 16

Cho $T=128$ và pixel xám bằng 150. Kết quả binary là:

A. 0
B. 1
C. 128
D. 150

---

## Câu 17

Cho $T=128$ và dãy mức xám $[50,128,129,200]$. Dãy binary là:

A. $[0,0,1,1]$
B. $[0,1,1,1]$
C. $[1,0,0,1]$
D. $[1,1,0,0]$

---

## Câu 18

Cho $f=100,\ a=1,\ b=50$. Giá trị đầu ra là:

A. 50
B. 100
C. 150
D. 200

---

## Câu 19

Cho $f=100,\ a=1.5,\ b=20$. Giá trị đầu ra là:

A. 120
B. 150
C. 170
D. 200

---

## Câu 20

Phép biến đổi Gamma thuộc loại:

A. Biến đổi tuyến tính
B. Biến đổi phi tuyến
C. Biến đổi hình học
D. Lọc trung vị

---

## Câu 21

Theo tài liệu, công thức biến đổi Gamma cơ bản là:

A. $g=f^\gamma$
B. $g=\gamma f$
C. $g=f+\gamma$
D. $g=f/\gamma$

---

## Câu 22

Theo tài liệu, công thức Gamma Correction là:

A. $g=f^\gamma$
B. $g=f^{1/\gamma}$
C. $g=\gamma/f$
D. $g=f-\gamma$

---

## Câu 23

Với biến đổi Gamma $g=f^\gamma$, nếu $\gamma=1$ thì:

A. Ánh xạ cường độ không đổi
B. Ảnh thành đen
C. Ảnh thành trắng
D. Ảnh thành binary

---

## Câu 24

Với $f=0.5,\ \gamma=2$ và $g=f^\gamma$, kết quả là:

A. 0.25
B. 0.5
C. 0.707
D. 1

---

## Câu 25

Với Gamma Correction $g=f^{1/\gamma}$, $f=0.25,\ \gamma=2$, kết quả là:

A. 0.0625
B. 0.25
C. 0.5
D. 1

---

## Câu 26

Trong phần thực hành Gamma, pixel ảnh 8-bit trước khi lũy thừa được:

A. Chuẩn hóa về [0,1]
B. Nhân 255
C. Đổi sang binary
D. Lấy đạo hàm

---

## Câu 27

Sau Gamma Correction trên dữ liệu chuẩn hóa, để trở về ảnh 8-bit thường phải:

A. Chia 255
B. Nhân 255
C. Cộng 255
D. Bình phương

---

## Câu 28

Linear Stretch trong tài liệu còn được gọi là:

A. Contrast Stretching
B. Median Filtering
C. Thresholding
D. Erosion

---

## Câu 29

Mục tiêu chính của Linear Stretch là:

A. Mở rộng dải mức xám hẹp ra dải động lớn hơn
B. Giảm kích thước ảnh
C. Đổi RGB sang HSV
D. Tìm cạnh

---

## Câu 30

Công thức Linear Stretch đúng là:

A. $g=\frac{f-f_{min}}{f_{max}-f_{min}}(L-1)$
B. $g=f+f_{min}$
C. $g=f/f_{max}$
D. $g=(L-1)-f$

---

## Câu 31

Với ảnh 8-bit, giá trị của $L$ trong Linear Stretch là:

A. 8
B. 128
C. 255
D. 256

---

## Câu 32

Trong Linear Stretch, $f=f_{min}$ được ánh xạ về:

A. 0
B. 1
C. 128
D. 255

---

## Câu 33

Trong Linear Stretch ảnh 8-bit, $f=f_{max}$ được ánh xạ về:

A. 0
B. 1
C. 128
D. 255

---

## Câu 34

Cho $f_{min}=50,\ f_{max}=200,\ f=100,\ L=256$. Giá trị sau Linear Stretch là:

A. 50
B. 85
C. 100
D. 170

---

## Câu 35

Whitening trong tài liệu nhằm đưa trung bình của dữ liệu về xấp xỉ:

A. -1
B. 0
C. 1
D. 255

---

## Câu 36

Whitening nhằm đưa phương sai của dữ liệu về xấp xỉ:

A. 0
B. 0.5
C. 1
D. 255

---

## Câu 37

Công thức Whitening là:

A. $g=\frac{f-\mu}{\sigma}$
B. $g=f+\mu$
C. $g=f\sigma$
D. $g=\frac{f}{\mu}$

---

## Câu 38

Trong Whitening, việc trừ $\mu$ có tác dụng chính là:

A. Đưa tâm phân bố về 0
B. Đưa phương sai về 0
C. Tăng kích thước ảnh
D. Tạo binary

---

## Câu 39

Trong Whitening, việc chia cho $\sigma$ có tác dụng chính là:

A. Chuẩn hóa độ phân tán
B. Dịch mean lên 255
C. Xoay ảnh
D. Tạo histogram

---

## Câu 40

Trong Convolution toán học, trước khi trượt kernel lên ảnh phải:

A. Xoay kernel 180°
B. Xoay kernel 90°
C. Chuyển kernel thành binary
D. Không làm gì

---

## Câu 41

Trong Cross-Correlation, kernel được:

A. Xoay 180°
B. Áp trực tiếp không xoay
C. Đảo dấu toàn bộ
D. Chuyển vị bắt buộc

---

## Câu 42

Với kernel đối xứng như Gaussian, Convolution và Correlation thường:

A. Cho kết quả giống nhau
B. Luôn trái dấu
C. Luôn khác kích thước
D. Không thể so sánh

---

## Câu 43

Quy trình cơ bản khi áp dụng kernel là:

A. Slide → Multiply → Sum
B. Sum → Slide → Divide
C. Multiply → Rotate → Threshold
D. Threshold → Sum → Slide

---

## Câu 44

VALID Padding có đặc điểm:

A. Không thêm biên giả nên đầu ra nhỏ hơn
B. Luôn giữ nguyên kích thước
C. Thêm toàn số 1
D. Tăng kích thước ảnh

---

## Câu 45

Với ảnh 5×5, kernel 3×3, stride 1 và VALID Padding, kích thước đầu ra là:

A. 2×2
B. 3×3
C. 4×4
D. 5×5

---

## Câu 46

Với kernel 3×3, SAME Zero Padding thường dùng độ rộng padding:

A. 0
B. 1
C. 2
D. 3

---

## Câu 47

Kernel Gaussian 3×3 trong tài liệu có dạng hệ số chuẩn hóa:

A. $\frac{1}{16}\begin{bmatrix}1&2&1\\2&4&2\\1&2&1\end{bmatrix}$
B. $\frac{1}{9}\begin{bmatrix}1&1&1\\1&1&1\\1&1&1\end{bmatrix}$
C. $\begin{bmatrix}-1&0&1\\-2&0&2\\-1&0&1\end{bmatrix}$
D. $\begin{bmatrix}0&-1&0\\-1&5&-1\\0&-1&0\end{bmatrix}$

---

## Câu 48

Kernel Gaussian chủ yếu được dùng để:

A. Làm mờ và giảm nhiễu
B. Tìm góc
C. Nhị phân hóa
D. Xoay ảnh

---

## Câu 49

Độ lớn Gradient được tính bằng:

A. $G=\sqrt{G_x^2+G_y^2}$
B. $G=G_x+G_y$
C. $G=G_xG_y$
D. $G=|G_x-G_y|$

---

## Câu 50

Theo tài liệu, hướng Gradient được tính bởi:

A. $\theta=\arctan(G_y/G_x)$
B. $\theta=G_x+G_y$
C. $\theta=\sqrt{G_x^2+G_y^2}$
D. $\theta=G_xG_y$

---

# ĐÁP ÁN

| Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|
| 1 | B | 26 | A |
| 2 | A | 27 | B |
| 3 | B | 28 | A |
| 4 | A | 29 | A |
| 5 | B | 30 | A |
| 6 | B | 31 | D |
| 7 | A | 32 | A |
| 8 | B | 33 | D |
| 9 | B | 34 | B |
| 10 | B | 35 | B |
| 11 | B | 36 | C |
| 12 | C | 37 | A |
| 13 | A | 38 | A |
| 14 | B | 39 | A |
| 15 | A | 40 | A |
| 16 | B | 41 | B |
| 17 | A | 42 | A |
| 18 | C | 43 | A |
| 19 | C | 44 | A |
| 20 | B | 45 | B |
| 21 | A | 46 | B |
| 22 | B | 47 | A |
| 23 | A | 48 | A |
| 24 | A | 49 | A |
| 25 | C | 50 | A |