# 50 CÂU TRẮC NGHIỆM - PHÉP BIẾN ĐỔI HÌNH THÁI HỌC & HÌNH HỌC

## Phạm vi

- Dilation
- Erosion
- Opening
- Closing
- Rotation
- Interpolation

> Lưu ý: phần Rotation/Interpolation bám theo tài liệu đã upload. Phần Morphological không có chương lý thuyết riêng trong bộ PDF hiện tại nên các câu hỏi Morphological sử dụng kiến thức chuẩn bổ sung.

---

## Câu 1

Phép biến đổi hình thái học (Morphological Processing) chủ yếu dùng để xử lý:

A. Hình dạng và cấu trúc của đối tượng trong ảnh
B. Màu RGB của toàn ảnh
C. Tần số Fourier
D. Xác suất Bayes

---

## Câu 2

Phần tử cấu trúc dùng trong phép hình thái học thường được gọi là:

A. Structuring Element
B. Histogram Bin
C. Gradient Vector
D. Feature Map

---

## Câu 3

Trong ảnh nhị phân, nếu quy ước foreground = 1 thì Dilation thường làm vùng foreground:

A. Lớn hơn
B. Nhỏ hơn
C. Không đổi bắt buộc
D. Biến thành grayscale

---

## Câu 4

Trong ảnh nhị phân, Erosion thường làm vùng foreground:

A. Lớn hơn
B. Nhỏ hơn
C. Sáng hơn
D. Tăng số bit

---

## Câu 5

Ký hiệu thường dùng cho phép Dilation của tập A bởi B là:

A. $A\oplus B$
B. $A\ominus B$
C. $A\circ B$
D. $A\bullet B$

---

## Câu 6

Ký hiệu thường dùng cho phép Erosion của tập A bởi B là:

A. $A\oplus B$
B. $A\ominus B$
C. $A+B$
D. $A/B$

---

## Câu 7

Dilation thường hữu ích khi muốn:

A. Mở rộng vật thể foreground
B. Thu nhỏ vật thể foreground
C. Giảm số kênh màu
D. Tính gradient

---

## Câu 8

Erosion thường hữu ích khi muốn:

A. Làm vật thể foreground co lại
B. Làm vật thể foreground nở ra
C. Tăng độ sáng
D. Xoay ảnh

---

## Câu 9

Dilation có thể giúp:

A. Lấp các khe nhỏ giữa các vùng foreground
B. Tách RGB thành ba kênh
C. Tính histogram
D. Nội suy ảnh

---

## Câu 10

Erosion có thể giúp:

A. Loại các điểm foreground nhỏ
B. Làm mọi vùng sáng lớn ra
C. Tăng độ phân giải
D. Làm ảnh màu hơn

---

## Câu 11

Phép Opening được thực hiện theo thứ tự:

A. Erosion → Dilation
B. Dilation → Erosion
C. Dilation → Dilation
D. Erosion → Erosion

---

## Câu 12

Công thức của Opening là:

A. $A\circ B=(A\ominus B)\oplus B$
B. $A\circ B=(A\oplus B)\ominus B$
C. $A\circ B=A+B$
D. $A\circ B=A-B$

---

## Câu 13

Phép Closing được thực hiện theo thứ tự:

A. Erosion → Dilation
B. Dilation → Erosion
C. Erosion → Erosion
D. Dilation → Dilation

---

## Câu 14

Công thức của Closing là:

A. $A\bullet B=(A\oplus B)\ominus B$
B. $A\bullet B=(A\ominus B)\oplus B$
C. $A\bullet B=A+B$
D. $A\bullet B=A-B$

---

## Câu 15

Opening thường được dùng để:

A. Loại nhiễu foreground nhỏ
B. Lấp lỗ nhỏ trong vật thể
C. Xoay ảnh
D. Tăng contrast

---

## Câu 16

Closing thường được dùng để:

A. Lấp lỗ hoặc khe nhỏ trong foreground
B. Loại toàn bộ foreground
C. Chuyển RGB sang Gray
D. Tính gradient

---

## Câu 17

Opening có xu hướng làm đứt các cầu nối foreground rất mảnh vì bước đầu tiên là:

A. Erosion
B. Dilation
C. Rotation
D. Interpolation

---

## Câu 18

Closing có xu hướng nối các đoạn foreground gần nhau vì bước đầu tiên là:

A. Erosion
B. Dilation
C. Thresholding
D. Gamma

---

## Câu 19

Kết quả của Opening phụ thuộc vào:

