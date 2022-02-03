// Q1
function 클리닝함수(a :(number|string)[]){
  let 클리닝완료 :number[] = [];

  a.forEach((b)=> {
    if (typeof b === 'string'){
      클리닝완료.push(parseFloat(b))
    } else {
      클리닝완료.push(b)
    }
  })
  return 클리닝완료
}

console.log(클리닝함수([123, '3']));

// Q2
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 만들함수(x :{subject : string | string[]}){
  if (typeof x.subject === 'string'){
    return x.subject
  } else if (Array.isArray(x.subject)){
    return x.subject[x.subject.length -1]
  } else {
    return '없음'
  }
}
console.log( 만들함수( { subject : ['english', 'art'] }  ) )