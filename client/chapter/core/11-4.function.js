// 메모이제이션
const memoFibo = (n) => {
  if (n <= 0) return 0;
  if (n <= 2) return 1;

  if (memoFibo.cache[n]) {
    return memoFibo.cache[n];
  } else {
    return (memoFibo.cache[n] = memoFibo(n - 1) + memoFibo(n - 2));
  }
};

memoFibo.cache = {};

let cssCOde = /** css */ `
  .dialog{

  }
`;

let cssMap = {};
