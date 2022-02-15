// Q1.
interface Product {
  brand : string,
  serialNumber : number,
  model : string[]
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

// Q2.
interface Cart {
  product : string,
  price : number
}
interface NewCart extends Cart {
  card : boolean
}


let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
