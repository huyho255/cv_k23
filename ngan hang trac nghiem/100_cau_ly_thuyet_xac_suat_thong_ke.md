# 100 CÂU TRẮC NGHIỆM - LÝ THUYẾT XÁC SUẤT & THỐNG KÊ

## Phạm vi

- Biến ngẫu nhiên rời rạc/liên tục; PMF/PDF
- Xác suất kết hợp, phân bố biên, xác suất có điều kiện
- Định luật Bayes: Posterior, Likelihood, Prior, Evidence
- Bernoulli và Categorical
- Gaussian 1-biến và đa biến
- Maximum Likelihood (ML)
- Maximum A Posteriori (MAP)

---

## Câu 1

Biến ngẫu nhiên là:

A. Biến có thể nhận các giá trị khác nhau theo kết quả ngẫu nhiên
B. Một hằng số luôn bằng 1
C. Một ma trận ảnh bắt buộc
D. Một tham số chỉ dùng cho Gaussian

---

## Câu 2

Ví dụ nào là biến ngẫu nhiên rời rạc theo tài liệu?

A. Kết quả tung đồng xu Sấp/Ngửa
B. Thời gian xe bus tới trễ
C. Nhiệt độ liên tục
D. Chiều cao liên tục

---

## Câu 3

Ví dụ nào là biến ngẫu nhiên liên tục theo tài liệu?

A. Thời gian xe bus tới trễ
B. Kết quả Sấp/Ngửa
C. Nhãn Mèo/Chó
D. Mặt xúc xắc 1–6

---

## Câu 4

Phân bố xác suất p(x) dùng để mô tả:

A. Khả năng xảy ra của các giá trị x
B. Kích thước ảnh
C. Số lượng kênh RGB
D. Hướng gradient

---

## Câu 5

PMF được dùng chủ yếu cho:

A. Biến rời rạc
B. Biến liên tục
C. Ảnh RGB
D. Vector gradient

---

## Câu 6

PDF được dùng chủ yếu cho:

A. Biến liên tục
B. Biến rời rạc
C. Chỉ biến nhị phân
D. Chỉ Categorical

---

## Câu 7

Với biến liên tục, xác suất để x nằm trong khoảng (a,b) được tính bằng:

A. $\int_a^b p(x)\,dx$
B. $p(a)+p(b)$
C. $p(a)p(b)$
D. $b-a$

---

## Câu 8

Tổng xác suất của tất cả các giá trị có thể có của một biến ngẫu nhiên bằng:

A. 0
B. 0.5
C. 1
D. Không giới hạn

---

## Câu 9

Với biến rời rạc X, p(X=x_k) biểu diễn:

A. Xác suất X nhận giá trị x_k
B. Phương sai của X
C. Mean của X
D. Gradient của X

---

## Câu 10

Phân bố xác suất rời rạc có thể được mô tả trực quan bằng:

A. Histogram
B. Ma trận xoay
C. Sobel kernel
D. DoG

---

## Câu 11

Phân bố xác suất liên tục trong tài liệu được mô tả bằng:

A. Hàm mật độ xác suất PDF
B. PMF
C. LBP
D. HOG

---

## Câu 12

Nếu một đồng xu lý tưởng có hai kết quả Sấp và Ngửa, xác suất mỗi mặt là:

A. 0.25
B. 0.5
C. 0.75
D. 1.0

---

## Câu 13

Biến X∈{0,1} là ví dụ của biến:

A. Rời rạc
B. Liên tục
C. Đa biến liên tục
D. Không phải biến ngẫu nhiên

---

## Câu 14

Biến X∈(-∞,+∞) là mô tả phù hợp cho một biến:

A. Liên tục
B. Rời rạc nhị phân
C. Categorical 3 lớp
D. Bernoulli bắt buộc

---

## Câu 15

Đại lượng p(x) trong PDF nên được hiểu là:

A. Mật độ xác suất
B. Một histogram nhị phân
C. Một kernel
D. Một vector nhãn

---

## Câu 16

Trong thị giác máy tính, xác suất và thống kê giúp mô hình hóa:

A. Sự không chắc chắn
B. Chỉ kích thước ảnh
C. Chỉ màu sắc
D. Chỉ phép xoay

---

## Câu 17

