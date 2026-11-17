# Trắc nghiệm Bài 1: Thị giác máy tính

## Câu 1
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Mô tả nào sát nhất với mục đích chính của thị giác máy tính được nêu trong Bài 1?

- [ ] Biến mọi ảnh màu thành ảnh xám để máy tính tính toán dễ hơn.
- [ ] Tăng độ phân giải ảnh để làm rõ các chi tiết của đối tượng.
- [x] Rút thông tin từ ảnh và xây dựng biểu diễn phục vụ một nhiệm vụ cụ thể.
- [ ] Lưu thông tin ảnh thành ma trận rồi tái tạo lại đúng ảnh ban đầu.

> Giải thích: CV không chỉ cải thiện chất lượng ảnh; trọng tâm là trích xuất thông tin như hình dạng, độ sáng và phân bố màu để giải quyết nhiệm vụ.

## Câu 2
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Một ảnh xám có kích thước 640 × 480 pixel được đưa vào NumPy. Nếu mỗi pixel là một giá trị xám, dạng ma trận phù hợp nhất là gì?

- [ ] Ma trận 640 × 480 × 1 với ba trục bắt buộc.
- [x] Ma trận 480 × 640 với một giá trị ở mỗi vị trí.
- [ ] Ma trận 640 × 480 với ba giá trị ở mỗi vị trí.
- [ ] Ma trận 480 × 640 × 3 vì ảnh vẫn có độ sáng.

> Giải thích: Với ảnh xám 2D, một phần tử ma trận ứng với một pixel. NumPy thường ghi shape theo thứ tự *(hàng, cột)* nên ảnh 640 × 480 có shape `(480,640)`.

## Câu 3
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Với ảnh RGB được NumPy lưu theo dạng `(height, width, channels)`, shape `(720, 1280, 3)` nói lên điều gì?

- [ ] Có 720 cột, 1280 hàng và 3 ảnh tách biệt.
- [ ] Có 720 hàng, 1280 cột và 3 byte cho toàn ảnh.
- [ ] Có 1280 hàng, 720 cột và 3 mức sáng mỗi pixel.
- [x] Có 720 hàng, 1280 cột và 3 giá trị màu mỗi pixel.

> Giải thích: `(720,1280,3)` là 720 hàng, 1280 cột và ba giá trị R, G, B cho mỗi pixel.

## Câu 4
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Một ảnh JPEG 1920 × 1080 đã được lưu trong máy tính. Phát biểu nào đúng nhất về quá trình sampling ban đầu?

- [x] Ảnh đã có các mẫu không gian; đọc file để xử lý không đòi hỏi lấy mẫu lại từ cảnh thật.
- [ ] Ảnh chưa được sampling; việc đọc bằng Python mới tạo ra lưới 1920 × 1080.
- [ ] Ảnh chỉ được sampling khi chuyển từ RGB sang grayscale.
- [ ] Ảnh phải được sampling lại trước mỗi phép biến đổi pixel.

> Giải thích: Ảnh JPEG đã được số hóa. Đọc file chỉ giải mã dữ liệu có sẵn; không phải lấy mẫu lại trực tiếp từ thế giới thực.

## Câu 5
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Giảm một ảnh từ 1920 × 1080 xuống 960 × 540 bằng phương pháp thu nhỏ phù hợp làm thay đổi trực tiếp yếu tố nào?

- [ ] Số mức lượng tử hóa của từng kênh màu giảm đúng bốn lần.
- [x] Số vị trí pixel cần biểu diễn và xử lý giảm đúng bốn lần.
- [ ] Mỗi giá trị RGB tự động giảm còn một phần tư ban đầu.
- [ ] Độ sâu bit tự động giảm từ 8-bit xuống 2-bit.

> Giải thích: Rộng và cao mỗi chiều giảm một nửa nên số pixel giảm còn `1/2 × 1/2 = 1/4`. Việc resize không tự đổi bit depth.

## Câu 6
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Với ảnh xám **8-bit không dấu**, phát biểu nào chính xác?

- [ ] Có 255 giá trị, từ 1 đến 255; số 0 dùng riêng cho nền.
- [ ] Có 256 giá trị, từ −128 đến 127; số âm biểu thị vùng tối.
- [x] Có 256 giá trị, từ 0 đến 255; mỗi pixel lưu một mức xám.
- [ ] Có 256 giá trị cho mỗi pixel; đồng thời cần ba kênh R, G, B.

