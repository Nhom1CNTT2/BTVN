// Nhập giá trị
let userName = prompt("Nhập tên người dùng: ");
let role = prompt("Nhập vai trò: ");
let balance = prompt("Nhập số dư tài khoản: ");
let statusCardInput = prompt("Nhập trạng thái thẻ thư viện: ");
let expiredInput = prompt("Nhập số ngày hết hạn: ");

// chuẩn hóa
balance = Number(balance) || 0;
let expired = Number(expiredInput) || 0;

role = role ? role.toLowerCase() : "";
statusCardInput = statusCardInput ? statusCardInput.toLowerCase() : "";
let cardStatus = statusCardInput === "true";

// điều kiện của vai trò
let roleMess = "";

switch (role) {
    case "admin":
        roleMess = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        roleMess = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        roleMess = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        roleMess = "Lỗi: Vai trò không hợp lệ!";
}

// điều kiện mượn sách
let borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
let rejectReason = "";

if (!userName) {
    rejectReason = "Tên người dùng không hợp lệ";
} else if (role !== "admin" && role !== "student") {
    rejectReason = "Vai trò không được phép mượn sách";
} else if (balance <= 0) {
    rejectReason = "Không có đủ tiền để mượn sách";
} else if (!cardStatus) {
    rejectReason = "Thẻ thư viện đang bị khóa";
} else {
    borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
}

// tiền phạt
let fine = 0;
let returnStatus = "";

if (expired <= 0) {
    returnStatus = "Cảm ơn bạn đã trả đúng hạn";
} else if (expired <= 5) {
    fine = expired * 5000;
    returnStatus = `Quá hạn ${expired} ngày`;
} else if (expired <= 10) {
    fine = expired * 10000;
    returnStatus = `Quá hạn ${expired} ngày`;
} else {
    fine = 200000;
    returnStatus = `Quá hạn ${expired} ngày - TÀI KHOẢN BỊ KHÓA`;
}

// in kết quả
console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${userName ? userName.toUpperCase() : "KHÔNG XÁC ĐỊNH"}

Quyền hạn: ${roleMess}

Kết quả mượn: ${borrowResult}${rejectReason ? ` (${rejectReason})` : ""}

Tình trạng trả sách: ${returnStatus}

Tiền phạt: ${fine} VNĐ
`);
