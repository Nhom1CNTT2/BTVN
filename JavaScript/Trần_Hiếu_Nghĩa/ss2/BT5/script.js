let bookName = prompt("Tên sách: ");
let statusBook = prompt("Trạng thái sách(có sẵn hay đã mượn): ");
let publicYear = Number(prompt("năm sản xuất: "));
let currentYear = 2026;
// xử lý dữ liệu 
statusBook = statusBook.toLowerCase();

if(statusBook === "có sẵn" && ((currentYear-publicYear)<=5) ){
    console.log("Sách này mới và có sẵn để mượn");
} else if(statusBook === "có sẵn" && ((currentYear-publicYear)>5) ){
    console.log("Sách này có sẵn nhưng đã lâu năm");
} else if(statusBook === "đã mượn" && ((currentYear-publicYear)<=10) ){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if(statusBook === "đã mượn" && ((currentYear-publicYear)>10) ){
    console.log("Sách này đã mượn và khá cũ");
} else {
    console.log("Thông tin sách không hợp lệ");
}