/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let day = null;
let weekend;

console.log(day + '');
console.log(weekend + '');

// boolean
let isClicked = false;
console.log(isClicked + '');

// dot log
console.log('isClicked: ', isClicked);

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));
// 암시적 형변환
console.log(+num);
console.log(num / 1);
console.log(num * 1);

// numeric string => 숫자같은 문자
const width = '105.345px';
console.log(Number(width));

// pixel 값은 제거한 숫자만 형변환
console.log(parseInt(width));
console.log(parseFloat(width));

// 스타일 처리
// parseInt(getComputedStyle($0)['fontsize']) + 1 + 'px';

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
console.log(Boolean(friend));
console.log(Boolean(''));

alert(2 + 2 + +'1');

'' + 1 + 0; // 10
'' - 1 + 0; // -1
true + false; // 1
6 / '3'; // 2
'2' * '3'; // 6
4 + 5 + 'px'; // 9px
'$' + 4 + 5; // $45
'4' - 2; // 2
'4px' - 2; // NaN
7 / 0; // Infinity
'  -9  ' + 5; // '  -9  5'
'  -9  ' - 5; // -14
null + 1; // 1
undefined + 1; // NaN
' \t \n' - 2; //-2
