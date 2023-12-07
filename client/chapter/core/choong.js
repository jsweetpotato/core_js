// ?? = 'undefined' 거나 'null' 이면 ??의 연산된 true 값을 반환한다.

// let user = {
//   male: ['jhon'],
//   //female
// };

let user = null;
console.log(user || 'choong');

let height = 0;
// height = 0 이면, ||를 사용했을 때 falsy 값으로 계산돼서 뒤의 값이 결과값으로 출력된다.
console.log(`${height || 10}px`);

// height가 0이여도 falsy값으로 계산이 아닌 null과 undefined 즉 nullish 값만 평가하기 때문에 0이 반환된다.
console.log(`${height ?? 10}px`);

// 문제
// user 객체에는 male이 있다.
// 1. male이 존재하면 값을 검색한다
// 2. 그 값이 undefined나 null이면 'john'을 할당한다.

user = {
  male: undefined,
};

let userInfo = { gender: 'male', name: null };
console.log(userInfo.gender || 'male');
console.log(userInfo.name ?? 'john');

// user?.male ?? 'john';
user.male ?? (user.male = 'john');
