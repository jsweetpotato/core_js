let movieMessage = prompt('그거 영화 봤오?');

// 조건문
if (movieMessage === 'yes') {
  alert('어 그거 재밌더라');
} else {
  if (prompt('그럼 나랑 보러갈래?') === 'yes') {
    alert('와 너무 설렌다 같이 보자!');
  } else {
    alert('나도 별로');
  }
}

// 삼항 연산자
movieMessage === 'yes'
  ? alert('어 그거 재밌더라')
  : prompt('그럼 나랑 보러갈래?') === 'yes'
    ? alert('와 너무 설렌다 같이 보자!')
    : alert('나도 별로');
