/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

console.log(outside); // undefined
var outside = 'outer';

{
  console.log(outside); // 'outer'
  var inside = 'inner';
  console.log(inside); // 'inner'
}

console.log(inside); // 'inner'

// console.log(outside); // Parsing error: Identifier 'outside' has already been declared
// let outside = 'outer';

// {
//   console.log(outside);
//   let inside = 'inner';
//   console.log(inside);
// }

// console.log(inside); //'inside' is not defined.

// var는 변수의 중복 선언을 허용합니다
// var a = 5;
// console.log(a);
// var a = 10;
// console.log(a);
