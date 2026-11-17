# 100 CÂU TRẮC NGHIỆM - FEATURE DETECTOR & DESCRIPTORS

## Phạm vi

- Canny Edge Detector
- Harris Corner Detector
- Local Binary Patterns (LBP)
- Histogram of Oriented Gradients (HOG)
- SIFT
- Histogram

---

## Câu 1

Thứ tự đúng của các bước chính trong Canny Edge Detector là:

A. Gaussian → Gradient → NMS → Hysteresis
B. Gradient → Gaussian → Hysteresis → NMS
C. NMS → Gaussian → Gradient → Hysteresis
D. Hysteresis → Gradient → Gaussian → NMS

---

## Câu 2

Bước đầu tiên của Canny dùng bộ lọc Gaussian chủ yếu để:

A. Giảm nhiễu trước khi tính đạo hàm
B. Tăng kích thước ảnh
C. Tạo histogram
D. Tăng số kênh màu

---

## Câu 3

Gradient rất nhạy với nhiễu vì gradient về bản chất liên quan đến:

A. Đạo hàm
B. Tích phân toàn ảnh
C. Histogram
D. Lượng tử hóa màu

---

## Câu 4

Trong Canny, độ lớn gradient được tính bằng:

A. $G=\sqrt{G_x^2+G_y^2}$
B. $G=G_x+G_y$
C. $G=G_xG_y$
D. $G=|G_x-G_y|$

---

## Câu 5

Theo tài liệu Canny, hướng gradient được tính bằng:

A. $\theta=\arctan(G_y/G_x)$
B. $\theta=G_x+G_y$
C. $\theta=\sqrt{G_x^2+G_y^2}$
D. $\theta=G_xG_y$

---

## Câu 6

Cho $G_x=60,\ G_y=80$. Độ lớn gradient bằng:

A. 20
B. 100
C. 140
D. 4800

---

## Câu 7

Cho $G_x=60,\ G_y=160$. Theo bài tập đã làm, độ lớn gradient xấp xỉ:

A. 120.00
B. 160.00
C. 170.88
D. 220.00

---

## Câu 8

Cho $G_x=60,\ G_y=160$. Hướng gradient xấp xỉ:

A. 20.56°
B. 45°
C. 69.44°
D. 90°

---

## Câu 9

Mục tiêu chính của Non-Maximum Suppression (NMS) trong Canny là:

A. Làm mỏng cạnh
B. Làm mờ ảnh
C. Tăng sáng ảnh
D. Đổi ảnh sang binary trước gradient

---

## Câu 10

Trong NMS, pixel hiện tại được so sánh với:

A. Hai pixel lân cận dọc theo hướng gradient
B. Tất cả pixel trong ảnh
C. Chỉ pixel bên trái
D. Bốn góc của ảnh

---

## Câu 11

Nếu hướng gradient là 0°, NMS thường so sánh pixel hiện tại với:

A. Trái và phải
B. Trên và dưới
C. Hai đường chéo
D. Bốn góc

---

## Câu 12

Nếu hướng gradient là 90°, NMS thường so sánh pixel hiện tại với:

A. Trái và phải
B. Trên và dưới
C. Trên-trái và dưới-phải
D. Trên-phải và dưới-trái

---

## Câu 13

Nếu pixel hiện tại không phải cực đại cục bộ theo hướng gradient, NMS sẽ:

A. Đưa giá trị về 0
B. Nhân đôi giá trị
C. Giữ nguyên
D. Đổi hướng gradient

---

## Câu 14

Trong Hysteresis, pixel có biên độ lớn hơn ngưỡng cao được gọi là:

A. Strong edge
B. Weak edge
C. Discard
D. Flat point

---

## Câu 15

Trong Hysteresis, pixel có biên độ nhỏ hơn ngưỡng thấp sẽ:

A. Bị loại
B. Luôn được giữ
C. Được xem là strong edge
D. Được nhân đôi

---

## Câu 16

Pixel có biên độ nằm giữa ngưỡng thấp và cao được gọi là:

