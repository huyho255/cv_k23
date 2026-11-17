# 50 CÂU TRẮC NGHIỆM — BÀI 1: THỊ GIÁC MÁY TÍNH

**Mức độ:** Từ hiểu bản chất đến vận dụng, có câu tính toán và đọc code.  
**Hình thức:** 50 câu, mỗi câu 4 lựa chọn, **chỉ một đáp án đúng nhất**.  
**Nguồn:** Slide *Bài 1: Tổng quan về Thị giác Máy tính* (PDF 26 trang) và tài liệu *Giới thiệu về ảnh số và các thao tác cơ bản* mà bạn cung cấp trong cuộc trò chuyện. Những phần như **sampling, quantisation, thresholding, alpha/beta và ROI** được lấy từ tài liệu bổ sung, không coi là nội dung được trình bày đầy đủ trong PDF.  
**Cách làm:** Không xem đáp án ở cuối file trước khi hoàn thành. Các phương án sai được thiết kế gần với phương án đúng, thường chỉ khác ở **bản chất, thứ tự thực hiện hoặc điều kiện áp dụng**.

---

## PHẦN A — BẢN CHẤT ẢNH SỐ VÀ COMPUTER VISION (CÂU 1–10)

### Câu 1
Mô tả nào sát nhất với mục đích chính của thị giác máy tính được nêu trong Bài 1?

A. Biến mọi ảnh màu thành ảnh xám để máy tính tính toán dễ hơn.  
B. Tăng độ phân giải ảnh để làm rõ các chi tiết của đối tượng.  
C. Rút thông tin từ ảnh và xây dựng biểu diễn phục vụ một nhiệm vụ cụ thể.  
D. Lưu thông tin ảnh thành ma trận rồi tái tạo lại đúng ảnh ban đầu.

### Câu 2
Một ảnh xám có kích thước 640 × 480 pixel được đưa vào NumPy. Nếu mỗi pixel là một giá trị xám, dạng ma trận phù hợp nhất là gì?

A. Ma trận 640 × 480 × 1 với ba trục bắt buộc.  
B. Ma trận 480 × 640 với một giá trị ở mỗi vị trí.  
C. Ma trận 640 × 480 với ba giá trị ở mỗi vị trí.  
D. Ma trận 480 × 640 × 3 vì ảnh vẫn có độ sáng.

### Câu 3
Với ảnh RGB được NumPy lưu theo dạng `(height, width, channels)`, shape `(720, 1280, 3)` nói lên điều gì?

A. Có 720 cột, 1280 hàng và 3 ảnh tách biệt.  
B. Có 720 hàng, 1280 cột và 3 byte cho toàn ảnh.  
C. Có 1280 hàng, 720 cột và 3 mức sáng mỗi pixel.  
D. Có 720 hàng, 1280 cột và 3 giá trị màu mỗi pixel.

### Câu 4
Một ảnh JPEG 1920 × 1080 đã được lưu trong máy tính. Phát biểu nào đúng nhất về quá trình sampling ban đầu?

A. Ảnh đã có các mẫu không gian; đọc file để xử lý không đòi hỏi lấy mẫu lại từ cảnh thật.  
B. Ảnh chưa được sampling; việc đọc bằng Python mới tạo ra lưới 1920 × 1080.  
C. Ảnh chỉ được sampling khi chuyển từ RGB sang grayscale.  
D. Ảnh phải được sampling lại trước mỗi phép biến đổi pixel.

### Câu 5
Giảm một ảnh từ 1920 × 1080 xuống 960 × 540 bằng phương pháp thu nhỏ phù hợp làm thay đổi trực tiếp yếu tố nào?

A. Số mức lượng tử hóa của từng kênh màu giảm đúng bốn lần.  
B. Số vị trí pixel cần biểu diễn và xử lý giảm đúng bốn lần.  
C. Mỗi giá trị RGB tự động giảm còn một phần tư ban đầu.  
D. Độ sâu bit tự động giảm từ 8-bit xuống 2-bit.

### Câu 6
Với ảnh xám **8-bit không dấu**, phát biểu nào chính xác?

A. Có 255 giá trị, từ 1 đến 255; số 0 dùng riêng cho nền.  
B. Có 256 giá trị, từ −128 đến 127; số âm biểu thị vùng tối.  
C. Có 256 giá trị, từ 0 đến 255; mỗi pixel lưu một mức xám.  
D. Có 256 giá trị cho mỗi pixel; đồng thời cần ba kênh R, G, B.