> Giải thích: 8 bit có `2^8 = 256` tổ hợp, từ 0 đến 255 cho ảnh xám 8-bit không dấu.

## Câu 7
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Trong quá trình tạo ảnh số từ cảnh thực, sampling không gian có ý nghĩa nào?

- [ ] Chọn số bit để biểu diễn biên độ tín hiệu ở mỗi pixel.
- [ ] Áp công thức trọng số RGB để tính độ sáng của pixel.
- [ ] Nén các giá trị ảnh để giảm kích thước file đầu ra.
- [x] Xác định các vị trí hoặc vùng không gian được đo để tạo dữ liệu pixel.

> Giải thích: Sampling chọn các vị trí/vùng thu nhận mẫu theo không gian; chọn số mức cường độ là quantisation.

## Câu 8
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Nếu giữ nguyên kích thước 1920 × 1080 nhưng lượng tử hóa ảnh xám từ 8-bit xuống 1-bit, điều nào đúng?

- [x] Số pixel giữ nguyên nhưng mỗi pixel chỉ còn hai mức biểu diễn.
- [ ] Tổng số pixel giảm còn một phần tám vì giảm số bit.
- [ ] Mỗi pixel vẫn có 256 mức nhưng cần ít bộ nhớ hơn.
- [ ] Số pixel giữ nguyên và ảnh nhất thiết mờ như khi resize.

> Giải thích: 1-bit chỉ có hai mức biểu diễn; số hàng/cột vẫn giữ nguyên nếu không resize.

## Câu 9
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Một ảnh chuyển sắc bầu trời xuất hiện các dải sáng–tối có ranh giới rõ sau khi giảm bit depth. Nguyên nhân trực tiếp hợp lý nhất là gì?

- [ ] Sampling không gian đã làm xuất hiện các đường aliasing ở biên.
- [ ] Histogram đã thay đổi thứ tự vị trí của các pixel.
- [x] Quantisation đã gộp nhiều mức sáng gần nhau vào cùng mức số.
- [ ] Dữ liệu RGB được chuyển thành ma trận hai chiều nên mất chi tiết.

> Giải thích: Khi bit depth giảm, nhiều mức gần nhau bị gộp thành một mức, dễ tạo các dải chuyển sắc (*banding*).

## Câu 10
Chủ đề: Bài 1: Bản chất ảnh số & Computer Vision
Một bức ảnh có người đứng trước gương, khiến cùng một người xuất hiện thêm trong phản chiếu. Vì sao đây là thách thức đối với thị giác máy tính?

- [ ] Vì ảnh có gương thì không thể biểu diễn bằng các ma trận RGB.
- [x] Vì phát hiện hình dáng người chưa đủ để biết đâu là người thật và đâu là phản chiếu.
- [ ] Vì ảnh phản chiếu luôn có độ phân giải thấp hơn ảnh của người thật.
- [ ] Vì chỉ các ảnh grayscale mới có thể tách người thật khỏi hình phản chiếu.
---

> Giải thích: Mô hình cần hiểu ngữ cảnh và quan hệ giữa người với phản chiếu; chỉ phát hiện hình dạng không đủ để suy ra số người thật.

## Câu 11
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Trong đoạn `im = Image.open('empire.jpg')`, thao tác chính là gì?

- [x] Mở file ảnh và tạo đối tượng ảnh để dùng trong chương trình.
- [ ] Đọc file rồi tự động chuyển toàn bộ pixel thành grayscale.
- [ ] Đọc file rồi tự động biến ảnh thành mảng NumPy hai chiều.
- [ ] Mở file rồi tự động hiển thị ảnh trên màn hình.

> Giải thích: `Image.open` mở ảnh dưới dạng đối tượng Pillow; chưa tự động chuyển Gray, NumPy hay hiển thị.

## Câu 12
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Tại sao sau `Image.open(...)`, slide dùng `im = array(im)`?

- [ ] Để tăng số pixel ảnh trước khi thực hiện các phép tính.
- [ ] Để chuyển ảnh về 8-bit bất kể định dạng ban đầu.
- [ ] Để chuẩn hóa histogram trước khi vẽ và xử lý.
- [x] Để biểu diễn dữ liệu ảnh dưới dạng mảng, thuận tiện cho phép toán NumPy.

