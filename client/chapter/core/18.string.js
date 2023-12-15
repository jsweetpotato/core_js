// 유니코드 순으로 비교됨

// 나라마다 대문자가 나오는 방식이 다름. 언어에 맞는 대소문자로 바꿔준다.
'a'.toLocaleUpperCase();

/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter: ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
// immutable = 불변의
let immutableChangeCharacter;
message[5] = 'i'; // 안됨
console.log('message: ', message);

// 부분 문자열 추출
console.log('B' + message.slice(1));

let slice = message.slice(4, -1);
console.log('slice: ', slice);

let subString = message.substring(2, 5);
console.log('subString: ', subString);

let subStr = message.substr();

// 문자열 포함 여부 확인
// 없으면 -1을 반환
// 브라우저 체크할 떄 사용
let indexOf = message.indexOf('Less');
console.log('indexOf: ', indexOf);

// Mozilla가 계속 붙는 이유
window.navigator.userAgent;
window.chrome; // 크롬 체크

let browsers = {
  chrome: 'chrome',
  firefox: 'firefox',
  safari: 'safari',
};

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('chrome') && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozila Firefox';
      break;
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    default:
      browserName = 'other';
      break;
  }

  return browserName;
}
console.log(checkBrowser());

// 다른 검색 방법
let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes : ', includes);

let startsWith = message.startsWith('less');
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith : ', endsWith);

// 공백 잘라내기
let str = '     a   b     c   d   ';

let trimLeft = str.trimStart();
console.log('trimLeft : ', trimLeft);

let trimRight = str.trimEnd();
console.log('trimRight : ', trimRight);

let trim = str.trim();
console.log('trim : ', trim);

let reg = str.replace(/\s*/g, '');

let str2 = str.replaceAll(' ', '');

function noramlText(string) {
  return string.replace(/\s*/g, '');
}

console.log(reg);
console.log(str2);

// 텍스트 반복
let repeat = message.repeat(5);
console.log('repeat: ', repeat);
// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase = (string) =>
  string.replace(/(s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );

let test = (string = ' sd  sd_sad  sds ') =>
  string.replace(/(s|-|_)+./g, ($1) => $1);

console.log(test());
`${'13'.padStart(4, '0')}.jpg`;

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

// `${'100'.padStart(4,'0')}.jpg`

// forEach가 가장 성능이 좋음
