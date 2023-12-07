/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable : 열거 가능한 = 나열해서 볼 수 있느냐

// iterable : 반복 가능한 = 순환 돌릴 수 있느냐
// 반복 가능한 요소들은 for...of로 순환이 가능하다.
// String, Array

// array 같은 애들을 유사 배열(arrayLike)라 한다.
// NodeList, HTMLCollection
Object.prototype.nickName = 'tiger';

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
  // [Symbol.iterator]{...}
};

const str = '유사배열입니다.';

// for (const iterator of str) {
//   console.log(iterator);
// }

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

for (const iterator of languages) {
  let name = iterator.name;
  if (name === 'Java' && name.length < 5) break;
  console.table(iterator);
}

// 객체 => for...in => for...of 사용 권장, 성능이 더 좋음
// 배열 => for...of

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

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

// 객체의 키, 값 순환
// - for ~ in 문
for (const key in randomUser) {
  if (Object.prototype.hasOwnProperty.call(randomUser, key)) {
    const L1 = randomUser[key];
    console.log('L1: ', L1);
    if (typeof L1 === 'object') {
      for (let key in L1) {
        if (Object.prototype.hasOwnProperty.call(L1, key)) {
          const L2 = L1[key];
          console.log('\tL2: ', L2);
          if (typeof L2 === 'object') {
            for (let key in L2) {
              if (Object.prototype.hasOwnProperty.call(L2, key)) {
                const L3 = L2[key];
                console.log('\t\tL3: ', L3);
              }
            }
          }
        }
      }
    }
  }
}

for (let [key, value] of Object.entries(randomUser)) {
  console.table(key, value);
}
// - for ~ of 문
// - 성능 비교 진단
