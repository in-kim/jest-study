const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("xx");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
      // throw new Error('서버 에러 ... '); 에러 발생 시키기
    }, 3000);
  },
};

module.exports = fn;
