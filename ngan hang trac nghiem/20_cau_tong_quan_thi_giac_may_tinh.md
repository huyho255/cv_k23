# 20 CÂU TRẮC NGHIỆM - TỔNG QUAN VỀ THỊ GIÁC MÁY TÍNH

## Phạm vi

- Thị giác máy tính là gì, mục đích
- Pipeline: Lấy ảnh → Tiền xử lý → Phân tách ảnh → Rút đặc tả → Nhận dạng → Hậu xử lý
- Dữ liệu ảnh trong máy tính
- Ứng dụng của Computer Vision

---

## Câu 1

Thị giác máy tính (Computer Vision) là:

A. Một nhánh của AI và khoa học máy tính giúp máy tính thu thập, phân tích và hiểu dữ liệu thị giác
B. Một kỹ thuật chỉ dùng để nén ảnh
C. Một phương pháp chỉ để chỉnh độ sáng
D. Một loại hệ điều hành

---

## Câu 2

Mục đích chính của Thị giác máy tính theo tài liệu là:

A. Rút trích thông tin từ ảnh để xây dựng đặc tả phục vụ một công việc nhất định
B. Chỉ làm ảnh đẹp hơn
C. Chỉ giảm kích thước file
D. Chỉ đổi ảnh màu thành ảnh xám

---

## Câu 3

Dữ liệu đầu vào phổ biến của hệ thống Computer Vision là:

A. Hình ảnh kỹ thuật số và video
B. Chỉ văn bản
C. Chỉ âm thanh
D. Chỉ bảng tính

---

## Câu 4

Thứ tự đúng của quy trình nhận dạng ảnh trong đề cương là:

A. Lấy ảnh → Tiền xử lý → Phân tách ảnh → Rút đặc tả → Nhận dạng → Hậu xử lý
B. Lấy ảnh → Nhận dạng → Tiền xử lý → Hậu xử lý → Phân tách → Rút đặc tả
C. Tiền xử lý → Lấy ảnh → Nhận dạng → Phân tách → Rút đặc tả → Hậu xử lý
D. Lấy ảnh → Rút đặc tả → Tiền xử lý → Nhận dạng → Phân tách → Hậu xử lý

---

## Câu 5

Bước đầu tiên trong quy trình nhận dạng ảnh là:

A. Lấy ảnh
B. Phân tách ảnh
C. Rút đặc tả
D. Nhận dạng

---

## Câu 6

Mục đích chính của bước Tiền xử lý là:

A. Loại bỏ thành phần không mong muốn hoặc không cần thiết để đơn giản hóa các bước sau
B. Luôn phân loại vật thể ngay lập tức
C. Luôn tạo mô hình 3D
D. Luôn tạo bounding box

---

## Câu 7

Bước Phân tách ảnh (Segmentation) có mục đích gần nhất với:

A. Tách ảnh thành các vùng hoặc đối tượng cần quan tâm
B. Chỉ tăng độ sáng
C. Chỉ lưu file ảnh
D. Chỉ thay đổi định dạng ảnh

---

## Câu 8

Bước Rút đặc tả (Feature Extraction) dùng để:

A. Trích xuất các đặc trưng quan trọng từ ảnh
B. Chỉ đổi tên file ảnh
C. Chỉ thay đổi kích thước màn hình
D. Chỉ lưu ảnh sang PNG

---

## Câu 9

Bước Nhận dạng (Classification/Recognition) dùng để:

A. Xác định lớp hoặc nhận diện đối tượng dựa trên đặc trưng
B. Lọc nhiễu ảnh
C. Lấy mẫu ảnh
D. Lượng hóa cường độ

---

## Câu 10

Bước cuối cùng trong pipeline 6 bước là:

A. Hậu xử lý
B. Tiền xử lý
C. Lấy ảnh
D. Rút đặc tả

---

## Câu 11

Ảnh số trong máy tính thực chất có thể được xem là:

A. Một ma trận lưu thông tin của các điểm ảnh
B. Một đoạn âm thanh
C. Một chuỗi ký tự thuần túy
D. Một file không có dữ liệu số

---

## Câu 12

Pixel là:

A. Đơn vị nhỏ nhất của một hình ảnh kỹ thuật số có thể được hiển thị và điều khiển
B. Một thuật toán nhận dạng
C. Một bộ lọc Gaussian
D. Một loại histogram

---

## Câu 13

Theo slide Bài 1, ảnh trắng đen thường được biểu diễn dưới dạng:

A. Ma trận 2 chiều
B. Ma trận 1 chiều
C. Ma trận 4 chiều
D. Không dùng ma trận

---

## Câu 14

Theo slide Bài 1, ảnh màu thường có thể được biểu diễn dưới dạng:

A. Ma trận/mảng 3 chiều với chiều thứ ba biểu diễn màu
B. Chỉ một số duy nhất
C. Ma trận 1×1
D. Chỉ ma trận 2 chiều không có kênh màu

---

## Câu 15

Sampling trong quá trình số hóa ảnh có vai trò chính là:

A. Rời rạc hóa tín hiệu theo không gian và ảnh hưởng đến độ phân giải không gian
B. Quyết định số lớp phân loại
C. Tạo histogram HOG
D. Tạo prior trong Bayes

---

## Câu 16

Quantization trong quá trình số hóa ảnh có vai trò chính là:

A. Chuyển cường độ liên tục thành các mức rời rạc
B. Xoay ảnh 90°
C. Phân đoạn vật thể
D. Phát hiện góc Harris

---

## Câu 17

Ứng dụng nào sau đây thuộc lĩnh vực Y tế?

A. Phân tích MRI, CT Scan, X-quang
B. Kiểm tra lỗi sản phẩm trong nhà máy
C. Ô tô tự lái
D. Drone theo dõi cây trồng

---

## Câu 18

Ứng dụng nào sau đây thuộc lĩnh vực Giao thông?

A. Ô tô tự lái và tránh vật cản
B. Nhận dạng chữ viết tay
C. Phân tích MRI
D. Kiểm tra lỗi linh kiện

---

## Câu 19

Ứng dụng nào sau đây thuộc lĩnh vực Sản xuất?

A. Kiểm tra lỗi sản phẩm
B. Phân tích CT Scan
C. Theo dõi sức khỏe cây trồng
D. Nhận dạng mống mắt cho an ninh

---

## Câu 20

Ứng dụng nào sau đây được tài liệu nêu cho Computer Vision?

A. Nhận dạng sinh trắc học như khuôn mặt, vân tay, mống mắt
B. Chỉ tính toán số học cơ bản
C. Chỉ biên dịch chương trình
D. Chỉ quản lý cơ sở dữ liệu

---

# ĐÁP ÁN

| Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|
| 1 | A | 11 | A |
| 2 | A | 12 | A |
| 3 | A | 13 | A |
| 4 | A | 14 | A |
| 5 | A | 15 | A |
| 6 | A | 16 | A |
| 7 | A | 17 | A |
| 8 | A | 18 | A |
| 9 | A | 19 | A |
| 10 | A | 20 | A |