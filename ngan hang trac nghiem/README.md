# Hướng dẫn định dạng ngân hàng câu hỏi trắc nghiệm

Khi bạn có câu hỏi trắc nghiệm (từ file review, PDF, đề thi), bạn có thể lưu thành file `.md` trong thư mục này theo cấu trúc chuẩn sau:

```markdown
## Câu 1
Chủ đề: Bài 1: Tổng quan
Đoạn mã / câu hỏi ở đây?

- [ ] Lựa chọn A (sai)
- [x] Lựa chọn B (đúng)
- [ ] Lựa chọn C (sai)
- [ ] Lựa chọn D (sai)

> Giải thích: Lý do chọn đáp án B...

## Câu 2
Chủ đề: Bài 2: Tiền xử lý
Trong OpenCV, hàm nào dùng để lọc ảnh bằng Gaussian Filter?

```python
import cv2
blur = cv2.GaussianBlur(img, (5, 5), 0)
```

- [x] cv2.GaussianBlur
- [ ] cv2.blur
- [ ] cv2.medianBlur
- [ ] cv2.bilateralFilter

> Giải thích: cv2.GaussianBlur sử dụng kernel phân phối chuẩn Gaussian.
```

Sau đó chạy lệnh:
```bash
node tools/generate_questions.js
```
Hoặc gửi trực tiếp file/nội dung câu hỏi cho AI để tự động nạp vào web!
