// Q2
type MyType = {
  color? : string,
  size : number,
  readonly position : number[]
}

let 테스트용변수 :MyType = {
  size : 123,
  position : [1,2,3]
}

// Q3
type Info = {
  name : string,
  phone : number,
  email? : string
}

let 검사 :Info = {
  name : 'kim',
  phone : 123
}