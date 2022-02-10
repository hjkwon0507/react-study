type Member = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void
}

// Q2 
type CutType = (x :string) => string
let cutZero :CutType = function (x){
  let result = x.replace(/^0+/, "");
  return result
}
function removeDash(x :string) :number{
  let result = x.replace(/-/g, "");
  return parseFloat(result)
}