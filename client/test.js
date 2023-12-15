const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('nav');

list.forEach((li) => {
  li.addEventListener('mouseenter', (e) => {
    let currentDepth = e.target.lastElementChild;

    depth.forEach((item) => (item.style.height = 0));

    currentDepth.style.height = '100px';
  });
});

nav.addEventListener('mouseleave', () => {
  depth.forEach((item) => (item.style.height = 0));
});

/* global gsap */

/*
const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('nav');


list.forEach((li)=>{

  li.addEventListener('mouseenter',(e)=>{
    
    let currentDepth = e.target.lastElementChild;

    // depth.forEach(item =>  item.style.height = 0)
    gsap.to(depth,{height:0})
    
    // currentDepth.style.height = '100px'
    
    gsap.to(currentDepth,{height:100})
  })

})

gsap onUpdate() => 애니메이션 진행중
gsap onCompletete() => 에니메이션 끝나는거 

nav.addEventListener('mouseleave',()=>{
  

  // depth.forEach(item =>  item.style.height = 0)

  gsap.to(depth,{height:0})

})*/