A. Weak edge
B. Strong edge
C. Corner
D. Flat point

---

## Câu 17

Một weak edge được giữ lại khi:

A. Kết nối trực tiếp hoặc gián tiếp với strong edge
B. Nằm ở biên ảnh
C. Có hướng 0°
D. Có giá trị nhỏ hơn ngưỡng thấp

---

## Câu 18

Với $T_{high}=150,\ T_{low}=100$, pixel NMS có giá trị 180 là:

A. Strong edge
B. Weak edge
C. Discard
D. Không xác định

---

## Câu 19

Với $T_{high}=150,\ T_{low}=100$, pixel NMS có giá trị 130 là:

A. Strong edge
B. Weak edge
C. Discard
D. Corner

---

## Câu 20

Với $T_{high}=150,\ T_{low}=100$, pixel NMS có giá trị 90 là:

A. Strong edge
B. Weak edge
C. Discard
D. Keypoint

---

## Câu 21

Harris Corner Detector dùng để phát hiện chủ yếu:

A. Góc
B. Màu
C. Texture histogram
D. Scale-space

---

## Câu 22

Bước đầu của Harris thường tính hai ảnh gradient H và V bằng:

A. Sobel hoặc toán tử vi phân tương tự
B. Histogram Equalization
C. Gamma
D. LBP

---

## Câu 23

Trong Harris, H thường tương ứng với:

A. Gradient theo chiều ngang
B. Histogram
C. Hue
D. Hessian determinant

---

## Câu 24

Trong Harris, V thường tương ứng với:

A. Gradient theo chiều dọc
B. Value trong HSV
C. Variance
D. Vector descriptor

---

## Câu 25

Structure Tensor của Harris là ma trận kích thước:

A. 2×2
B. 3×3
C. 4×4
D. 8×8

---

## Câu 26

Các thành phần cơ bản tạo Structure Tensor gồm:

A. $h^2,\ v^2,\ hv$
B. $h,\ v,\ h+v$
C. $h^3,\ v^3,\ hv$
D. $|h|,\ |v|,\ h-v$

---

## Câu 27

Nếu $S=\begin{bmatrix}A&C\\C&B\end{bmatrix}$ thì $\det(S)$ bằng:

A. $AB-C^2$
B. $A+B$
C. $AB+C^2$
D. $A-B$

---

## Câu 28

Nếu $S=\begin{bmatrix}A&C\\C&B\end{bmatrix}$ thì $trace(S)$ bằng:

A. $A+B$
B. $AB-C^2$
C. $A+C+B$
D. $A-B$

---

## Câu 29

Theo slide Bài 3, công thức Harris response được ghi là:

A. $c=\det(S)-\kappa\,trace(S)$
B. $c=\det(S)+\kappa\,trace(S)$
C. $c=trace(S)-\det(S)$
D. $c=\det(S)/trace(S)$

---

## Câu 30

Theo Bài 4E và bài tập chuẩn có bình phương vết, công thức được dùng là:

A. $c=\det(S)-\kappa[trace(S)]^2$
B. $c=\det(S)+\kappa[trace(S)]^2$
C. $c=[\det(S)]^2-\kappa trace(S)$
D. $c=trace(S)-\kappa\det(S)$

---

## Câu 31

Khoảng giá trị κ được tài liệu Harris nêu là:

A. 0.04 đến 0.15
B. 0 đến 1
C. 1 đến 10
D. 10 đến 100

---

## Câu 32

Trong Structure Tensor, trọng số Gaussian thường nhằm:

A. Ưu tiên các pixel gần tâm
B. Ưu tiên pixel xa tâm
C. Loại toàn bộ gradient
D. Tăng kích thước tensor

---

## Câu 33

Nếu cả hai trị riêng λ1 và λ2 đều nhỏ, vùng đang xét có xu hướng là:

A. Vùng phẳng
B. Cạnh
C. Góc
D. Texture mạnh

---

## Câu 34

Nếu một trị riêng lớn và một trị riêng nhỏ, vùng đang xét có xu hướng là:

