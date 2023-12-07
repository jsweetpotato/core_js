/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello';
const single = 'hello';
const backtick = `hello ${10 + 10}`;

// 연산이 필요한경우 typeof에 괄호 사용
console.log(typeof backtick);
console.log(typeof (backtick + double));

// 괄호를 안치면 1개까지만 가능함
console.log(typeof backtick + double);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = 123;
console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;
console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)
const isClick = false;
console.log(typeof isClick);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const object = new Object({ name: 'tom' }); // object constructor

const obj = {};
console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uuid');
crypto.randomUUID();

console.log(unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류
console.log(typeof null);
// Object

const user = {
  name: 'tiger', // 프로퍼티
  age: 25,
  alert1: function () {
    // normal function
  },
  alert2() {
    // consise method  consise:줄이다 축양하다
  },
  alert3: () => {
    // arrow function
  },
};

// Array

// function

// this
