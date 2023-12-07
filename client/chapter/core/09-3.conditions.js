/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침' -> '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심' -> '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁' -> '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤' -> '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */
// let thisTime;
// switch (thisTime) {
//   case MORNING:
//     console.log('디스코드를 켠다.');
//     break;

//   case LUNCH:
//     console.log('체력 보충을 위한 잠을 잔다.');
//     break;

//   case DINNER:
//     console.log('이듬 영상 강의를 시청한다.');
//     break;

//   case NIGHT:
//     console.log('팀원들과 수업 내용 공유한다.');
//     break;

//   case LATE_NIGHT:
//   case DAWN:
//     console.log('꿈속에서 배웠던 코드를 생각한다.');
//     break;
// }

thisTime = {
  MORNING: '디스코드를 켠다.',
  LUNCH: '체력 보충을 위한 잠을 잔다.',
  DINNER: '이듬 영상 강의를 시청한다.',
  NIGHT: '팀원들과 수업 내용 공유한다.',
  DAWN: '꿈속에서 배웠던 코드를 생각한다.',
  LATE_NIGHT: '꿈속에서 배웠던 코드를 생각한다.',
};

const result = (time) => {
  return thisTime[time];
};

console.log(result);

// let answer = parseInt(
//   prompt('요일 검색하려면 0~6 사이의 숫자를 입력해주세요.')
// );
// if (answer) {
//   switch (answer) {
//     case 0:
//       console.log('월');
//       break;
//     case 1:
//       console.log('화');
//       break;
//     case 2:
//       console.log('수');
//       break;
//     case 3:
//       console.log('목');
//       break;
//     case 4:
//       console.log('금');
//       break;
//     case 5:
//       console.log('토');
//       break;
//     case 6:
//       console.log('일');
//       break;
//     default:
//       break;
//   }
// } else {
//   answer = prompt('0~6 사이의 숫자를 다시 입력해주세요.');
// }

// function getDay(num){

//   const value = Math.floor( Math.random() * 7 );

//   switch (value) {
//     case 0: return '월';
//     case 1: return '화';
//     case 2: return '수';
//     case 3: return '목';
//     case 4: return '금';
//     case 5: return '토';
//     case 6: return '일';
//   }
// }

// const today = getDay() // 월 ~ 일

// console.log( today );

const days = ['월', '화', '수', '목', '금', '토', '일'];

function getRandom(n) {
  // 인덱스 0 ~ 6까지 랜덤으로 뽑는다
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  return days[num];
}

function weekend() {
  const today = getDay(getRandom(7));
  return today === '토' ? '토요일' : today === '일' ? '일요일' : '평일';
}

const today = getDay(getRandom(7)); // 월 ~ 일
const todayWeekend = weekend();

console.log('today: ', today);
console.log('todayWeekend: ', todayWeekend);

// const getDay = () => {
//   let answer = prompt('요일 검색하려면 0~6 사이의 숫자를 입력해주세요.');
//   if (!answer) return console.log('종료');
//   else if (!answer.match(/[0-6]/)) return alert('실패 ' + answer);
//   else return alert('성공');
// };

// getDay();