### Câu 7
Trong quá trình tạo ảnh số từ cảnh thực, sampling không gian có ý nghĩa nào?

A. Chọn số bit để biểu diễn biên độ tín hiệu ở mỗi pixel.  
B. Áp công thức trọng số RGB để tính độ sáng của pixel.  
C. Nén các giá trị ảnh để giảm kích thước file đầu ra.  
D. Xác định các vị trí hoặc vùng không gian được đo để tạo dữ liệu pixel.

### Câu 8
Nếu giữ nguyên kích thước 1920 × 1080 nhưng lượng tử hóa ảnh xám từ 8-bit xuống 1-bit, điều nào đúng?

A. Số pixel giữ nguyên nhưng mỗi pixel chỉ còn hai mức biểu diễn.  
B. Tổng số pixel giảm còn một phần tám vì giảm số bit.  
C. Mỗi pixel vẫn có 256 mức nhưng cần ít bộ nhớ hơn.  
D. Số pixel giữ nguyên và ảnh nhất thiết mờ như khi resize.

### Câu 9
Một ảnh chuyển sắc bầu trời xuất hiện các dải sáng–tối có ranh giới rõ sau khi giảm bit depth. Nguyên nhân trực tiếp hợp lý nhất là gì?

A. Sampling không gian đã làm xuất hiện các đường aliasing ở biên.  
B. Histogram đã thay đổi thứ tự vị trí của các pixel.  
C. Quantisation đã gộp nhiều mức sáng gần nhau vào cùng mức số.  
D. Dữ liệu RGB được chuyển thành ma trận hai chiều nên mất chi tiết.

### Câu 10
Một bức ảnh có người đứng trước gương, khiến cùng một người xuất hiện thêm trong phản chiếu. Vì sao đây là thách thức đối với thị giác máy tính?

A. Vì ảnh có gương thì không thể biểu diễn bằng các ma trận RGB.  
B. Vì phát hiện hình dáng người chưa đủ để biết đâu là người thật và đâu là phản chiếu.  
C. Vì ảnh phản chiếu luôn có độ phân giải thấp hơn ảnh của người thật.  
D. Vì chỉ các ảnh grayscale mới có thể tách người thật khỏi hình phản chiếu.

---

## PHẦN B — PYTHON, RGB VÀ GRAYSCALE (CÂU 11–20)

### Câu 11
Trong đoạn `im = Image.open('empire.jpg')`, thao tác chính là gì?

A. Mở file ảnh và tạo đối tượng ảnh để dùng trong chương trình.  
B. Đọc file rồi tự động chuyển toàn bộ pixel thành grayscale.  
C. Đọc file rồi tự động biến ảnh thành mảng NumPy hai chiều.  
D. Mở file rồi tự động hiển thị ảnh trên màn hình.

### Câu 12
Tại sao sau `Image.open(...)`, slide dùng `im = array(im)`?

A. Để tăng số pixel ảnh trước khi thực hiện các phép tính.  
B. Để chuyển ảnh về 8-bit bất kể định dạng ban đầu.  
C. Để chuẩn hóa histogram trước khi vẽ và xử lý.  
D. Để biểu diễn dữ liệu ảnh dưới dạng mảng, thuận tiện cho phép toán NumPy.

### Câu 13
Một ảnh RGB 1080 × 1920 được chuyển thành mảng NumPy và có shape `(1080, 1920, 3)`. Truy cập `im[10, 20]` trong cách lưu này có ý nghĩa gì?

A. Lấy màu của cả hàng thứ 10 và cột thứ 20.  
B. Lấy kênh màu thứ 10 của pixel thứ 20.  
C. Lấy ba giá trị màu ở hàng 10, cột 20.  
D. Lấy cường độ xám duy nhất tại tọa độ x = 10, y = 20.

### Câu 14
Lệnh `im = im.convert('L')` trong Pillow có tác dụng chính nào?

A. Chỉ đổi cách hiển thị mà không thay đổi dữ liệu pixel.  
B. Tạo phiên bản ảnh chế độ xám (luminance/luma 8-bit kiểu `L`).  
C. Chuyển ảnh thành ảnh nhị phân chỉ gồm 0 và 255.  
D. Tạo histogram gồm 256 ô cho từng kênh RGB.

### Câu 15
Trong ví dụ slide, `gray()` được gọi trước `imshow(im)`. Cách hiểu đúng là gì?

