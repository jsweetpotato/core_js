/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// 객체에서 내가 원하는 값이 있어?
// in 문
const key = 'nickname';

Object.prototype.nickname = 'tiger';
// console.log((123).nickname);
// console.log({}.nickname);
// console.log([].nickname);
// console.log('a'.nickname);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// 자바스크립트는 자유로운 언어: 내 맘대로 바꿀 수 있음

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// for (const key in javaScript) {
//   if (Object.hasOwnProperty.call(javaScript, key)) {
//     const element = javaScript[key];
//     console.log(element);
//   }
// }

// 배열은 순서 보장이 안됨, 성능도 안좋아짐 => for...in은 객체에만 사용
// const tens = [10, 100, 1000, 10000];
// for (let key in tens) {
//   console.log(key);
// }

// Object의 인스턴스들 String, number, boolean, array, function은 각자 고유의 능력을 가지고 있다.
// 이때 커스텀 객체가 가진 능력은 아니더라도 call 메서드를 사용하면
// Object의 프로토타입 메서드 hasOwnProperty를 빌려쓰는 것처럼
// 커스텀 객체의 메서드가 아닌 다른 요소의 메서드를 사용할 수 있다.

function createObj() {
  const obj = {
    name: 'john',
  };
  return obj;
}

const obj = new createObj();
console.dir(obj);

Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true, // 덮어쓰기
    enumerable: true, // 열거 가능
  },
  property2: {
    value: 'hello',
    writable: false,
    enumerable: true,
  },
});
