// 자바스크립트는 두가지 환경에서 살아갈 수 있음
// 1. Browser
// 2. Node

// 같은 language 확인하는데 다름
console.log(navigator.language);

// packge-lock.json: 패키지의 디테일한 정보

// liver-server를 깔아주는 이유
// 다른 사람도 파일을 받았을 때 프로젝트를 동일한 환경에서 실행하기 위해

// -g(global) 내 컴퓨터에 아예 패키지 설치하기
// -D(develope) 클라이언트를 위한 패키지, 즉 패키지를 개발환경에서만 사용한다는 설정

// 옵션은 세 가지 있음 warn, off, error(default)
// 한 줄 주석은 안됨
/* eslint no-undef: 'error'*/

// eslint disable  - 검색 중지

const a = 'hello';