Theo tài liệu, nguồn gây bất định trong dữ liệu thị giác có thể là:

A. Nhiễu, che khuất và mơ hồ
B. Chỉ kích thước file
C. Chỉ số pixel
D. Chỉ định dạng PNG

---

## Câu 18

Nếu một biến chỉ nhận các giá trị Mèo, Chó, Chim thì biến đó là:

A. Rời rạc
B. Liên tục
C. Gaussian bắt buộc
D. Không có phân bố

---

## Câu 19

Nếu một biến biểu diễn cường độ nhiễu liên tục, loại phân bố phù hợp có thể là:

A. Gaussian
B. Chỉ Bernoulli
C. Chỉ Categorical
D. Không thể mô hình hóa

---

## Câu 20

Khác biệt chính giữa PMF và PDF là:

A. PMF cho biến rời rạc, PDF cho biến liên tục
B. PMF cho liên tục, PDF cho rời rạc
C. Cả hai chỉ dùng cho Bernoulli
D. Cả hai chỉ dùng cho Gaussian

---

## Câu 21

Xác suất kết hợp p(X,Y) biểu diễn:

A. Xác suất X và Y cùng xảy ra
B. Xác suất chỉ X
C. Xác suất chỉ Y
D. Phương sai của X

---

## Câu 22

Phân bố biên p(X) thu được từ p(X,Y) bằng cách:

A. Lấy tổng hoặc tích phân qua Y
B. Nhân tất cả các giá trị với nhau
C. Lấy căn bậc hai
D. Tính gradient

---

## Câu 23

Với biến rời rạc, công thức marginalization là:

A. $p(X)=\sum_Y p(X,Y)$
B. $p(X)=p(X,Y)p(Y)$
C. $p(X)=p(Y|X)$
D. $p(X)=1-p(Y)$

---

## Câu 24

Xác suất có điều kiện p(X|Y) là:

A. Xác suất X khi biết Y đã xảy ra
B. Xác suất X và Y cùng xảy ra
C. Xác suất chỉ Y
D. Prior của Y

---

## Câu 25

Quan hệ đúng giữa joint và conditional là:

A. $p(X,Y)=p(X|Y)p(Y)$
B. $p(X,Y)=p(X|Y)+p(Y)$
C. $p(X,Y)=p(X)/p(Y)$
D. $p(X,Y)=1-p(X|Y)$

---

## Câu 26

Từ p(X,Y)=p(X|Y)p(Y), ta suy ra:

A. $p(X|Y)=\frac{p(X,Y)}{p(Y)}$
B. $p(X|Y)=p(X,Y)p(Y)$
C. $p(X|Y)=p(X)+p(Y)$
D. $p(X|Y)=1-p(Y)$

---

## Câu 27

Trong CV, p(vật thể | đặc trưng ảnh) là ví dụ của:

A. Xác suất có điều kiện
B. Joint probability
C. Variance
D. PDF Gaussian

---

## Câu 28

Nếu p(X,Y)=0.2 và p(Y)=0.5 thì p(X|Y) bằng:

A. 0.1
B. 0.2
C. 0.4
D. 0.7

---

## Câu 29

Nếu p(X|Y)=0.8 và p(Y)=0.5 thì p(X,Y) bằng:

A. 0.2
B. 0.4
C. 0.8
D. 1.3

---

## Câu 30

Nếu p(X,Y1)=0.3 và p(X,Y2)=0.2 thì p(X) bằng:

A. 0.1
B. 0.2
C. 0.5
D. 0.6

---

## Câu 31

Trong ví dụ chọn đồng xu Y và kết quả tung X, p(X=Sấp,Y=Xu1) là:

A. Joint probability
B. Marginal probability
C. Posterior
D. Variance

---

## Câu 32

Trong cùng ví dụ, xác suất Sấp bất kể chọn đồng xu nào là:

A. Phân bố biên của X
B. Likelihood bắt buộc
C. Prior của Y
D. PDF liên tục

---

## Câu 33

Marginalization có ý nghĩa là:

A. Bỏ qua các biến không quan tâm bằng cách tổng/tích phân chúng
B. Tạo thêm biến mới
C. Chuẩn hóa gradient
D. Đổi PMF thành PDF bắt buộc

