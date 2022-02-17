// index.ts
type Car = {
  wheel : '4개',
  color : string
}
type Bike = {
  wheel : '2개',
  color : string
}

function 함수(x :Car | Bike){
  if (x.wheel === '4개'){
    console.log('x는 Car타입이에요')
  }
}
