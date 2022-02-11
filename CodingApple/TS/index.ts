let 링크 = document.querySelectorAll('.naver');

링크.forEach((a)=>{
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
})