---

## Câu 34

Conditional probability khác joint probability ở chỗ:

A. Conditional giả sử đã biết một biến/biến cố
B. Conditional luôn bằng 1
C. Joint không có hai biến
D. Joint chỉ dùng cho Gaussian

---

## Câu 35

Nếu p(Y)=0 thì biểu thức p(X|Y)=p(X,Y)/p(Y):

A. Không thể tính trực tiếp do chia cho 0
B. Luôn bằng 0
C. Luôn bằng 1
D. Luôn bằng p(X)

---

## Câu 36

Định luật Bayes trong tài liệu có dạng:

A. $p(Y|X)=\frac{p(X|Y)p(Y)}{p(X)}$
B. $p(Y|X)=p(X|Y)+p(Y)$
C. $p(Y|X)=p(X,Y)p(X)$
D. $p(Y|X)=1-p(X)$

---

## Câu 37

Trong Bayes, p(Y|X) được gọi là:

A. Posterior
B. Likelihood
C. Prior
D. Evidence

---

## Câu 38

Trong Bayes, p(X|Y) được gọi là:

A. Likelihood
B. Posterior
C. Prior
D. Evidence

---

## Câu 39

Trong Bayes, p(Y) được gọi là:

A. Prior
B. Posterior
C. Likelihood
D. Evidence

---

## Câu 40

Trong Bayes, p(X) được gọi là:

A. Evidence
B. Likelihood
C. Prior
D. Posterior

---

## Câu 41

Posterior biểu diễn:

A. Xác suất giả thuyết sau khi quan sát bằng chứng
B. Xác suất trước khi thấy dữ liệu
C. Khả năng dữ liệu khi giả thuyết đúng
D. Phương sai dữ liệu

---

## Câu 42

Prior biểu diễn:

A. Niềm tin/xác suất trước khi quan sát bằng chứng
B. Kết quả sau cập nhật
C. Xác suất của bằng chứng
D. Likelihood

---

## Câu 43

Likelihood biểu diễn:

A. Khả năng quan sát X nếu Y đúng
B. Xác suất Y sau khi biết X
C. Xác suất Y trước dữ liệu
D. Evidence

---

## Câu 44

Evidence p(X) trong Bayes có vai trò:

A. Chuẩn hóa posterior
B. Thay thế likelihood
C. Luôn bằng prior
D. Luôn bằng 1

---

## Câu 45

Với các lớp Y rời rạc, evidence có thể tính bằng:

A. $p(X)=\sum_Y p(X|Y)p(Y)$
B. $p(X)=p(Y|X)p(Y)$
C. $p(X)=1-p(Y)$
D. $p(X)=p(X|Y)+p(Y)$

---

## Câu 46

Cho p(Tai nhọn|Mèo)=0.8, p(Mèo)=0.6, p(Tai nhọn|Chó)=0.3, p(Chó)=0.4. p(Tai nhọn) bằng:

A. 0.48
B. 0.60
C. 0.72
D. 0.80

---

## Câu 47

Với dữ liệu câu trước, p(Mèo|Tai nhọn) bằng:

A. 0.60
B. 0.70
C. 0.80
D. 0.90

---

## Câu 48

Trong bài toán nhận dạng, nếu Y là class và X là feature, posterior là:

A. $p(Class|Feature)$
B. $p(Feature|Class)$
C. $p(Class)$
D. $p(Feature)$

---

## Câu 49

Trong bài toán nhận dạng, likelihood tương ứng với:

A. $p(Feature|Class)$
B. $p(Class|Feature)$
C. $p(Class)$
D. $p(Feature)$

---

## Câu 50

Định luật Bayes đặc biệt hữu ích cho:

A. Suy luận dưới điều kiện không chắc chắn
B. Xoay ảnh
C. Padding
D. Nội suy bilinear

---

## Câu 51

Phân bố Bernoulli dùng cho biến:

A. Nhị phân 0/1
B. Liên tục nhiều chiều
C. Bất kỳ vector D chiều
D. Chỉ RGB

---

## Câu 52

Tham số λ của Bernoulli được định nghĩa là:

A. $\lambda=p(X=1)$
B. $\lambda=p(X=0)$
C. $\lambda=\mu$
D. $\lambda=\sigma^2$