A. `gray()` thay đổi trực tiếp mọi phần tử của mảng `im`.  
B. `gray()` chuyển NumPy array ba chiều thành hai chiều.  
C. `gray()` thực hiện chuẩn hóa độ sáng từ 0 đến 255.  
D. `gray()` đặt kiểu hiển thị thang xám cho biểu đồ ảnh.

### Câu 16
Hai lệnh `imshow(im)` và `show()` khác nhau chủ yếu như thế nào trong ví dụ Matplotlib?

A. `imshow` tạo phần hiển thị ảnh trên trục vẽ, còn `show` hiển thị hình vẽ.  
B. `imshow` mở file ảnh từ ổ đĩa, còn `show` chuyển dữ liệu sang NumPy.  
C. `imshow` thực hiện tính histogram, còn `show` tạo biểu đồ tần suất.  
D. `imshow` chuyển RGB thành Gray, còn `show` lưu ảnh đã chuyển.

### Câu 17
Slide PDF sử dụng công thức chuyển RGB sang Gray theo BT.709. Công thức nào khớp với slide?

A. `0.299R + 0.587G + 0.114B`  
B. `0.2126R + 0.7152G + 0.0722B`  
C. `0.2126R + 0.0722G + 0.7152B`  
D. `0.3333R + 0.3333G + 0.3333B`

### Câu 18
Áp dụng trực tiếp công thức BT.709 của slide cho pixel `(R,G,B) = (200,100,50)`. Giá trị Gray trước khi chuyển thành byte gần nhất với số nào?

A. 105.0  
B. 112.9  
C. 117.7  
D. 124.8

### Câu 19
Với công thức BT.709 của slide, một pixel thuần xanh lá `(R,G,B)=(0,255,0)` có giá trị xám gần nhất là bao nhiêu?

A. 182  
B. 150  
C. 128  
D. 73

### Câu 20
Đoạn mã `im = array(Image.open(...).convert('L'))` áp dụng lên ảnh RGB kích thước H × W thông thường. Shape dự kiến của `im` là gì?

A. `(H, W, 3)` vì ảnh gốc có ba kênh màu.  
B. `(H, W, 1)` vì grayscale luôn cần trục kênh.  
C. `(W, H)` vì chuyển Gray hoán đổi các trục.  
D. `(H, W)` vì mỗi vị trí còn một giá trị xám.

---

## PHẦN C — HISTOGRAM, CDF VÀ TỐI ƯU MẢNG (CÂU 21–30)

### Câu 21
Histogram của ảnh xám 8-bit cho biết thông tin gì?

A. Vị trí chính xác của mọi pixel thuộc từng mức xám.  
B. Số pixel ứng với từng mức cường độ xám.  
C. Số biên vật thể ứng với từng hướng trong ảnh.  
D. Tổng mức sáng của từng hàng và từng cột ảnh.

### Câu 22
Một ma trận ảnh xám 2 × 3 đi qua `flatten()`. Phát biểu nào đúng?

A. Tạo mảng 2 phần tử, mỗi phần tử là tổng một hàng.  
B. Tạo mảng 3 phần tử, mỗi phần tử là tổng một cột.  
C. Tạo mảng 6 phần tử, giữ các giá trị pixel nhưng biểu diễn một chiều.  
D. Tạo mảng 6 phần tử, tự động sắp xếp theo cường độ tăng dần.

### Câu 23
Ảnh xám có sáu pixel với giá trị `[0, 2, 2, 2, 4, 4]`. Giá trị histogram tại mức xám 2 là bao nhiêu?

A. 2  
B. 4  
C. 6  
D. 3

### Câu 24
Vì sao ví dụ slide thường dùng 256 bins khi vẽ histogram của ảnh xám 8-bit?

A. Vì có 256 mức giá trị nguyên từ 0 đến 255.  
B. Vì có 256 pixel ở mỗi hàng của ảnh xám.  
C. Vì mỗi pixel RGB gồm 256 bit thông tin.  
D. Vì 256 bins luôn làm ảnh có độ tương phản tốt nhất.

### Câu 25
Hai ảnh xám có cùng kích thước và cùng histogram, nhưng bố trí các pixel khác nhau. Kết luận nào chính xác?

A. Hai ảnh bắt buộc có cùng hình dạng vật thể vì histogram giống nhau.  
B. Hai ảnh bắt buộc có cùng độ sáng tại mọi tọa độ tương ứng.  
C. Hai ảnh có cùng phân bố mức xám, nhưng nội dung không gian có thể khác.  
D. Hai ảnh có cùng ma trận pixel, chỉ khác cách vẽ biểu đồ histogram.

