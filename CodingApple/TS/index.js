// index.js
var 링크 = document.querySelectorAll('.naver');
링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
