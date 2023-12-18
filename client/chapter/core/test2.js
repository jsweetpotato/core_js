// 문제
// href에 ://가 포함되어 있어야 합니다.
// 하지만 http://internal.com으로 시작하지 않아야 합니다.

let link = document.querySelector('a');
let lists = document.querySelectorAll('ul a');
console.dir(lists);

for (let li of lists) {
  //  1. a 태그에 있는 href를 가져온다
  //  2. 조건문 만들기
  //     ://가 포함되면서, http://internal.com/test지 않을 때만,
  //     link.style.color = 'orange';
  const liLink = li.getAttribute('href');
  console.log(liLink);
  if (liLink.includes('://') && !liLink.startsWith('http://internal.com/')) {
    li.style.color = 'orange';
  }
}

// 추카추카