### Câu 26
Giả sử số pixel ở ba mức xám 0, 1, 2 lần lượt là `[2, 3, 1]`. Giá trị **CDF tính theo số pixel** tại mức 1 là bao nhiêu?

A. 3  
B. 5  
C. 6  
D. 2

### Câu 27
Trong slide, sau khi tính `cdf = imhist.cumsum()`, câu lệnh `cdf = 255*cdf/cdf[-1]` có mục đích gì?

A. Đưa giá trị CDF lớn nhất về 255 để dùng làm bảng ánh xạ độ xám.  
B. Chia mỗi mức cường độ sáng cho 255 để thu được xác suất pixel.  
C. Đưa số lượng pixel trong ảnh về đúng 255 bằng cách lấy mẫu lại.  
D. Dời toàn bộ histogram sang phải 255 mức mà không đổi hình dạng.

### Câu 28
Phát biểu nào mô tả đúng nhất nguyên lý của cân bằng histogram toàn cục?

A. Điều chỉnh mọi pixel bằng cách cộng cùng một hằng số.  
B. Tăng riêng những pixel tối, giữ nguyên mọi pixel sáng.  
C. Sắp xếp lại vị trí pixel sao cho màu tối nằm cạnh nhau.  
D. Dùng phân phối tích lũy để ánh xạ lại các mức xám của pixel.

### Câu 29
Nhận định nào đúng về kết quả histogram equalization?

A. Luôn cải thiện chất lượng ảnh vì mọi histogram sau xử lý đều phẳng tuyệt đối.  
B. Có thể cải thiện tương phản nhưng cũng có thể làm nhiễu hoặc vùng ảnh kém tự nhiên rõ hơn.  
C. Chỉ có tác dụng trên ảnh RGB và không thể dùng với ảnh xám.  
D. Không thay đổi giá trị pixel mà chỉ thay đổi cách biểu diễn trục histogram.

### Câu 30
Sau khi cân bằng histogram trên mảng pixel đã `flatten()`, slide dùng `reshape(im.shape)`. Mục đích là gì?

A. Đưa histogram về lại 256 bins như ban đầu.  
B. Khôi phục giá trị pixel gốc trước lúc equalization.  
C. Đưa mảng pixel một chiều về kích thước hàng–cột của ảnh.  
D. Chuyển tất cả pixel sang dạng ba kênh RGB như ban đầu.

---

## PHẦN D — BIẾN ĐỔI PIXEL, NGƯỠNG HÓA VÀ ROI (CÂU 31–40)

*Phần này kết hợp slide về CDF với các kiến thức trong tài liệu bổ sung bạn gửi.*

### Câu 31
Một ảnh xám chỉ có bốn giá trị `[0, 0, 128, 255]`. Nếu dùng **đúng phép chuẩn hóa CDF trực tiếp** `255 × CDF(v) / CDF(max)` như ví dụ ở slide (không trừ `CDF_min`), mức xám 0 sẽ ánh xạ gần nhất thành bao nhiêu?

A. 0  
B. 64  
C. 255  
D. 128

### Câu 32
Vì sao thao tác trên cả mảng NumPy thường nhanh hơn vòng `for` Python xử lý từng pixel riêng lẻ?

A. Vì nhiều phép toán mảng chạy trong mã đã biên dịch, giảm overhead Python và có thể dùng SIMD.  
B. Vì NumPy tự động giảm độ phân giải trước khi tính, rồi nội suy lại ảnh.  
C. Vì NumPy bỏ qua các pixel có giá trị lặp lại để tiết kiệm phép tính.  
D. Vì phép toán NumPy luôn dùng đúng một chu kỳ CPU cho toàn bộ ảnh.

### Câu 33
Trong ngưỡng hóa ảnh xám, quy tắc được chọn là: **pixel ≥ T thì thành 255; pixel < T thì thành 0**. Ý nghĩa của T là gì?

A. Giá trị cộng thêm vào mọi pixel trước khi đổi sang RGB.  
B. Số lượng pixel tối đa được chọn để tạo ra ảnh nhị phân.  
C. Ranh giới cường độ để quyết định pixel đầu ra trắng hay đen.  
D. Số mức xám cần giữ lại trong ảnh sau ngưỡng hóa.

### Câu 34
Với quy tắc ở câu 33 và `T = 128`, dãy pixel `[80, 127, 128, 200]` sau ngưỡng hóa là gì?

A. `[0, 255, 255, 255]`  
B. `[0, 0, 255, 255]`  
C. `[0, 0, 0, 255]`  
D. `[80, 127, 255, 255]`

