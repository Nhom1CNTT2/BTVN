const products = [
  ["Laptop", 15000000, 5],
  ["Chuột", 200000, 20],
  ["Bàn phím", 500000, 15],
  ["Tai nghe", 700000, 0],
  ["Màn hình", 3000000, 7]
];
 


function getStatus(products) {
    let list = [];
    for(let i= 0; i < products.length; i++){
        let name = products[i][0]
        let quantity = products[i][2]
        let status;
        if (quantity > 0) {
            status = "Còn Hàng"
        }else{
            status = "Hết hàng"
        }
        list.push([name, status])
    }
    return list
}

console.log(getStatus(products))
