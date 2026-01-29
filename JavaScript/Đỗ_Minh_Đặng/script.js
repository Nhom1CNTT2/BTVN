const products = [
  ["Laptop", 15000000, 5],
  ["Chuột", 200000, 20],
  ["Bàn phím", 500000, 15],
  ["Tai nghe", 700000, 10],
  ["Màn hình", 3000000, 7],
  ["Loa" , 400000,64]
];

let keyword = prompt("Nhập từ khóa tìm sản phẩm");

if (keyword) {
  let search = keyword.trim().toLowerCase();

  let result = products.find((value) => {
    return value[0].toLowerCase().includes(search);
  });

  if (result) {
    console.log("Sản phẩm tìm được:");
    console.log(
      `Tên: ${result[0]} | Giá: ${result[1]} | Số lượng: ${result[2]}`
    );
  } else {
    console.log("Không tìm thấy sản phẩm phù hợp");
  }
} else {
  console.log("Bạn chưa nhập từ khóa");
}