### Câu 35
Cho phép biến đổi `g = αf + β`. Nếu `f = 120`, `α = 1.5`, `β = 20`, đầu ra sau khi giới hạn vào `[0,255]` bằng bao nhiêu?

A. 200  
B. 180  
C. 210  
D. 220

### Câu 36
Cho `g = 2f`, với pixel đầu vào `f = 180` trên ảnh xám 8-bit. Nếu kết quả được **giới hạn (clip)** vào `[0,255]`, giá trị lưu cuối cùng là gì?

A. 180  
B. 360  
C. 104  
D. 255

### Câu 37
Điều gì dễ xảy ra nếu tăng `α` từ 1 lên 2 trong `g = αf + β`, với `β = 0`, trên ảnh xám 8-bit?

A. Ảnh luôn giữ nguyên độ sáng trung bình, chỉ tăng khác biệt giữa các pixel.  
B. Nhiều pixel tăng giá trị và một số có thể bị bão hòa ở 255.  
C. Các pixel tối sẽ tối hơn, còn pixel sáng sáng hơn quanh đúng mức 128.  
D. Mọi mức xám tự phân bố đều trên đoạn 0–255 như histogram equalization.

### Câu 38
Muốn tăng tương phản **quanh mốc xám 128**, dùng `g = 1.5(f − 128) + 128`. Với `f = 64`, đầu ra bằng bao nhiêu?

A. 64  
B. 96  
C. 32  
D. 48

### Câu 39
Trong một mảng ảnh NumPy có trục thứ nhất là hàng `y`, trục thứ hai là cột `x`, muốn cắt ROI bắt đầu tại `(x,y)` rộng `w`, cao `h`, biểu thức nào đúng?

A. `im[y:y+h, x:x+w]`  
B. `im[x:x+w, y:y+h]`  
C. `im[y:y+w, x:x+h]`  
D. `im[x:x+h, y:y+w]`

### Câu 40
Một ROI bắt đầu tại `(x,y)=(100,50)`, rộng `80` pixel và cao `40` pixel. Nếu ảnh là grayscale NumPy hai chiều, shape ROI dự kiến là gì?

A. `(80, 40)`  
B. `(150, 180)`  
C. `(100, 50)`  
D. `(40, 80)`

---

## PHẦN E — NUMPY, BỘ NHỚ ẢNH VÀ C# (CÂU 41–50)

### Câu 41
Trong slide bàn về NumPy, đâu là lý do hợp lý nhất cho ưu thế tốc độ khi xử lý mảng lớn?

A. Python tự chuyển mọi ảnh thành định dạng nén trước khi tính.  
B. NumPy dùng thuật toán khác hoàn toàn nên không cần duyệt pixel.  
C. NumPy giảm chi phí vòng lặp Python, có thể tận dụng truy cập bộ nhớ liên tục và SIMD.  
D. CPU tăng số bit mỗi pixel của mảng để giảm số lần truy cập bộ nhớ.

### Câu 42
SIMD (Single Instruction, Multiple Data) có nghĩa gần nhất là gì?

A. Một loại lệnh áp dụng cùng phép toán lên nhiều phần tử dữ liệu.  
B. Nhiều lệnh độc lập lần lượt xử lý một phần tử dữ liệu.  
C. Một lệnh điều khiển nhiều chương trình chạy theo thứ tự.  
D. Nhiều bộ nhớ cùng lưu một pixel để giảm độ trễ truy cập.

### Câu 43
Trong slide 23, `uint size = (uint)(bitmap.Width * bitmap.Height);`. Với ảnh 100 × 50 và định dạng ARGB 32-bit, `size` bằng bao nhiêu?

A. 20.000 byte  
B. 5.000 pixel  
C. 5.000 byte  
D. 20.000 pixel

### Câu 44
Một pixel `Format32bppArgb` chiếm 4 byte. Trong cách duyệt byte của slide 24 trên hệ little-endian, thứ tự byte bộ nhớ được đọc là gì?

A. Alpha, Red, Green, Blue.  
B. Red, Green, Blue, Alpha.  
C. Blue, Red, Green, Alpha.  
D. Blue, Green, Red, Alpha.

### Câu 45
Vai trò chính của `bitmap.LockBits(...)` ở slide 23 là gì?

A. Tự động chuyển mọi pixel sang ảnh xám khi khóa vùng ảnh.  
B. Tạo sẵn ma trận NumPy chứa ba kênh màu để tính toán.  
C. Cung cấp quyền truy cập vào dữ liệu pixel của vùng Bitmap được khóa.  
D. Tự động thực thi lệnh SIMD trên toàn bộ dữ liệu pixel đầu vào.