A. Cạnh
B. Góc
C. Vùng phẳng
D. Ảnh màu

---

## Câu 35

Nếu cả hai trị riêng đều lớn, vùng đang xét có xu hướng là:

A. Góc
B. Cạnh
C. Vùng phẳng
D. Nhiễu trắng

---

## Câu 36

Cho $S=\begin{bmatrix}800&0\\0&50\end{bmatrix}$. Hai trị riêng là:

A. 800 và 50
B. 850 và 0
C. 400 và 25
D. 800 và -50

---

## Câu 37

Với $S=\begin{bmatrix}800&0\\0&50\end{bmatrix}$, cấu trúc thiên về:

A. Cạnh
B. Góc
C. Vùng phẳng
D. Không xác định

---

## Câu 38

Cho $S=\begin{bmatrix}600&0\\0&600\end{bmatrix}$. Với $\kappa=0.05$, Harris chuẩn $c=\det(S)-\kappa trace(S)^2$ bằng:

A. 288000
B. 360000
C. 72000
D. 1200

---

## Câu 39

Sau khi tính Harris response, NMS được dùng để:

A. Giữ các cực đại cục bộ mạnh
B. Làm mờ ảnh
C. Tăng contrast
D. Tạo scale-space

---

## Câu 40

Một điểm được xác định là corner theo Harris khi:

A. Response vượt ngưỡng sau các bước xử lý
B. Gradient bằng 0
C. Chỉ λ1 lớn
D. Chỉ λ2 nhỏ

---

## Câu 41

LBP chủ yếu là một descriptor dùng để mô tả:

A. Kết cấu (texture)
B. Độ sâu ảnh
C. Scale-space
D. Phối cảnh

---

## Câu 42

LBP cơ bản 3×3 sử dụng bao nhiêu pixel lân cận quanh tâm?

A. 4
B. 8
C. 9
D. 16

---

## Câu 43

Trong LBP, nếu pixel lân cận lớn hơn hoặc bằng pixel tâm thì bit được gán:

A. 1
B. 0
C. -1
D. 255

---

## Câu 44

Trong LBP, nếu pixel lân cận nhỏ hơn pixel tâm thì bit được gán:

A. 0
B. 1
C. 255
D. -1

---

## Câu 45

Sau khi so sánh 8 lân cận trong LBP cơ bản, ta thu được:

A. Chuỗi nhị phân 8-bit
B. Vector 128 chiều
C. Histogram 36 bin
D. Tensor 2×2

---

## Câu 46

Giá trị LBP cuối cùng của pixel tâm thường được tạo bằng cách:

A. Chuyển chuỗi nhị phân sang thập phân
B. Tính determinant
C. Tính trace
D. Lấy log

---

## Câu 47

Một mẫu LBP được gọi là uniform khi số lần chuyển 0↔1 quanh vòng:

A. Không quá 2
B. Bằng đúng 4
C. Lớn hơn 4
D. Bằng 8

---

## Câu 48

Khi đếm transition của Uniform LBP, cần tính cả:

A. Chuyển từ bit cuối về bit đầu
B. Chỉ 4 bit đầu
C. Chỉ bit 0→bit 1 đầu tiên
D. Không cần xét vòng

---

## Câu 49

Chuỗi LBP 00000000 có số transition là:

A. 0
B. 1
C. 2
D. 8

---

## Câu 50

Chuỗi 00011110 có số transition quanh vòng là:

A. 0
B. 1
C. 2
D. 4

---

## Câu 51

Chuỗi 10101011 trong bài tập được phân loại là:

A. Non-uniform
B. Uniform
C. Không thể xác định
D. Rotation invariant tuyệt đối

---

## Câu 52

Theo tài liệu, Uniform LBP 8-bit có thể giảm 256 pattern xuống:

A. 59 nhóm
B. 128 nhóm
C. 36 nhóm
D. 10 nhóm bắt buộc

---

## Câu 53

59 nhóm Uniform LBP gồm:

