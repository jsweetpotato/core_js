// node server/process를 실행해보자
// console.log(process);

// node 환경 언어 정보
console.log(process.env.LANG);

// node로 live-server 실행해보기
const server = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  root:'./client'
}

server.start(params);

