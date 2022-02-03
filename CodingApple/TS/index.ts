// Q1
function sayHi(x? :string){
  if(x){
    console.log('안녕하세요' + x)
  } else{
    console.log('이름이 없습니다.')
  }
}

// Q2
function 자릿수세기(x :number | string) :number{
  return x.toString().length
}

// Q3 
function 결혼가능확률(월소득:number, 집보유여부:boolean, 매력점수:string) :string|void{
  let score :number = 0;
  score += 월소득;
  if (집보유여부 === true){
    score += 500;
  }
  if (매력점수 === '상'){
    score += 100;
  }
  if (score >= 600){
    return '결혼가능'
  }
}