let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):");
let borrowDays = Number(prompt("Nhập số ngày mượn sách:"));
let hasLibraryCard = prompt("Bạn có thẻ thư viện không? (true / false):");

bookStatus = bookStatus.toLowerCase();
hasLibraryCard = hasLibraryCard === "true";

if (bookStatus === "có sẵn" && hasLibraryCard === true) {
    console.log("Chúc mừng, bạn có thể mượn sách này");
} 
else if (bookStatus === "đã mượn" && borrowDays < 30) {
    if (hasLibraryCard === true) {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} 
else if (bookStatus === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} 
else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
