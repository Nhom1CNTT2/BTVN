let bookName = prompt("Tên sách: ");
let bookCategory = prompt("Thể loại sách: ");
let statusBook = prompt("Tình Trạng sách(true/false): ");

bookCategory = bookCategory.toLowerCase();
let isAvailable = statusBook === "true";

if(bookCategory === "khoa học" || bookCategory === "Lịch sử"){
    if(isAvailable){
        console.log("Sách này có sẵn trong thư viện");
    } else{
        console.log("Sách đã được mượn");
    }
} else if(bookCategory === "văn học"||bookCategory ==="truyện"){
    console.log("Sách này có thể đọc giải trí");
} else{
    console.log("Thể loại sách không hợp lệ");
}