---

## Câu 53

Nếu λ=0.7 trong Bernoulli thì p(X=0) bằng:

A. 0.2
B. 0.3
C. 0.7
D. 1.7

---

## Câu 54

PMF Bernoulli trong tài liệu là:

A. $p(x)=\lambda^x(1-\lambda)^{1-x}$
B. $p(x)=\lambda+x$
C. $p(x)=e^{-\lambda x}$
D. $p(x)=1/\lambda$

---

## Câu 55

Một ứng dụng Bernoulli trong CV được tài liệu nêu là:

A. Binary mask foreground/background
B. SIFT descriptor 128D
C. Rotation matrix
D. Histogram HOG

---

## Câu 56

Categorical là:

A. Tổng quát của Bernoulli cho K kết quả rời rạc
B. Gaussian 1D
C. PDF liên tục
D. Chỉ dành cho 2 lớp

---

## Câu 57

Tham số của Categorical là:

A. $[\lambda_1,\ldots,\lambda_K]$
B. $[\mu,\sigma^2]$
C. $[G_x,G_y]$
D. $[R,G,B]$

---

## Câu 58

Điều kiện của vector tham số Categorical là:

A. $\sum_{k=1}^K\lambda_k=1$
B. $\sum_k\lambda_k=0$
C. $\lambda_k>1$ với mọi k
D. $\lambda_k<0$ với mọi k

---

## Câu 59

Nếu Categorical có K=3 thì số tham số xác suất λ_k là:

A. 1
B. 2
C. 3
D. 6

---

## Câu 60

Một ứng dụng Categorical trong CV được tài liệu nêu là:

A. Mô hình hóa nhãn pixel/lớp đối tượng
B. Làm mờ Gaussian
C. Sobel edge
D. Xoay ảnh

---

## Câu 61

Nếu λ=[0.6,0.2,0.2] thì tổng các thành phần bằng:

A. 0.6
B. 0.8
C. 1.0
D. 1.2

---

## Câu 62

Nếu Bernoulli có λ=0.2 thì p(X=1) bằng:

A. 0.2
B. 0.8
C. 1.0
D. 0

---

## Câu 63

Nếu Bernoulli có λ=0.2 thì p(X=0) bằng:

A. 0.2
B. 0.5
C. 0.8
D. 1.2

---

## Câu 64

Bernoulli có thể xem là trường hợp Categorical với:

A. K=2
B. K=1
C. K=3
D. K=D

---

## Câu 65

Trong semantic segmentation nhiều lớp, phân bố phù hợp theo tài liệu là:

A. Categorical
B. Chỉ Bernoulli
C. Chỉ Gaussian 1D
D. Chỉ Uniform

---

## Câu 66

Gaussian 1-biến dùng để mô hình hóa:

A. Biến liên tục
B. Chỉ biến nhị phân
C. Chỉ nhãn rời rạc
D. Chỉ histogram

---

## Câu 67

Hai tham số chính của Gaussian 1-biến là:

A. $\mu$ và $\sigma^2$
B. $\lambda_1$ và $\lambda_2$
C. $G_x$ và $G_y$
D. $R$ và $G$

---

## Câu 68

Trong Gaussian, μ biểu diễn:

A. Giá trị trung bình
B. Phương sai
C. Hiệp phương sai
D. Số lớp

---

## Câu 69

Trong Gaussian, σ² biểu diễn:

A. Phương sai
B. Mean
C. Prior
D. Likelihood

---

## Câu 70

Nếu σ² tăng, phân bố Gaussian có xu hướng:

A. Phân tán rộng hơn
B. Hẹp hơn
C. Biến thành Bernoulli
D. Biến thành Categorical

---

## Câu 71

Một ứng dụng Gaussian 1D trong CV theo tài liệu là:

A. Mô hình hóa cường độ pixel hoặc nhiễu
B. Chỉ mô hình nhãn Mèo/Chó
C. Chỉ padding
D. Chỉ morphology

---

## Câu 72

Gaussian đa biến dùng để mô hình hóa:

A. Vector D chiều liên tục
B. Chỉ một biến nhị phân
C. Chỉ một giá trị rời rạc
D. Chỉ histogram 1 bin

---

## Câu 73

Vector mean của Gaussian đa biến có kích thước:

