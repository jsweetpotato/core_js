/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생!!');
}

// first.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log('클릭했습니다.');
}

// first.addEventListener('click',handleClick);

// getNode('.second').addEventListener('click',()=>{
//   first.removeEventListener('click',handleClick)
// })

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = document.querySelector(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

// const remove = bindEvent('.first','click',handleClick);
// getNode('.second').addEventListener('click',remove);

// first.addEventListener('mousemove',handleClick)
// first.addEventListener('mouseleave',handleClick)

const ground = document.querySelector('.ground');
const ball = document.querySelector('#ball');
const size = window.getComputedStyle(ball).getPropertyValue('width');
console.log(ground.clientWidth);

function handleClickBall(e) {
  e.preventDefault();
  const { offsetX: x, offsetY: y } = e;
  // if (x > size * 0.5 || x + size * 0.5 > x) return;
  ball.style.transform = `translate(${x}px, ${y}px)`;
}

ground.addEventListener('mousemove', handleClickBall);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 사용 예시
function search() {
  // 검색 요청 처리
}

const debouncedSearch = debounce(search, 300); // 300ms 디바운스 지연 시간

// 이벤트 리스너에 적용
// input.addEventListener('input', debouncedSearch);

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