### Câu 46
Trong `bitmap.LockBits(..., ImageLockMode.ReadOnly, ...)`, `ReadOnly` thể hiện điều gì?

A. Yêu cầu truy cập vùng ảnh ở chế độ chỉ đọc.  
B. Yêu cầu đọc một pixel rồi lập tức mở khóa vùng ảnh.  
C. Yêu cầu chỉ đọc dữ liệu kênh Alpha, không đọc RGB.  
D. Yêu cầu giữ nguyên định dạng ảnh xám 8-bit khi lưu.

### Câu 47
Trong đoạn `switch (srcData.PixelFormat)`, khi định dạng không khớp `Format32bppArgb`, chương trình theo code slide 23 sẽ làm gì?

A. Đọc dữ liệu như ảnh ARGB, bỏ qua các kênh thiếu.  
B. Tự động đổi ảnh sang ARGB rồi tiếp tục tính Gray.  
C. Trả về mảng xám toàn số 0 với kích thước phù hợp.  
D. Phát sinh lỗi `FormatException` về định dạng không hợp lệ.

### Câu 48
Vì sao `bitmap.UnlockBits(srcData)` được đặt trong khối `finally`?

A. Để lặp lại toàn bộ phép tính grayscale nếu hàm trước thất bại.  
B. Để mở khóa Bitmap khi rời khối `try`, kể cả khi có `return` hay lỗi.  
C. Để chuyển con trỏ `Scan0` thành mảng byte trước lúc trả về.  
D. Để xóa ảnh gốc khỏi RAM sau khi tạo ảnh xám mới.

### Câu 49
Trong slide 24, hai dòng `IntPtr Scan0 = srcData.Scan0;` và `byte* p = (byte*)(void*)Scan0;` có tác dụng gần nhất là gì?

A. Lấy địa chỉ vùng dữ liệu ảnh rồi tạo con trỏ để truy cập các byte pixel.  
B. Tạo ra một vùng nhớ mới và chép toàn bộ ảnh vào mảng `p`.  
C. Đổi địa chỉ mỗi pixel thành giá trị grayscale trước khi thực hiện vòng lặp.  
D. Chuyển định dạng ARGB thành RGB bằng cách xóa hẳn kênh Alpha.

### Câu 50
Ở vòng lặp của slide 24, biến `index` tăng tổng cộng 4 lần cho mỗi pixel còn `i` tăng 1 lần. Giải thích nào đúng?

A. `index` lần lượt đi qua 4 pixel, còn `i` đánh số một hàng ảnh.  
B. `index` duyệt 4 kênh ảnh đầu ra, còn `i` đánh số một kênh RGB.  
C. `index` duyệt 4 byte của pixel đầu vào, còn `i` đánh số pixel Gray đầu ra.  
D. `index` chạy 4 lần vì mỗi pixel Gray cần 4 byte để lưu giá trị.

---

# ĐÁP ÁN — CHỈ XEM SAU KHI LÀM BÀI

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | C | 11 | A | 21 | B | 31 | D | 41 | C |
| 2 | B | 12 | D | 22 | C | 32 | A | 42 | A |
| 3 | D | 13 | C | 23 | D | 33 | C | 43 | B |
| 4 | A | 14 | B | 24 | A | 34 | B | 44 | D |
| 5 | B | 15 | D | 25 | C | 35 | A | 45 | C |
| 6 | C | 16 | A | 26 | B | 36 | D | 46 | A |
| 7 | D | 17 | B | 27 | A | 37 | B | 47 | D |
| 8 | A | 18 | C | 28 | D | 38 | C | 48 | B |
| 9 | C | 19 | A | 29 | B | 39 | A | 49 | A |
| 10 | B | 20 | D | 30 | C | 40 | D | 50 | C |

---

# GIẢI THÍCH ĐÁP ÁN

### Phần A

**1. C** — CV không chỉ cải thiện chất lượng ảnh; trọng tâm là trích xuất thông tin như hình dạng, độ sáng và phân bố màu để giải quyết nhiệm vụ.

**2. B** — Với ảnh xám 2D, một phần tử ma trận ứng với một pixel. NumPy thường ghi shape theo thứ tự *(hàng, cột)* nên ảnh 640 × 480 có shape `(480,640)`.

**3. D** — `(720,1280,3)` là 720 hàng, 1280 cột và ba giá trị R, G, B cho mỗi pixel.