A. D×1
B. D×D
C. 1×1 bắt buộc
D. K×K

---

## Câu 74

Ma trận covariance Σ của Gaussian đa biến có kích thước:

A. D×D
B. D×1
C. 1×D bắt buộc
D. 2×2 bắt buộc

---

## Câu 75

Các phần tử trên đường chéo của Σ chủ yếu biểu diễn:

A. Phương sai từng chiều
B. Mean từng chiều
C. Prior từng lớp
D. Likelihood từng lớp

---

## Câu 76

Các phần tử ngoài đường chéo của Σ chủ yếu biểu diễn:

A. Hiệp phương sai giữa các chiều
B. Mean
C. Số lớp
D. Số mẫu

---

## Câu 77

Một ứng dụng Gaussian đa biến theo tài liệu là:

A. Mô hình hóa vector đặc trưng HOG/SIFT
B. Chỉ binary mask
C. Chỉ gamma correction
D. Chỉ convolution

---

## Câu 78

Gaussian đa biến cũng có thể dùng để mô hình hóa:

A. Tương quan giữa các kênh màu
B. Chỉ số lượng pixel
C. Chỉ góc xoay
D. Chỉ padding

---

## Câu 79

Trong công thức Gaussian đa biến, |Σ| là:

A. Định thức của ma trận covariance
B. Trace của ảnh
C. Số lượng lớp
D. Mean của dữ liệu

---

## Câu 80

Trong công thức Gaussian đa biến, Σ⁻¹ là:

A. Ma trận nghịch đảo covariance
B. Vector mean
C. Posterior
D. PMF

---

## Câu 81

Mục tiêu của Maximum Likelihood (ML) là:

A. Tìm tham số làm dữ liệu quan sát có likelihood lớn nhất
B. Tìm tham số nhỏ nhất
C. Tối đa hóa prior
D. Tối thiểu hóa số mẫu

---

## Câu 82

Ước lượng ML tổng quát được viết là:

A. $\hat\theta_{ML}=\arg\max_\theta p(D|\theta)$
B. $\hat\theta=\arg\min p(D|\theta)$
C. $\hat\theta=p(\theta|D)$ bắt buộc
D. $\hat\theta=1/p(D)$

---

## Câu 83

Nếu các mẫu độc lập, likelihood của tập dữ liệu là:

A. $p(D|\theta)=\prod_i p(x_i|\theta)$
B. $p(D|\theta)=\sum_i p(x_i|\theta)$
C. $p(D|\theta)=1-p(\theta)$
D. $p(D|\theta)=p(D)$

---

## Câu 84

Tại sao thường dùng log-likelihood?

A. Biến tích thành tổng và thuận tiện tính toán
B. Để biến biến rời rạc thành liên tục
C. Để loại prior
D. Để tăng số mẫu

---

## Câu 85

Log-likelihood của dữ liệu độc lập có dạng:

A. $L(\theta)=\sum_i\log p(x_i|\theta)$
B. $L(\theta)=\prod_i\log p(x_i|\theta)$
C. $L(\theta)=1-p(D|\theta)$
D. $L(\theta)=p(\theta)$

---

## Câu 86

Ước lượng ML cho Categorical là:

A. $\hat\lambda_k=N_k/N$
B. $\hat\lambda_k=N/N_k$
C. $\hat\lambda_k=N_k+1$
D. $\hat\lambda_k=1/K$ bắt buộc

---

## Câu 87

Với số đếm [6,2,2] trên 10 mẫu, vector ML là:

A. [0.6,0.2,0.2]
B. [0.5,0.25,0.25]
C. [0.3,0.3,0.4]
D. [6,2,2]

---

## Câu 88

Với xúc xắc 20 lần, mặt 3 xuất hiện 1 lần. ML cho λ3 là:

A. 0.05
B. 0.1
C. 0.2
D. 1.0

---

## Câu 89

Nhược điểm của ML được tài liệu nêu là:

A. Dễ overfitting khi dữ liệu nhỏ
B. Luôn cần prior
C. Không dùng được Categorical
D. Không dùng log

---

## Câu 90

Ước lượng ML mean Gaussian cho dữ liệu x=[0.8,0.9,1.0,0.8,1.0] là:

