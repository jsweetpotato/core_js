const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// let depth = 1;
// const iterate = (target) => {
//   for (let item of Object.values(target)) {
//     if (typeof item === 'object') {
//       iterate(item);
//       continue;
//     }
//     console.log(`${Array(depth).join('\t')}${item}`);
//   }
// };

// iterate(randomUser);

for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(5 - i) + '*'.repeat(i * 2 + 1));
}

// star 2
// let star = '*';
// let space = [' ', ' ', ' ', ' ', ' '];
// for (let i = 0; i < 5; i++) {
//   console.log(`${space.join('')} ${star}`);
//   space.pop();
//   star += star;
// }

// 정서린
function makeTree(num) {
  for (let i = num, j = 1; i > 0; i--, j += 2) {
    console.log(' '.repeat(i), '*'.repeat(j));
  }
}
makeTree(5);

// 반현지
let n = +prompt('몇 줄 트리를 만들겠습니까?');
let tree = '';

for (let i = 0; i < n; i++) {
  for (let j = n - i; j > 1; j--) {
    tree += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    tree += '*';
  }
  tree += '\n';
}

console.log(tree);

let input = 5;

// 경혜
// 방법1
for (let i = 1; i <= input; i++) {
  const spaces = ' '.repeat(input - i);
  const stars = '*'.repeat(2 * i - 1);
  console.log(spaces + stars);
}

// 방법2
let output = '';
for (let i = 1; i <= input; i++) {
  let floor = '';
  for (let j = 1; j <= input - i; j++) {
    floor += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    floor += '*';
  }
  output += floor + '\n';
}
console.log(output);

// 이정현
let starNum = 8;

for (let i = 0; i < starNum; i++) {
  for (let j = 0; j < starNum - i; j++) {
    tree += ' ';
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    tree += '*';
  }
  tree += '\n';
}
console.log(tree);

var lotto = [];

for (let i = 0; i < 5; i++) {
  lotto.push(Math.ceil(Math.random() * 45));
}
document.write(lotto);