A. 58 uniform + 1 non-uniform
B. 59 uniform
C. 58 non-uniform + 1 uniform
D. 9 uniform + 50 non-uniform

---

## Câu 54

Rotation Invariant LBP trong tài liệu có thể thực hiện bằng cách:

A. Dịch vòng bit và chọn giá trị thập phân nhỏ nhất
B. Tăng mọi pixel thêm 50
C. Xoay kernel 180°
D. Tính determinant

---

## Câu 55

Ưu điểm nổi bật của LBP trước thay đổi độ sáng đồng đều là:

A. Quan hệ so sánh tương đối thường không đổi
B. Luôn tăng contrast
C. Luôn làm mờ ảnh
D. Luôn giữ histogram RGB

---

## Câu 56

HOG là viết tắt của:

A. Histogram of Oriented Gradients
B. Histogram of Gaussian Data
C. High Order Gradient
D. Harris Orientation Graph

---

## Câu 57

Ý tưởng cốt lõi của HOG là mô tả vật thể thông qua:

A. Phân bố hướng và độ lớn gradient
B. Chỉ màu RGB
C. Chỉ giá trị pixel tâm
D. Chỉ histogram cường độ toàn ảnh

---

## Câu 58

Kích thước cell phổ biến trong tài liệu HOG là:

A. 8×8 pixel
B. 2×2 pixel
C. 16×16 cell
D. 64×128 cell

---

## Câu 59

Block phổ biến trong HOG gồm:

A. 2×2 cell
B. 1 pixel
C. 8×8 block độc lập
D. 16 histogram 36 bin

---

## Câu 60

Số bin hướng phổ biến trong tài liệu HOG là:

A. 9
B. 8
C. 36
D. 128

---

## Câu 61

Khoảng hướng HOG phổ biến trong tài liệu là:

A. 0° đến 180°
B. 0° đến 90°
C. 0° đến 360°
D. -180° đến 180° bắt buộc

---

## Câu 62

Với 9 bin trên 0°–180°, khoảng cách giữa các bin là:

A. 20°
B. 10°
C. 45°
D. 90°

---

## Câu 63

Trong histogram của một cell HOG, hướng gradient quyết định:

A. Bin được vote
B. Độ dài ảnh
C. Số block
D. Kích thước window

---

## Câu 64

Trong HOG, độ lớn gradient được dùng làm:

A. Trọng số vote
B. Số lượng cell
C. Stride
D. Ngưỡng nhị phân

---

## Câu 65

Một block 2×2 cell, mỗi cell 9 bin, tạo vector block có số chiều:

A. 18
B. 36
C. 72
D. 81

---

## Câu 66

Chuẩn hóa block trong HOG chủ yếu nhằm giảm ảnh hưởng của:

A. Ánh sáng và độ tương phản
B. Góc quay 90° tuyệt đối
C. Kích thước file
D. Định dạng PNG/JPG

---

## Câu 67

Các block HOG thường:

A. Gối lên nhau
B. Không bao giờ gối nhau
C. Chỉ có một block
D. Luôn bằng toàn ảnh

---

## Câu 68

Một cell có thể xuất hiện trong nhiều block vì:

A. Block trượt và gối lên nhau
B. Cell bị nhân bản ngẫu nhiên
C. Sobel tạo cell mới
D. Histogram bắt buộc 36 bin

---

## Câu 69

Vector HOG cuối cùng được tạo bằng cách:

A. Nối các vector block đã chuẩn hóa
B. Cộng tất cả pixel rồi chia đôi
C. Chỉ lấy block đầu tiên
D. Chuyển ảnh sang binary

---

## Câu 70

Một ứng dụng được tài liệu nêu cho HOG là:

A. Phát hiện người đi bộ
B. Cân bằng trắng
C. Nén JPEG
D. Xoay ảnh

---

## Câu 71

SIFT là viết tắt của:

A. Scale-Invariant Feature Transform
B. Spatial Image Filtering Transform
C. Scale Image Fourier Transform
D. Simple Invariant Feature Tensor

---

## Câu 72

