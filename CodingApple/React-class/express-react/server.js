const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 

// html css js img 파일들 담긴 곳 명시
app.use( '/', express.static( path.join(__dirname, 'public') ) )
app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ) )

// '/'로 접속했을 때 main.html을 응답한다.
app.get('/', function(요청, 응답){
  응답.sendFile( path.join(__dirname, 'public/main.html') )
})

// '/react'로 접속했을 때 main.html을 응답한다.
app.get('/react', function(요청, 응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html') )
})

// 유저가 URL 아무거나 입력하면 리액트 HTML을 보내준다. (라우팅)
app.get('*', function(요청, 응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html') )
})