> Giải thích: `array(im)` đưa dữ liệu ảnh về dạng mảng để thực hiện phép toán ma trận, histogram và xử lý hàng loạt.

## Câu 13
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Một ảnh RGB 1080 × 1920 được chuyển thành mảng NumPy và có shape `(1080, 1920, 3)`. Truy cập `im[10, 20]` trong cách lưu này có ý nghĩa gì?

- [ ] Lấy màu của cả hàng thứ 10 và cột thứ 20.
- [ ] Lấy kênh màu thứ 10 của pixel thứ 20.
- [x] Lấy ba giá trị màu ở hàng 10, cột 20.
- [ ] Lấy cường độ xám duy nhất tại tọa độ x = 10, y = 20.

> Giải thích: `im[10,20]` chọn pixel ở hàng 10, cột 20; nếu ảnh RGB, kết quả thường chứa ba giá trị màu.

## Câu 14
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Lệnh `im = im.convert('L')` trong Pillow có tác dụng chính nào?

- [ ] Chỉ đổi cách hiển thị mà không thay đổi dữ liệu pixel.
- [x] Tạo phiên bản ảnh chế độ xám (luminance/luma 8-bit kiểu `L`).
- [ ] Chuyển ảnh thành ảnh nhị phân chỉ gồm 0 và 255.
- [ ] Tạo histogram gồm 256 ô cho từng kênh RGB.

> Giải thích: `convert('L')` tạo ảnh xám chế độ L, không phải ảnh nhị phân. Trong cách trình bày thông thường, giá trị mỗi pixel nằm từ 0 đến 255.

## Câu 15
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Trong ví dụ slide, `gray()` được gọi trước `imshow(im)`. Cách hiểu đúng là gì?

- [ ] `gray()` thay đổi trực tiếp mọi phần tử của mảng `im`.
- [ ] `gray()` chuyển NumPy array ba chiều thành hai chiều.
- [ ] `gray()` thực hiện chuẩn hóa độ sáng từ 0 đến 255.
- [x] `gray()` đặt kiểu hiển thị thang xám cho biểu đồ ảnh.

> Giải thích: `gray()` thiết lập bảng màu hiển thị thang xám của Matplotlib; bản thân nó không chuyển mảng RGB thành mảng grayscale.

## Câu 16
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Hai lệnh `imshow(im)` và `show()` khác nhau chủ yếu như thế nào trong ví dụ Matplotlib?

- [x] `imshow` tạo phần hiển thị ảnh trên trục vẽ, còn `show` hiển thị hình vẽ.
- [ ] `imshow` mở file ảnh từ ổ đĩa, còn `show` chuyển dữ liệu sang NumPy.
- [ ] `imshow` thực hiện tính histogram, còn `show` tạo biểu đồ tần suất.
- [ ] `imshow` chuyển RGB thành Gray, còn `show` lưu ảnh đã chuyển.

> Giải thích: `imshow` đưa dữ liệu ảnh lên trục vẽ, còn `show` hiển thị figure theo môi trường Matplotlib.

## Câu 17
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Slide PDF sử dụng công thức chuyển RGB sang Gray theo BT.709. Công thức nào khớp với slide?

- [ ] `0.299R + 0.587G + 0.114B`
- [x] `0.2126R + 0.7152G + 0.0722B`
- [ ] `0.2126R + 0.0722G + 0.7152B`
- [ ] `0.3333R + 0.3333G + 0.3333B`

> Giải thích: PDF Bài 1 ghi hệ số BT.709 là `0.2126R + 0.7152G + 0.0722B`; công thức `0.299/0.587/0.114` thuộc một cách tính thông dụng khác trong tài liệu bổ sung.

## Câu 18
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Áp dụng trực tiếp công thức BT.709 của slide cho pixel `(R,G,B) = (200,100,50)`. Giá trị Gray trước khi chuyển thành byte gần nhất với số nào?

- [ ] 105.0
- [ ] 112.9
- [x] 117.7
- [ ] 124.8

> Giải thích: `0.2126×200 + 0.7152×100 + 0.0722×50 = 42.52 + 71.52 + 3.61 = 117.65`.