SIFT gồm hai phần lớn:

A. Detector và Descriptor
B. Erosion và Dilation
C. RGB và HSV
D. ML và MAP

---

## Câu 73

Scale-space trong SIFT được xây dựng bằng:

A. Lọc Gaussian với nhiều giá trị σ
B. Chỉ một kernel Sobel
C. Histogram Equalization
D. LBP 3×3

---

## Câu 74

Mục đích dùng nhiều σ trong SIFT là:

A. Phát hiện đặc trưng ở nhiều tỉ lệ
B. Tăng số kênh màu
C. Giảm ảnh xuống binary
D. Chỉ tăng độ sáng

---

## Câu 75

DoG trong SIFT là viết tắt của:

A. Difference of Gaussians
B. Derivative of Gradient
C. Direction of Gaussian
D. Distribution of Gradients

---

## Câu 76

DoG được tạo bằng cách:

A. Trừ hai ảnh Gaussian ở các scale lân cận
B. Cộng hai ảnh Sobel
C. Nhân hai histogram
D. Chia ảnh cho variance

---

## Câu 77

Nếu một octave có 5 ảnh Gaussian liên tiếp như ví dụ slide, số ảnh DoG tạo được là:

A. 3
B. 4
C. 5
D. 6

---

## Câu 78

Một điểm ứng viên SIFT local extrema được so sánh với bao nhiêu điểm lân cận?

A. 8
B. 16
C. 26
D. 36

---

## Câu 79

26 điểm lân cận của local extrema trải trên:

A. Không gian và scale
B. Chỉ cùng một hàng
C. Chỉ cùng một ảnh RGB
D. Chỉ histogram

---

## Câu 80

Sau khi tìm local extrema, SIFT còn loại các điểm có:

A. Contrast thấp
B. Chỉ màu đỏ
C. Mean bằng 0
D. Histogram đều

---

## Câu 81

SIFT cũng loại các điểm có đáp ứng mạnh kiểu cạnh vì:

A. Điểm cạnh kém ổn định cho định vị keypoint
B. Cạnh luôn có magnitude bằng 0
C. Cạnh không có gradient
D. Cạnh không tồn tại trong ảnh xám

---

## Câu 82

Bước Orientation Assignment của SIFT nhằm tăng tính bất biến đối với:

A. Phép quay
B. Độ sâu bit
C. Định dạng ảnh
D. Padding

---

## Câu 83

Histogram hướng dùng để gán hướng keypoint trong slide SIFT có:

A. 36 bin
B. 8 bin
C. 9 bin
D. 128 bin

---

## Câu 84

36 bin hướng của Orientation Assignment tương ứng mỗi bin khoảng:

A. 10°
B. 20°
C. 45°
D. 90°

---

## Câu 85

Hướng chính của keypoint được lấy từ:

A. Đỉnh cao nhất của histogram hướng
B. Bin thấp nhất
C. Giá trị mean ảnh
D. Determinant tensor

---

## Câu 86

Theo slide, các đỉnh histogram trên bao nhiêu phần trăm đỉnh cao nhất cũng có thể được gán hướng?

A. 50%
B. 60%
C. 80%
D. 100%

---

## Câu 87

Cửa sổ dùng để tạo SIFT descriptor có kích thước:

A. 16×16 pixel
B. 8×8 pixel
C. 64×128 pixel
D. 3×3 pixel

---

## Câu 88

Cửa sổ 16×16 trong SIFT được chia thành:

A. 16 vùng 4×4
B. 8 vùng 8×8
C. 4 vùng 8×8
D. 128 vùng 1×1

---

## Câu 89

Mỗi vùng 4×4 của SIFT descriptor tạo histogram có:

A. 8 bin
B. 9 bin
C. 36 bin
D. 128 bin

---

## Câu 90

Chiều dài descriptor SIFT chuẩn là:

A. 64
B. 128
C. 256
D. 3780

---

## Câu 91

Histogram dùng làm feature descriptor bằng cách:

