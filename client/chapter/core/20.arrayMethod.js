/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

/* 요소 순환 ---------------------------- */

// forEach

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort
const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
    alt: '밝게 웃고있는 치킨집 사장님',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

const arr = [10, 100, 1000, 10_000];

const data = [
  { name: '지현', job: '간호사', age: 25 },
  { name: '호랑', job: '프로그래머', age: 27 },
  { name: '구멍', job: '가게', age: 30 },
];
// const reverseArray = arr.reverse();

// console.log( reverseArray );

/* 새로운 배열 반환 ------------------------ */

// concat
console.log(arr.concat(arr, [2, 3]));
// slice
console.log(arr.splice(1, 2, 'javascript', 'css', 'react'));
// toSorted
console.log(arr.toSorted((a, b) => a - b));
// toReversed
console.log(arr.toReversed()); // 원형 파괴 방지 2023
// toSpliced
console.log(arr.toSpliced(1, 2, 'javascript', 'css', 'react'));
// map
console.log(data.map(({ job }) => job));

const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

card.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

// 초기값을 설정하지 않으면 내부적으로 htmlCode에 toString 메서드가 실행돼서 [object Object] 다음에 태그가 이어붙여진다.
const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