## Câu 19
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Với công thức BT.709 của slide, một pixel thuần xanh lá `(R,G,B)=(0,255,0)` có giá trị xám gần nhất là bao nhiêu?

- [x] 182
- [ ] 150
- [ ] 128
- [ ] 73

> Giải thích: Xanh lá thuần: `0.7152 × 255 = 182.376`, gần 182. Trọng số xanh lá lớn nhất trong công thức.

## Câu 20
Chủ đề: Bài 1: Xử lý ảnh cơ bản với Python
Đoạn mã `im = array(Image.open(...).convert('L'))` áp dụng lên ảnh RGB kích thước H × W thông thường. Shape dự kiến của `im` là gì?

- [ ] `(H, W, 3)` vì ảnh gốc có ba kênh màu.
- [ ] `(H, W, 1)` vì grayscale luôn cần trục kênh.
- [ ] `(W, H)` vì chuyển Gray hoán đổi các trục.
- [x] `(H, W)` vì mỗi vị trí còn một giá trị xám.
---

> Giải thích: Ảnh `L` có một giá trị trên mỗi vị trí nên khi chuyển sang NumPy thông thường có shape `(H,W)`.

## Câu 21
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Histogram của ảnh xám 8-bit cho biết thông tin gì?

- [ ] Vị trí chính xác của mọi pixel thuộc từng mức xám.
- [x] Số pixel ứng với từng mức cường độ xám.
- [ ] Số biên vật thể ứng với từng hướng trong ảnh.
- [ ] Tổng mức sáng của từng hàng và từng cột ảnh.

> Giải thích: Histogram đếm có bao nhiêu pixel tại mỗi mức xám; không lưu thông tin pixel nằm ở đâu.

## Câu 22
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Một ma trận ảnh xám 2 × 3 đi qua `flatten()`. Phát biểu nào đúng?

- [ ] Tạo mảng 2 phần tử, mỗi phần tử là tổng một hàng.
- [ ] Tạo mảng 3 phần tử, mỗi phần tử là tổng một cột.
- [x] Tạo mảng 6 phần tử, giữ các giá trị pixel nhưng biểu diễn một chiều.
- [ ] Tạo mảng 6 phần tử, tự động sắp xếp theo cường độ tăng dần.

> Giải thích: `flatten()` trải 2 × 3 phần tử thành dãy 6 phần tử; không cộng dồn hay tự sắp xếp.

## Câu 23
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Ảnh xám có sáu pixel với giá trị `[0, 2, 2, 2, 4, 4]`. Giá trị histogram tại mức xám 2 là bao nhiêu?

- [ ] 2
- [ ] 4
- [ ] 6
- [x] 3

> Giải thích: Giá trị 2 xuất hiện ba lần.

## Câu 24
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Vì sao ví dụ slide thường dùng 256 bins khi vẽ histogram của ảnh xám 8-bit?

- [x] Vì có 256 mức giá trị nguyên từ 0 đến 255.
- [ ] Vì có 256 pixel ở mỗi hàng của ảnh xám.
- [ ] Vì mỗi pixel RGB gồm 256 bit thông tin.
- [ ] Vì 256 bins luôn làm ảnh có độ tương phản tốt nhất.

> Giải thích: Ảnh xám 8-bit có đúng 256 mức nguyên từ 0 đến 255, nên 256 ô là lựa chọn tự nhiên.

## Câu 25
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Hai ảnh xám có cùng kích thước và cùng histogram, nhưng bố trí các pixel khác nhau. Kết luận nào chính xác?

- [ ] Hai ảnh bắt buộc có cùng hình dạng vật thể vì histogram giống nhau.
- [ ] Hai ảnh bắt buộc có cùng độ sáng tại mọi tọa độ tương ứng.
- [x] Hai ảnh có cùng phân bố mức xám, nhưng nội dung không gian có thể khác.
- [ ] Hai ảnh có cùng ma trận pixel, chỉ khác cách vẽ biểu đồ histogram.

> Giải thích: Histogram giống nhau không đảm bảo hình ảnh giống nhau; đổi vị trí các pixel vẫn có thể giữ nguyên histogram.

## Câu 26
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Giả sử số pixel ở ba mức xám 0, 1, 2 lần lượt là `[2, 3, 1]`. Giá trị **CDF tính theo số pixel** tại mức 1 là bao nhiêu?