A. Đếm tần suất các giá trị vào các bin
B. Tính determinant
C. Tính eigenvalue
D. Xoay kernel

---

## Câu 92

Mỗi phần tử trong vector histogram thường biểu diễn:

A. Số lượng/tần suất trong một bin
B. Một tọa độ keypoint
C. Một trị riêng
D. Một kernel

---

## Câu 93

Histogram màu có thể được tạo bằng cách:

A. Tính histogram cho từng kênh màu rồi ghép lại
B. Chỉ lấy pixel tâm
C. Chỉ dùng Sobel
D. Chỉ dùng DoG

---

## Câu 94

Histogram LBP được tạo sau khi:

A. Tính giá trị LBP cho các pixel rồi đếm tần suất
B. Tính DoG
C. Tính Harris tensor
D. Xoay ảnh

---

## Câu 95

Ưu điểm nổi bật của histogram là:

A. Đơn giản và tính nhanh
B. Luôn giữ toàn bộ vị trí pixel
C. Luôn bất biến scale tuyệt đối
D. Luôn cho vector 128 chiều

---

## Câu 96

Hạn chế lớn nhất của histogram toàn cục là:

A. Mất thông tin không gian
B. Không thể đếm pixel
C. Không dùng được với màu
D. Không tạo được vector

---

## Câu 97

Hai ảnh có bố trí pixel khác nhau nhưng cùng số lượng giá trị trong từng bin có thể:

A. Cho histogram giống nhau
B. Luôn cho histogram khác nhau
C. Không tính được histogram
D. Luôn có cùng hình dạng

---

## Câu 98

Histogram đơn giản phù hợp hơn với bài toán:

A. Mô tả màu hoặc texture
B. Khôi phục chính xác hình dạng không gian
C. Xác định scale-space
D. Tính Harris response

---

## Câu 99

Theo tài liệu, để bổ sung thông tin cấu trúc không gian cho histogram có thể dùng:

A. HOG hoặc SIFT descriptor
B. Chỉ brightness
C. Chỉ Gamma
D. Chỉ Whitening

---

## Câu 100

Nếu dùng LBP đã rút gọn còn 10 giá trị, histogram LBP của một vùng có:

A. 10 bin
B. 8 bin
C. 36 bin
D. 128 bin

---

# ĐÁP ÁN

| Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|
| 1 | A | 51 | A |
| 2 | A | 52 | A |
| 3 | A | 53 | A |
| 4 | A | 54 | A |
| 5 | A | 55 | A |
| 6 | B | 56 | A |
| 7 | C | 57 | A |
| 8 | C | 58 | A |
| 9 | A | 59 | A |
| 10 | A | 60 | A |
| 11 | A | 61 | A |
| 12 | B | 62 | A |
| 13 | A | 63 | A |
| 14 | A | 64 | A |
| 15 | A | 65 | B |
| 16 | A | 66 | A |
| 17 | A | 67 | A |
| 18 | A | 68 | A |
| 19 | B | 69 | A |
| 20 | C | 70 | A |
| 21 | A | 71 | A |
| 22 | A | 72 | A |
| 23 | A | 73 | A |
| 24 | A | 74 | A |
| 25 | A | 75 | A |
| 26 | A | 76 | A |
| 27 | A | 77 | B |
| 28 | A | 78 | C |
| 29 | A | 79 | A |
| 30 | A | 80 | A |
| 31 | A | 81 | A |
| 32 | A | 82 | A |
| 33 | A | 83 | A |
| 34 | A | 84 | A |
| 35 | A | 85 | A |
| 36 | A | 86 | C |
| 37 | A | 87 | A |
| 38 | A | 88 | A |
| 39 | A | 89 | A |
| 40 | A | 90 | B |
| 41 | A | 91 | A |
| 42 | B | 92 | A |
| 43 | A | 93 | A |
| 44 | A | 94 | A |
| 45 | A | 95 | A |
| 46 | A | 96 | A |
| 47 | A | 97 | A |
| 48 | A | 98 | A |
| 49 | A | 99 | A |
| 50 | C | 100 | A |