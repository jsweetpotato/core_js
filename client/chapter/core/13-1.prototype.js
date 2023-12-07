const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

// tiger.__proto__ = animal

const 백두산호랑이 = {
  color: 'white',
  __proto__: tiger,
};

// console.dir(백두산호랑이);

// 생성자 함수

// function button() {}

// function button2() {
//   return 'a';
// }

// button(); // 함수

// const a = new button2(); // 생성자 함수 -> 무조건 객체를 반환, 즉 객체가 아닌건 반환이 안된다.

// 요즘엔 많이 사용하지 않음
function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  // prototyp(instance)
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다.`;
  };
}

// static
Tiger.bark = function () {
  return '어흥!';
};

const 한라산호랑이 = new Tiger('포동이');
const 금강산호랑이 = new Tiger();

console.table(한라산호랑이);

function sum(a, b, c) {
  console.log(this);
}

sum.call('안녕', 1, 2, 3); // 바로 실행
// apply
// bind