- [ ] 3
- [x] 5
- [ ] 6
- [ ] 2

> Giải thích: CDF tại mức 1 là số pixel mức 0 cộng số pixel mức 1: `2 + 3 = 5`.

## Câu 27
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Trong slide, sau khi tính `cdf = imhist.cumsum()`, câu lệnh `cdf = 255*cdf/cdf[-1]` có mục đích gì?

- [x] Đưa giá trị CDF lớn nhất về 255 để dùng làm bảng ánh xạ độ xám.
- [ ] Chia mỗi mức cường độ sáng cho 255 để thu được xác suất pixel.
- [ ] Đưa số lượng pixel trong ảnh về đúng 255 bằng cách lấy mẫu lại.
- [ ] Dời toàn bộ histogram sang phải 255 mức mà không đổi hình dạng.

> Giải thích: `cdf[-1]` là giá trị tích lũy cuối; nhân 255 rồi chia cho nó giúp giá trị CDF cuối bằng 255 khi tổng khác 0.

## Câu 28
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Phát biểu nào mô tả đúng nhất nguyên lý của cân bằng histogram toàn cục?

- [ ] Điều chỉnh mọi pixel bằng cách cộng cùng một hằng số.
- [ ] Tăng riêng những pixel tối, giữ nguyên mọi pixel sáng.
- [ ] Sắp xếp lại vị trí pixel sao cho màu tối nằm cạnh nhau.
- [x] Dùng phân phối tích lũy để ánh xạ lại các mức xám của pixel.

> Giải thích: Equalization tạo bảng ánh xạ dựa trên phân phối tích lũy (CDF), thay vì cộng chung một độ sáng cho mọi pixel.

## Câu 29
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Nhận định nào đúng về kết quả histogram equalization?

- [ ] Luôn cải thiện chất lượng ảnh vì mọi histogram sau xử lý đều phẳng tuyệt đối.
- [x] Có thể cải thiện tương phản nhưng cũng có thể làm nhiễu hoặc vùng ảnh kém tự nhiên rõ hơn.
- [ ] Chỉ có tác dụng trên ảnh RGB và không thể dùng với ảnh xám.
- [ ] Không thay đổi giá trị pixel mà chỉ thay đổi cách biểu diễn trục histogram.

> Giải thích: Cân bằng histogram có thể tăng tương phản nhưng không luôn làm ảnh đẹp hơn; nhiễu hay chuyển sắc bất thường cũng có thể rõ hơn.

## Câu 30
Chủ đề: Bài 1: Histogram và Cân bằng Histogram
Sau khi cân bằng histogram trên mảng pixel đã `flatten()`, slide dùng `reshape(im.shape)`. Mục đích là gì?

- [ ] Đưa histogram về lại 256 bins như ban đầu.
- [ ] Khôi phục giá trị pixel gốc trước lúc equalization.
- [x] Đưa mảng pixel một chiều về kích thước hàng–cột của ảnh.
- [ ] Chuyển tất cả pixel sang dạng ba kênh RGB như ban đầu.
---

> Giải thích: `reshape(im.shape)` khôi phục cấu trúc hàng–cột để dữ liệu đã biến đổi hiển thị thành ảnh; không phục hồi pixel cũ.

## Câu 31
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Một ảnh xám chỉ có bốn giá trị `[0, 0, 128, 255]`. Nếu dùng **đúng phép chuẩn hóa CDF trực tiếp** `255 × CDF(v) / CDF(max)` như ví dụ ở slide (không trừ `CDF_min`), mức xám 0 sẽ ánh xạ gần nhất thành bao nhiêu?

- [ ] 0
- [ ] 64
- [ ] 255
- [x] 128

> Giải thích: Có 2/4 pixel có giá trị `≤ 0`, nên CDF chuẩn hóa ở mức 0 là `255 × (2/4) = 127.5 ≈ 128`. Nếu dùng biến thể *trừ CDF_min*, kết quả sẽ khác; câu hỏi cố ý chỉ rõ công thức của slide.

## Câu 32
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Vì sao thao tác trên cả mảng NumPy thường nhanh hơn vòng `for` Python xử lý từng pixel riêng lẻ?