**4. A** — Ảnh JPEG đã được số hóa. Đọc file chỉ giải mã dữ liệu có sẵn; không phải lấy mẫu lại trực tiếp từ thế giới thực.

**5. B** — Rộng và cao mỗi chiều giảm một nửa nên số pixel giảm còn `1/2 × 1/2 = 1/4`. Việc resize không tự đổi bit depth.

**6. C** — 8 bit có `2^8 = 256` tổ hợp, từ 0 đến 255 cho ảnh xám 8-bit không dấu.

**7. D** — Sampling chọn các vị trí/vùng thu nhận mẫu theo không gian; chọn số mức cường độ là quantisation.

**8. A** — 1-bit chỉ có hai mức biểu diễn; số hàng/cột vẫn giữ nguyên nếu không resize.

**9. C** — Khi bit depth giảm, nhiều mức gần nhau bị gộp thành một mức, dễ tạo các dải chuyển sắc (*banding*).

**10. B** — Mô hình cần hiểu ngữ cảnh và quan hệ giữa người với phản chiếu; chỉ phát hiện hình dạng không đủ để suy ra số người thật.

### Phần B

**11. A** — `Image.open` mở ảnh dưới dạng đối tượng Pillow; chưa tự động chuyển Gray, NumPy hay hiển thị.

**12. D** — `array(im)` đưa dữ liệu ảnh về dạng mảng để thực hiện phép toán ma trận, histogram và xử lý hàng loạt.

**13. C** — `im[10,20]` chọn pixel ở hàng 10, cột 20; nếu ảnh RGB, kết quả thường chứa ba giá trị màu.

**14. B** — `convert('L')` tạo ảnh xám chế độ L, không phải ảnh nhị phân. Trong cách trình bày thông thường, giá trị mỗi pixel nằm từ 0 đến 255.

**15. D** — `gray()` thiết lập bảng màu hiển thị thang xám của Matplotlib; bản thân nó không chuyển mảng RGB thành mảng grayscale.

**16. A** — `imshow` đưa dữ liệu ảnh lên trục vẽ, còn `show` hiển thị figure theo môi trường Matplotlib.

**17. B** — PDF Bài 1 ghi hệ số BT.709 là `0.2126R + 0.7152G + 0.0722B`; công thức `0.299/0.587/0.114` thuộc một cách tính thông dụng khác trong tài liệu bổ sung.

**18. C** — `0.2126×200 + 0.7152×100 + 0.0722×50 = 42.52 + 71.52 + 3.61 = 117.65`.

**19. A** — Xanh lá thuần: `0.7152 × 255 = 182.376`, gần 182. Trọng số xanh lá lớn nhất trong công thức.

**20. D** — Ảnh `L` có một giá trị trên mỗi vị trí nên khi chuyển sang NumPy thông thường có shape `(H,W)`.

### Phần C

**21. B** — Histogram đếm có bao nhiêu pixel tại mỗi mức xám; không lưu thông tin pixel nằm ở đâu.

**22. C** — `flatten()` trải 2 × 3 phần tử thành dãy 6 phần tử; không cộng dồn hay tự sắp xếp.

**23. D** — Giá trị 2 xuất hiện ba lần.

**24. A** — Ảnh xám 8-bit có đúng 256 mức nguyên từ 0 đến 255, nên 256 ô là lựa chọn tự nhiên.

**25. C** — Histogram giống nhau không đảm bảo hình ảnh giống nhau; đổi vị trí các pixel vẫn có thể giữ nguyên histogram.

**26. B** — CDF tại mức 1 là số pixel mức 0 cộng số pixel mức 1: `2 + 3 = 5`.

**27. A** — `cdf[-1]` là giá trị tích lũy cuối; nhân 255 rồi chia cho nó giúp giá trị CDF cuối bằng 255 khi tổng khác 0.

**28. D** — Equalization tạo bảng ánh xạ dựa trên phân phối tích lũy (CDF), thay vì cộng chung một độ sáng cho mọi pixel.

**29. B** — Cân bằng histogram có thể tăng tương phản nhưng không luôn làm ảnh đẹp hơn; nhiễu hay chuyển sắc bất thường cũng có thể rõ hơn.

**30. C** — `reshape(im.shape)` khôi phục cấu trúc hàng–cột để dữ liệu đã biến đổi hiển thị thành ảnh; không phục hồi pixel cũ.

### Phần D

