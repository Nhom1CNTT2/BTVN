let bookName = prompt("Tên sách: ");
let borrowName= prompt("Tên người mượn: ");
let favLevel= Number(prompt("Mức độ yêu thích(1-5): "));

if(favLevel===5 || favLevel===4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if(favLevel ===3){
    console.log("Sách này khá ổn, có thể mượn");
} else if(favLevel === 2| favLevel ===1){
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else{
    console.log("Mức độ yêu thích không hợp lệ");
}