- [x] Vì nhiều phép toán mảng chạy trong mã đã biên dịch, giảm overhead Python và có thể dùng SIMD.
- [ ] Vì NumPy tự động giảm độ phân giải trước khi tính, rồi nội suy lại ảnh.
- [ ] Vì NumPy bỏ qua các pixel có giá trị lặp lại để tiết kiệm phép tính.
- [ ] Vì phép toán NumPy luôn dùng đúng một chu kỳ CPU cho toàn bộ ảnh.

> Giải thích: NumPy thực hiện nhiều phép toán trên mã đã biên dịch, giảm chi phí vòng lặp Python; SIMD có thể giúp tăng tốc nhưng không có bảo đảm hệ số tăng tốc cố định.

## Câu 33
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Trong ngưỡng hóa ảnh xám, quy tắc được chọn là: **pixel ≥ T thì thành 255; pixel < T thì thành 0**. Ý nghĩa của T là gì?

- [ ] Giá trị cộng thêm vào mọi pixel trước khi đổi sang RGB.
- [ ] Số lượng pixel tối đa được chọn để tạo ra ảnh nhị phân.
- [x] Ranh giới cường độ để quyết định pixel đầu ra trắng hay đen.
- [ ] Số mức xám cần giữ lại trong ảnh sau ngưỡng hóa.

> Giải thích: `T` là mốc quyết định mỗi pixel được đưa về mức 0 hay 255 theo quy tắc đã cho.

## Câu 34
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Với quy tắc ở câu 33 và `T = 128`, dãy pixel `[80, 127, 128, 200]` sau ngưỡng hóa là gì?

- [ ] `[0, 255, 255, 255]`
- [x] `[0, 0, 255, 255]`
- [ ] `[0, 0, 0, 255]`
- [ ] `[80, 127, 255, 255]`

> Giải thích: 80 và 127 nhỏ hơn 128 → 0; 128 và 200 lớn hơn hoặc bằng 128 → 255.

## Câu 35
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Cho phép biến đổi `g = αf + β`. Nếu `f = 120`, `α = 1.5`, `β = 20`, đầu ra sau khi giới hạn vào `[0,255]` bằng bao nhiêu?

- [x] 200
- [ ] 180
- [ ] 210
- [ ] 220

> Giải thích: `g = 1.5×120 + 20 = 200`, không cần clip.

## Câu 36
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Cho `g = 2f`, với pixel đầu vào `f = 180` trên ảnh xám 8-bit. Nếu kết quả được **giới hạn (clip)** vào `[0,255]`, giá trị lưu cuối cùng là gì?

- [ ] 180
- [ ] 360
- [ ] 104
- [x] 255

> Giải thích: `2×180 = 360`; clip về giá trị lớn nhất của ảnh xám 8-bit là 255. *Clip* khác phép tràn số (overflow).

## Câu 37
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Điều gì dễ xảy ra nếu tăng `α` từ 1 lên 2 trong `g = αf + β`, với `β = 0`, trên ảnh xám 8-bit?

- [ ] Ảnh luôn giữ nguyên độ sáng trung bình, chỉ tăng khác biệt giữa các pixel.
- [x] Nhiều pixel tăng giá trị và một số có thể bị bão hòa ở 255.
- [ ] Các pixel tối sẽ tối hơn, còn pixel sáng sáng hơn quanh đúng mức 128.
- [ ] Mọi mức xám tự phân bố đều trên đoạn 0–255 như histogram equalization.

> Giải thích: Với β = 0, nhân α > 1 làm tăng mức sáng của các pixel dương; pixel vượt 255 sẽ bị bão hòa nếu clip.

## Câu 38
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Muốn tăng tương phản **quanh mốc xám 128**, dùng `g = 1.5(f − 128) + 128`. Với `f = 64`, đầu ra bằng bao nhiêu?

- [ ] 64
- [ ] 96
- [x] 32
- [ ] 48

> Giải thích: `1.5(64−128)+128 = 1.5(−64)+128 = 32`. Công thức này tăng tương phản quanh mốc 128.

## Câu 39
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Trong một mảng ảnh NumPy có trục thứ nhất là hàng `y`, trục thứ hai là cột `x`, muốn cắt ROI bắt đầu tại `(x,y)` rộng `w`, cao `h`, biểu thức nào đúng?

