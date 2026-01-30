 case 2:
let hasOutStock = stocks.some(s => s === 0);
            alert(hasOutStock ? "Có sản phẩm đã hểt hàng" : "Không có sản phẩm hết hàng");            
            let allPriceValid = prices.every(p => p > 100);
            alert(allPriceValid ? "Tất cả sản phẩm đều trên 100" : "Có sản phẩm giá <= 100");
break;