A. Hình dạng và kích thước Structuring Element
B. Chỉ độ sáng trung bình ảnh
C. Chỉ số lượng kênh
D. Chỉ kích thước file

---

## Câu 20

Kết quả của Closing phụ thuộc vào:

A. Structuring Element
B. Chỉ histogram toàn cục
C. Chỉ định dạng JPG/PNG
D. Không phụ thuộc tham số nào

---

## Câu 21

Trong grayscale morphology với structuring element phẳng, Dilation gần tương đương với phép:

A. Lấy cực đại cục bộ
B. Lấy cực tiểu cục bộ
C. Lấy trung bình toàn ảnh
D. Lấy đạo hàm

---

## Câu 22

Trong grayscale morphology với structuring element phẳng, Erosion gần tương đương với phép:

A. Lấy cực đại cục bộ
B. Lấy cực tiểu cục bộ
C. Lấy trung bình toàn ảnh
D. Lấy Fourier

---

## Câu 23

Nếu vùng lân cận grayscale là [10, 20, 30, 40, 50], Dilation phẳng trả về:

A. 10
B. 20
C. 30
D. 50

---

## Câu 24

Nếu vùng lân cận grayscale là [10, 20, 30, 40, 50], Erosion phẳng trả về:

A. 10
B. 20
C. 30
D. 50

---

## Câu 25

Nếu tăng kích thước Structuring Element trong Dilation, hiệu ứng thường sẽ:

A. Mạnh hơn
B. Yếu hơn bắt buộc
C. Biến mất
D. Không bao giờ thay đổi

---

## Câu 26

Nếu tăng kích thước Structuring Element trong Erosion, hiệu ứng co thường sẽ:

A. Mạnh hơn
B. Yếu hơn bắt buộc
C. Không thay đổi
D. Biến thành dilation

---

## Câu 27

Phát biểu nào đúng về Opening?

A. Bước Dilation phải áp dụng lên kết quả Erosion
B. Bước Dilation áp dụng lại lên ảnh gốc
C. Opening chỉ có một bước
D. Opening luôn tăng kích thước ảnh

---

## Câu 28

Phát biểu nào đúng về Closing?

A. Bước Erosion phải áp dụng lên kết quả Dilation
B. Bước Erosion luôn áp dụng lên ảnh gốc
C. Closing chỉ có một bước
D. Closing là phép xoay

---

## Câu 29

Nếu mục tiêu là loại một chấm trắng nhỏ trên nền đen nhưng giữ vật thể trắng lớn, phép phù hợp nhất thường là:

A. Opening
B. Closing
C. Rotation
D. Bilinear interpolation

---

## Câu 30

Nếu mục tiêu là lấp một lỗ đen nhỏ bên trong một vật thể trắng, phép phù hợp nhất thường là:

A. Opening
B. Closing
C. Erosion đơn
D. Gamma correction

---

## Câu 31

Phép biến đổi hình học chủ yếu làm thay đổi:

A. Tọa độ/vị trí pixel
B. Chỉ giá trị màu của pixel
C. Chỉ histogram
D. Chỉ số bit

---

## Câu 32

Ma trận xoay 2D chuẩn trong hệ tọa độ Descartes là:

A. $R(\theta)=\begin{bmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix}$
B. $R(\theta)=\begin{bmatrix}\cos\theta&\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix}$
C. $R(\theta)=\begin{bmatrix}1&\theta\\0&1\end{bmatrix}$
D. $R(\theta)=\begin{bmatrix}\theta&0\\0&\theta\end{bmatrix}$

---

## Câu 33

Trong hệ tọa độ Descartes, xoay một điểm một góc 90° ngược chiều kim đồng hồ dùng:

A. cos90° = 0, sin90° = 1
B. cos90° = 1, sin90° = 0
C. cos90° = -1, sin90° = 0
D. cos90° = 0, sin90° = -1

---

## Câu 34

Điểm (2,1) xoay 90° ngược chiều kim đồng hồ quanh gốc tọa độ trở thành:

A. (1,2)
B. (-1,2)
C. (2,-1)
D. (-2,1)

---

## Câu 35

Trong OpenCV, gốc tọa độ ảnh thường nằm ở:

A. Góc trên trái
B. Góc dưới trái
C. Tâm ảnh
D. Góc trên phải

---

## Câu 36

Trong hệ tọa độ ảnh OpenCV, trục y thường tăng theo hướng:

A. Đi xuống
B. Đi lên
C. Sang trái
D. Sang phải