- [x] `im[y:y+h, x:x+w]`
- [ ] `im[x:x+w, y:y+h]`
- [ ] `im[y:y+w, x:x+h]`
- [ ] `im[x:x+h, y:y+w]`

> Giải thích: NumPy hai chiều đánh chỉ số `[hàng, cột] = [y,x]`; ROI cao `h`, rộng `w` nên `[y:y+h, x:x+w]`.

## Câu 40
Chủ đề: Bài 1: Biến đổi độ sáng, Ngưỡng và ROI
Một ROI bắt đầu tại `(x,y)=(100,50)`, rộng `80` pixel và cao `40` pixel. Nếu ảnh là grayscale NumPy hai chiều, shape ROI dự kiến là gì?

- [ ] `(80, 40)`
- [ ] `(150, 180)`
- [ ] `(100, 50)`
- [x] `(40, 80)`
---

> Giải thích: Kích thước ROI là 40 hàng × 80 cột; tọa độ bắt đầu không làm thay đổi kích thước kết quả.

## Câu 41
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Trong slide bàn về NumPy, đâu là lý do hợp lý nhất cho ưu thế tốc độ khi xử lý mảng lớn?

- [ ] Python tự chuyển mọi ảnh thành định dạng nén trước khi tính.
- [ ] NumPy dùng thuật toán khác hoàn toàn nên không cần duyệt pixel.
- [x] NumPy giảm chi phí vòng lặp Python, có thể tận dụng truy cập bộ nhớ liên tục và SIMD.
- [ ] CPU tăng số bit mỗi pixel của mảng để giảm số lần truy cập bộ nhớ.

> Giải thích: NumPy có thể giảm overhead Python, sử dụng vùng nhớ liên tiếp và tận dụng xử lý vector; tốc độ thực tế còn tùy phép tính và bố trí bộ nhớ.

## Câu 42
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
SIMD (Single Instruction, Multiple Data) có nghĩa gần nhất là gì?

- [x] Một loại lệnh áp dụng cùng phép toán lên nhiều phần tử dữ liệu.
- [ ] Nhiều lệnh độc lập lần lượt xử lý một phần tử dữ liệu.
- [ ] Một lệnh điều khiển nhiều chương trình chạy theo thứ tự.
- [ ] Nhiều bộ nhớ cùng lưu một pixel để giảm độ trễ truy cập.

> Giải thích: SIMD là cùng một thao tác được áp dụng song song lên nhiều phần tử dữ liệu.

## Câu 43
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Trong slide 23, `uint size = (uint)(bitmap.Width * bitmap.Height);`. Với ảnh 100 × 50 và định dạng ARGB 32-bit, `size` bằng bao nhiêu?

- [ ] 20.000 byte
- [x] 5.000 pixel
- [ ] 5.000 byte
- [ ] 20.000 pixel

> Giải thích: `size = 100 × 50 = 5.000` là **số pixel**, không phải byte. Nếu mỗi pixel 4 byte, dữ liệu pixel thường cần `5.000 × 4 = 20.000` byte (chưa xét cấu trúc/đệm theo hàng).

## Câu 44
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Một pixel `Format32bppArgb` chiếm 4 byte. Trong cách duyệt byte của slide 24 trên hệ little-endian, thứ tự byte bộ nhớ được đọc là gì?

- [ ] Alpha, Red, Green, Blue.
- [ ] Red, Green, Blue, Alpha.
- [ ] Blue, Red, Green, Alpha.
- [x] Blue, Green, Red, Alpha.

> Giải thích: Đoạn code slide 24 duyệt theo thứ tự B, G, R, rồi bỏ qua Alpha ở byte thứ tư của mỗi pixel trong trường hợp được giả định.

## Câu 45
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Vai trò chính của `bitmap.LockBits(...)` ở slide 23 là gì?

- [ ] Tự động chuyển mọi pixel sang ảnh xám khi khóa vùng ảnh.
- [ ] Tạo sẵn ma trận NumPy chứa ba kênh màu để tính toán.
- [x] Cung cấp quyền truy cập vào dữ liệu pixel của vùng Bitmap được khóa.
- [ ] Tự động thực thi lệnh SIMD trên toàn bộ dữ liệu pixel đầu vào.