A. 0.8
B. 0.9
C. 1.0
D. 4.5

---

## Câu 91

Với cùng dữ liệu, phương sai ML theo bài tập là:

A. 0.004
B. 0.008
C. 0.01
D. 0.04

---

## Câu 92

Trong ước lượng phương sai ML Gaussian của bài tập, mẫu số dùng là:

A. N
B. N-1
C. N+1
D. 2N

---

## Câu 93

MAP khác ML chủ yếu ở chỗ MAP:

A. Kết hợp thêm prior
B. Không dùng dữ liệu
C. Không dùng likelihood
D. Chỉ dùng Gaussian

---

## Câu 94

MAP tìm tham số tối đa hóa:

A. Posterior p(θ|D)
B. Chỉ evidence p(D)
C. Chỉ prior p(θ)
D. Chỉ variance

---

## Câu 95

Bỏ qua evidence không phụ thuộc θ, MAP tương đương tối đa hóa:

A. $p(D|\theta)p(\theta)$
B. $p(D|\theta)+p(\theta)$
C. $p(D)$
D. $1/p(\theta)$

---

## Câu 96

Trong Categorical-Dirichlet, công thức MAP là:

A. $\hat\lambda_k=\frac{N_k+\alpha_k-1}{\sum_j(N_j+\alpha_j-1)}$
B. $\hat\lambda_k=N_k/N$
C. $\hat\lambda_k=\alpha_k/N$
D. $\hat\lambda_k=N_k+\alpha_k$

---

## Câu 97

Trong MAP Categorical-Dirichlet, α_k có thể được xem như:

A. Pseudo-count từ niềm tin ban đầu
B. Gradient
C. Pixel intensity
D. Kernel weight

---

## Câu 98

Với counts [6,2,2] và α=[3,3,3], mẫu số MAP bằng:

A. 10
B. 12
C. 16
D. 19

---

## Câu 99

Với counts [6,2,2] và α=[3,3,3], vector MAP là:

A. [0.6,0.2,0.2]
B. [0.5,0.25,0.25]
C. [0.4,0.3,0.3]
D. [0.8,0.1,0.1]

---

## Câu 100

Theo tài liệu, ML là trường hợp đặc biệt của MAP khi dùng prior đều tương đương:

A. $\alpha_k=1$ với mọi k
B. $\alpha_k=0$ với mọi k
C. $\alpha_k=N_k$
D. $\alpha_k=K$ bắt buộc

---

# ĐÁP ÁN

| Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|
| 1 | A | 51 | A |
| 2 | A | 52 | A |
| 3 | A | 53 | B |
| 4 | A | 54 | A |
| 5 | A | 55 | A |
| 6 | A | 56 | A |
| 7 | A | 57 | A |
| 8 | C | 58 | A |
| 9 | A | 59 | C |
| 10 | A | 60 | A |
| 11 | A | 61 | C |
| 12 | B | 62 | A |
| 13 | A | 63 | C |
| 14 | A | 64 | A |
| 15 | A | 65 | A |
| 16 | A | 66 | A |
| 17 | A | 67 | A |
| 18 | A | 68 | A |
| 19 | A | 69 | A |
| 20 | A | 70 | A |
| 21 | A | 71 | A |
| 22 | A | 72 | A |
| 23 | A | 73 | A |
| 24 | A | 74 | A |
| 25 | A | 75 | A |
| 26 | A | 76 | A |
| 27 | A | 77 | A |
| 28 | C | 78 | A |
| 29 | B | 79 | A |
| 30 | C | 80 | A |
| 31 | A | 81 | A |
| 32 | A | 82 | A |
| 33 | A | 83 | A |
| 34 | A | 84 | A |
| 35 | A | 85 | A |
| 36 | A | 86 | A |
| 37 | A | 87 | A |
| 38 | A | 88 | A |
| 39 | A | 89 | A |
| 40 | A | 90 | B |
| 41 | A | 91 | B |
| 42 | A | 92 | A |
| 43 | A | 93 | A |
| 44 | A | 94 | A |
| 45 | A | 95 | A |
| 46 | B | 96 | A |
| 47 | C | 97 | A |
| 48 | A | 98 | C |
| 49 | A | 99 | B |
| 50 | A | 100 | A |