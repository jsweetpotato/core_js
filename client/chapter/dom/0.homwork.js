// querySelector
const button = document.querySelector('.menu-button');
const mene = document.querySelector('.menu');
console.log(button);
// html의 모든 요소들은 객체로 구성돼있음

const handleMenu = (e) => {
  e.preventDefault();
  mene.classList.toggle('is-active');
};

// eventListner
button.addEventListener('click', handleMenu);

// Node.addEvent...

// preventDefualt도 구조분해할당으로 받아올 수 있나요? 아니오

let isOpend = false;

// function handleMenu2(e) {
//   e.preventDefault();

//   // 메뉴에게 is-active 클래스를 넣어준다.

//   // 메뉴에게 클래스를 넣어준다 is-active

//   if (!isOpend) {
//     menu.classList.add('is-active');

//     gsap.from('li', {
//       x: 30,
//       opacity: 0,
//       stagger: 0.2,
//       onComplete() {
//         console.log('end');
//       },
//     });
//   } else {
//     menu.classList.remove('is-active');

//     gsap.set('li', { x: 0, opacity: 1 });
//   }

//   isOpend = !isOpend;

//   // menu.classList.toggle('is-active')
//   // menu.classList.remove('is-active')
// }

button.addEventListener('click', handleMenu);

// Node.addEvent...

// classList

// preventDefault