> Giải thích: `LockBits` cho phép chương trình truy cập vùng dữ liệu pixel đã khóa; nó không tự chuyển Gray hoặc thực thi SIMD.

## Câu 46
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Trong `bitmap.LockBits(..., ImageLockMode.ReadOnly, ...)`, `ReadOnly` thể hiện điều gì?

- [x] Yêu cầu truy cập vùng ảnh ở chế độ chỉ đọc.
- [ ] Yêu cầu đọc một pixel rồi lập tức mở khóa vùng ảnh.
- [ ] Yêu cầu chỉ đọc dữ liệu kênh Alpha, không đọc RGB.
- [ ] Yêu cầu giữ nguyên định dạng ảnh xám 8-bit khi lưu.

> Giải thích: `ReadOnly` chỉ định rằng chương trình chỉ đọc vùng ảnh này; ảnh Gray đầu ra được tạo ở một mảng riêng.

## Câu 47
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Trong đoạn `switch (srcData.PixelFormat)`, khi định dạng không khớp `Format32bppArgb`, chương trình theo code slide 23 sẽ làm gì?

- [ ] Đọc dữ liệu như ảnh ARGB, bỏ qua các kênh thiếu.
- [ ] Tự động đổi ảnh sang ARGB rồi tiếp tục tính Gray.
- [ ] Trả về mảng xám toàn số 0 với kích thước phù hợp.
- [x] Phát sinh lỗi `FormatException` về định dạng không hợp lệ.

> Giải thích: Nhánh `default` gọi `throw new FormatException("Wrong format!")` nếu không phải `Format32bppArgb`.

## Câu 48
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Vì sao `bitmap.UnlockBits(srcData)` được đặt trong khối `finally`?

- [ ] Để lặp lại toàn bộ phép tính grayscale nếu hàm trước thất bại.
- [x] Để mở khóa Bitmap khi rời khối `try`, kể cả khi có `return` hay lỗi.
- [ ] Để chuyển con trỏ `Scan0` thành mảng byte trước lúc trả về.
- [ ] Để xóa ảnh gốc khỏi RAM sau khi tạo ảnh xám mới.

> Giải thích: `finally` dùng để chạy thao tác dọn dẹp như `UnlockBits` dù kết thúc bình thường, `return` hay phát sinh ngoại lệ sau khi khóa thành công.

## Câu 49
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Trong slide 24, hai dòng `IntPtr Scan0 = srcData.Scan0;` và `byte* p = (byte*)(void*)Scan0;` có tác dụng gần nhất là gì?

- [x] Lấy địa chỉ vùng dữ liệu ảnh rồi tạo con trỏ để truy cập các byte pixel.
- [ ] Tạo ra một vùng nhớ mới và chép toàn bộ ảnh vào mảng `p`.
- [ ] Đổi địa chỉ mỗi pixel thành giá trị grayscale trước khi thực hiện vòng lặp.
- [ ] Chuyển định dạng ARGB thành RGB bằng cách xóa hẳn kênh Alpha.

> Giải thích: `Scan0` chứa địa chỉ bắt đầu dữ liệu bitmap; ép sang `byte*` giúp đọc từng byte qua `p[index]`.

## Câu 50
Chủ đề: Bài 1: Hiệu năng, Bộ nhớ và Tối ưu
Ở vòng lặp của slide 24, biến `index` tăng tổng cộng 4 lần cho mỗi pixel còn `i` tăng 1 lần. Giải thích nào đúng?

- [ ] `index` lần lượt đi qua 4 pixel, còn `i` đánh số một hàng ảnh.
- [ ] `index` duyệt 4 kênh ảnh đầu ra, còn `i` đánh số một kênh RGB.
- [x] `index` duyệt 4 byte của pixel đầu vào, còn `i` đánh số pixel Gray đầu ra.
- [ ] `index` chạy 4 lần vì mỗi pixel Gray cần 4 byte để lưu giá trị.
---

> Giải thích: Mỗi pixel ARGB có 4 byte đầu vào nên `index` tăng 4; mỗi pixel Gray đầu ra chiếm một byte nên `i` tăng 1. **Lưu ý khi áp dụng thực tế:** code slide khai báo `stride` nhưng không dùng, nên giả định dữ liệu mỗi hàng nằm liên tiếp theo cách mà vòng lặp mong đợi.

