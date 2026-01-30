let names = ["Laptop", "Phone", "Tablet", "Headphone", "Camera"];
let prices = [1200, 800, 450, 150, 600];
let stocks = [10, 0, 5, 20, 3];

let choice;

do {
    choice = Number(prompt(
        "=== QUẢN LÝ KHO HÀNG ===\n" +
        "1. Lọc sản phẩm cao cấp (> 500)\n" +
        "2. Kiểm định trạng thái dữ liệu\n" +
        "3. Phân tích giá trị vốn hóa\n" +
        "4. Giảm giá 10% toàn bộ sản phẩm\n" +
        "5. Tìm sản phẩm theo từ khóa\n" +
        "6. Báo cáo tình trạng tồn kho\n" +
        "7. Thoát chương trình\n" +
        "Nhập lựa chọn (1-7):"
    ));

    switch (choice) {
        case 1:
            let highProducts = names.filter((value, i) => prices[i] > 500);
            alert("Sản phẩm giá > 500:\n" + highProducts.join("\n"));
            break;

        case 7: 
            alert("Hẹn gặp lại!");
            break;

        default:
            alert("Vui lòng chọn từ 1 đến 7");
    }
} while (choice !== 7);