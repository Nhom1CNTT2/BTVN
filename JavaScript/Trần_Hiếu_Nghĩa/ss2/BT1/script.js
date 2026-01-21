let bookName = prompt("Nhập tên cuốn sách: ");
let author = prompt("Nhập tên tác giả: ");
let publicYear = Number(prompt("Nhập năm xuất bản: "));
let currentYear = 2026;

if(publicYear === 2026){
     console.log("Đây là sách mới");
} else if(currentYear - publicYear <=5 ){
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}