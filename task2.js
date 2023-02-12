const idenHarga = (value) => {
    return value
}

const idenVoucher = (harga,value) => {
    let discount;
    let maxDiscount;

    if(value === 'PIJARFOOD5') {
        if(harga >= 50000) {
            discount = harga*1/2
            maxDiscount = 50000
            if(discount <= maxDiscount) {
                return harga - discount
            } else {
                return discount = maxDiscount
            }
            }
        }

     else if( value === 'DITRAKTIRPIJAR') {
        if(harga >= 25000) {
            discount = harga*3/5
            maxDiscount = 30000
            if(discount <= maxDiscount) {
                return harga - discount
            } else {
                return discount = maxDiscount
            }
        }
    }
}


const idenJarak = (value) => {
    if(value >= 0 && value <= 2) {
        return 5000
    } else {
        if(value >= 2) {
           let m = (value - 2) * 3000
           return 5000 + m
        }
    }
}

const idenPajak = (harga, value) => {
    if(value === true) {
        return harga * 5/100
    } else {
        return 0
    }
}   


const PijarFood = (harga,voucher,jarak,pajak) => {
    voucher = idenVoucher(harga,voucher)
    jarak = idenJarak(jarak)
    pajak = idenPajak(harga,pajak)
    harga = idenHarga(harga)
    
    if(voucher === undefined || voucher === null) {
       voucher = 0
    }
    
    let subTotal = harga - voucher + jarak + pajak

    console.log(`Harga : ${harga}`)
    console.log(`Potongan : ${voucher}`)
    console.log(`Biaya Antar : ${jarak}`)
    console.log(`Pajak : ${pajak}`)
    console.log(`Subtotal : ${subTotal}`)
}

PijarFood(75000, 'PIJARFOOD5', 5, true)