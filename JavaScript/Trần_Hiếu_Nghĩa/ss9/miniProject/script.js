let names = ["Laptop Dell", "Chuột Logitech", "Bàn phím cơ", "Màn hình LG", "Tai nghe Sony"];
let prices = [1500, 300, 800, 1200, 450];
let stocks = [10, 0, 5, 3, 0];
let isRunning = true;
while (isRunning) {
    let choice = prompt(`
        ===== QUẢN LÝ KHO HÀNG =====
        1. Lọc sản phẩm cao cấp (giá > 500)
        2. Kiểm định trạng thái dữ liệu
        3. Phân tích giá trị vốn hóa kho
        4. Áp dụng chiết khấu 10%
        5. Tìm sản phẩm theo từ khóa
        6. Báo cáo tình trạng tồn kho
        7. Thoát chương trình
        Nhập lựa chọn (1-7):
        `);
    choice = Number(choice);

    switch (choice) {
        case 1:
            
            break;

        case 2:
            
            break;

        case 3:
            
            break;

        case 4:
            // Chức năng 4: Chiết khấu 10%
            prices = prices.map(price => price * 0.9);
            alert("Đã áp dụng giảm giá 10% cho toàn bộ sản phẩm.");
            break;

        case 5:
            
            break;

        case 6:
            
            break;

        case 7:
            alert(`bye bye`);
            isRunning = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7.");
    }
}