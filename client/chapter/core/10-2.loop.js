/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇번 반복 하시겠습니까?', 0);

// do {
//   console.log(repeat);

//   if (repeat < 0) {
//     console.log('최초실행!');
//     break;
//   }

//   repeat--;
// } while (repeat);
// do ~ while 문 (순환)

// let i = 0;

// do {
//   console.log(i++);

//   if (repeat < i) {
//     console.log('최초실행!');
//     break;
//   }
// } while (i <= repeat);
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
// let count = 0;

// do {
//   if (count >= 10) {
//     break;
//   }

//   console.log(++count);
// } while (repeat--);

let second = document.querySelector('.second');

// console.log(first.nextSibling.nodeType === 3);
// console.log(first.nextElementSibling);
// first.nextSibling;

// do {
//   first = first.nextSibling;
//   console.log(first);
// } while (first.nodeType !== document.ELEMENT_NODE);

// function next(node) {
//   do {
//     node = node.nextSibling;
//   } while (node.nodeType !== 1);
//   return node;
// }

// const second = next(first);

const prev = (node) => {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
};

const first = prev(second);

console.log(first);
