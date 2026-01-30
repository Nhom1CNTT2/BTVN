// Chức năng 3: Phân tích hóa vốn

// Yêu cầu: Tính toán tổng giá trị tài sản hiện có trong kho hàng.
// Công thức:

// Kỹ thuật: Sử dụng phương thức thu gọn mảng về một giá trị duy nhất.

const prices = [100, 200, 150];
const stocks = [5, 3, 10];

const totalAsset = prices.reduce((total, price, index) => {
    return total + price * stocks[index];
}, 0);

console.log("Tổng giá trị kho hàng:", totalAsset);
