import { isObject } from '../../lib/utils/typeOf.js';

/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;
authUser = {
  uid: 'user-id-aszxcmklqwe!@#123',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);


//
Object.prototype.SIGN = true;

for (const key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

// 객체 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
console.log(keyList);

// 객체의 value만을 모아놓은 배열
let valueList = Object.values(authUser);
console.log(valueList);

// 구식 브라우저용
function getPropertiesList(object) {
  let result = [];

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

const result = getPropertiesList(authUser);
console.log(result);



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone = '010-0000-0000') {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

// function createUser(name, age, phone = '010-0000-0000') {
//   return {name,age,[calculateProperty]: phone};
// }

const user = createUser('tiger', '35');

// 프로퍼티 포함 여부 확인



// 프로퍼티 나열



// 프로퍼티 제거(remove) or 삭제(delete)
// function isObject(data) {
//   return (
//     Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
//   );
// }

function removeProperty(object, key) {
  if (isObject(object)) {
    object[key] = null;
  }
}

function deleteProperty(object, key) {
  if (isObject(object)) {
    delete object[key];
  }
}

removeProperty(authUser, 'name');



// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = { name, email, authorization, isLogin }
// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

// 중요!!!!!!!!!!!!!!
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const arr = [10, 100, 1000, 10000];

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];
// const a4 = arr[3];

const [a1, a2, a3, a4] = arr;
const [a, ...d] = arr;

for(let [key,value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
}

const [first, second, third] = document.querySelectorAll('span');

const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
}

let total = 0;

for (let [key, value] of Object.entries(salaries)) {
  total += value;
}
console.log(total);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 객체는 순서가 중요하지 않음
const { 이정현, 김지수:kim, 박수양, 장효진, 이경화:le = '500' } = salaries;

console.log(kim)

const test = {
  testA: {
    testB: {
      testC: {
        value:10
      }
    }
  }
}

const {value:testValue } = test.testA.testB.testC;

console.log(testValue)



const data = {
  userName:'tiger',
  age:40,
  job:'강사',
  gender:'male'
}



// function getUser(object){
//   const {userName:u} = object;
//   // u = 'tiger';
//   // console.log(u);
// }


// getUser( data )

function createUserData(obj){

  console.log( obj );

  const {userName,age,job,gender = 'male'} = obj;

  // return {
  //   userName: obj.userName,
  //   age: obj.age,
  //   job: obj.job,
  //   gender: 'male'
  // }

  return {
    userName,
    age,
    job,
    gender
  }
}


const user1 = createUserData({
  userName:'tiger',
  age:40,
  job:'developer'
})


const html = /* html */ `
  <div>
    <h1>Title</h1>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
`