---

## Câu 37

Khi xoay ảnh quanh tâm ảnh, cần xác định:

A. Tâm xoay
B. Chỉ histogram
C. Chỉ độ sáng
D. Chỉ số bin

---

## Câu 38

Hàm OpenCV dùng trong tài liệu để tạo ma trận xoay quanh tâm là:

A. cv2.getRotationMatrix2D
B. cv2.equalizeHist
C. cv2.Sobel
D. cv2.threshold

---

## Câu 39

Hàm OpenCV dùng trong tài liệu để áp dụng phép xoay/affine lên ảnh là:

A. cv2.warpAffine
B. cv2.imread
C. cv2.inRange
D. cv2.GaussianBlur

---

## Câu 40

Tại sao phép xoay ảnh thường cần nội suy?

A. Tọa độ nguồn sau biến đổi có thể không rơi đúng vào vị trí pixel nguyên
B. Vì ảnh luôn bị nhiễu Gaussian
C. Vì phải đổi sang RGB
D. Vì phải tính histogram

---

## Câu 41

Nearest Neighbor Interpolation chọn giá trị pixel dựa trên:

A. Pixel gần tọa độ cần nội suy nhất
B. Trung bình toàn ảnh
C. Pixel xa nhất
D. Tất cả pixel trong ảnh

---

## Câu 42

Ưu điểm chính của Nearest Neighbor là:

A. Tính nhanh và đơn giản
B. Luôn cho ảnh mượt nhất
C. Luôn tốt hơn bicubic
D. Loại nhiễu tốt nhất

---

## Câu 43

Nhược điểm thường gặp của Nearest Neighbor khi phóng to/xoay ảnh là:

A. Răng cưa hoặc blocky
B. Ảnh luôn quá mờ
C. Không thể dùng với ảnh xám
D. Làm mất toàn bộ màu

---

## Câu 44

Bilinear Interpolation trong ảnh 2D thường sử dụng bao nhiêu pixel lân cận gần nhất?

A. 2
B. 3
C. 4
D. 8

---

## Câu 45

Bilinear Interpolation có bản chất là:

A. Nội suy tuyến tính theo hai chiều
B. Chọn đúng một pixel gần nhất
C. Lấy median 9 pixel
D. Dùng Fourier

---

## Câu 46

So với Nearest Neighbor, Bilinear thường cho ảnh:

A. Mượt hơn
B. Răng cưa hơn bắt buộc
C. Luôn sắc hơn tuyệt đối
D. Không thay đổi

---

## Câu 47

Bicubic Interpolation thường sử dụng vùng lân cận:

A. Lớn hơn Bilinear
B. Nhỏ hơn Nearest Neighbor
C. Chỉ một pixel
D. Không dùng pixel lân cận

---

## Câu 48

Trong tài liệu, với các góc quay đặc biệt 90°, 180°, 270°, có thể tận dụng:

A. Hoán vị/sắp xếp lại ma trận thay vì luôn phải nội suy tổng quát
B. Gamma correction
C. Whitening
D. Histogram equalization

---

## Câu 49

Trong nội suy khi xoay ảnh, dùng floor và ceil của tọa độ nguồn nhằm:

A. Xác định các pixel lân cận để nội suy
B. Tính histogram
C. Tìm trị riêng
D. Tính gradient

---

## Câu 50

Nếu cần nội suy một ảnh mask chứa nhãn rời rạc, phương pháp thường phù hợp nhất là:

A. Nearest Neighbor
B. Bilinear
C. Bicubic
D. Gaussian blur

---

# ĐÁP ÁN

| Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|
| 1 | A | 26 | A |
| 2 | A | 27 | A |
| 3 | A | 28 | A |
| 4 | B | 29 | A |
| 5 | A | 30 | B |
| 6 | B | 31 | A |
| 7 | A | 32 | A |
| 8 | A | 33 | A |
| 9 | A | 34 | B |
| 10 | A | 35 | A |
| 11 | A | 36 | A |
| 12 | A | 37 | A |
| 13 | B | 38 | A |
| 14 | A | 39 | A |
| 15 | A | 40 | A |
| 16 | A | 41 | A |
| 17 | A | 42 | A |
| 18 | B | 43 | A |
| 19 | A | 44 | C |
| 20 | A | 45 | A |
| 21 | A | 46 | A |
| 22 | B | 47 | A |
| 23 | D | 48 | A |
| 24 | A | 49 | A |
| 25 | A | 50 | A |