**31. D** — Có 2/4 pixel có giá trị `≤ 0`, nên CDF chuẩn hóa ở mức 0 là `255 × (2/4) = 127.5 ≈ 128`. Nếu dùng biến thể *trừ CDF_min*, kết quả sẽ khác; câu hỏi cố ý chỉ rõ công thức của slide.

**32. A** — NumPy thực hiện nhiều phép toán trên mã đã biên dịch, giảm chi phí vòng lặp Python; SIMD có thể giúp tăng tốc nhưng không có bảo đảm hệ số tăng tốc cố định.

**33. C** — `T` là mốc quyết định mỗi pixel được đưa về mức 0 hay 255 theo quy tắc đã cho.

**34. B** — 80 và 127 nhỏ hơn 128 → 0; 128 và 200 lớn hơn hoặc bằng 128 → 255.

**35. A** — `g = 1.5×120 + 20 = 200`, không cần clip.

**36. D** — `2×180 = 360`; clip về giá trị lớn nhất của ảnh xám 8-bit là 255. *Clip* khác phép tràn số (overflow).

**37. B** — Với β = 0, nhân α > 1 làm tăng mức sáng của các pixel dương; pixel vượt 255 sẽ bị bão hòa nếu clip.

**38. C** — `1.5(64−128)+128 = 1.5(−64)+128 = 32`. Công thức này tăng tương phản quanh mốc 128.

**39. A** — NumPy hai chiều đánh chỉ số `[hàng, cột] = [y,x]`; ROI cao `h`, rộng `w` nên `[y:y+h, x:x+w]`.

**40. D** — Kích thước ROI là 40 hàng × 80 cột; tọa độ bắt đầu không làm thay đổi kích thước kết quả.

### Phần E

**41. C** — NumPy có thể giảm overhead Python, sử dụng vùng nhớ liên tiếp và tận dụng xử lý vector; tốc độ thực tế còn tùy phép tính và bố trí bộ nhớ.

**42. A** — SIMD là cùng một thao tác được áp dụng song song lên nhiều phần tử dữ liệu.

**43. B** — `size = 100 × 50 = 5.000` là **số pixel**, không phải byte. Nếu mỗi pixel 4 byte, dữ liệu pixel thường cần `5.000 × 4 = 20.000` byte (chưa xét cấu trúc/đệm theo hàng).

**44. D** — Đoạn code slide 24 duyệt theo thứ tự B, G, R, rồi bỏ qua Alpha ở byte thứ tư của mỗi pixel trong trường hợp được giả định.

**45. C** — `LockBits` cho phép chương trình truy cập vùng dữ liệu pixel đã khóa; nó không tự chuyển Gray hoặc thực thi SIMD.

**46. A** — `ReadOnly` chỉ định rằng chương trình chỉ đọc vùng ảnh này; ảnh Gray đầu ra được tạo ở một mảng riêng.

**47. D** — Nhánh `default` gọi `throw new FormatException("Wrong format!")` nếu không phải `Format32bppArgb`.

**48. B** — `finally` dùng để chạy thao tác dọn dẹp như `UnlockBits` dù kết thúc bình thường, `return` hay phát sinh ngoại lệ sau khi khóa thành công.

**49. A** — `Scan0` chứa địa chỉ bắt đầu dữ liệu bitmap; ép sang `byte*` giúp đọc từng byte qua `p[index]`.

**50. C** — Mỗi pixel ARGB có 4 byte đầu vào nên `index` tăng 4; mỗi pixel Gray đầu ra chiếm một byte nên `i` tăng 1. **Lưu ý khi áp dụng thực tế:** code slide khai báo `stride` nhưng không dùng, nên giả định dữ liệu mỗi hàng nằm liên tiếp theo cách mà vòng lặp mong đợi.

---

## TỰ CHẤM ĐIỂM

- **45–50 câu đúng:** Nắm vững kiến thức và đọc hiểu được phần lớn ví dụ trong Bài 1.
- **35–44 câu đúng:** Hiểu nền tảng, nên kiểm tra lại những câu tính toán hoặc mã nguồn sai.
- **25–34 câu đúng:** Nên ôn kỹ sampling/quantisation, grayscale, histogram/CDF và cách lưu pixel.
- **Dưới 25 câu đúng:** Nên học lại từng mục với ví dụ số nhỏ trước khi làm lại đề.

**Gợi ý ôn lại theo lỗi sai:** 1–10: bản chất ảnh số; 11–20: Python và RGB/Gray; 21–30: Histogram/CDF; 31–40: biến đổi pixel, ngưỡng, ROI; 41–50: NumPy, C# và truy cập bộ nhớ.
