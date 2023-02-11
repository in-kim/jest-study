/**
 * > npm 명령어
 * $ npm test fn.base.test.js
 */

const fn = require("./fn");

test("0.1 + 0.2 = 0.3", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

test("Hello world에 h라는 글자가 있나?", () => {
  expect("Hello world").toMatch(/h/i); // i를 추가하여 대소문자 모두 포함
});

test("에러가 발생하나요?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});

test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }
  fn.getName(callback);
});

test("3초 후 받아오는 나이", () => {
  // resolve then test
  // return fn.getAge().then((age) => {
  //   expect(age).toBe(30);
  // });

  // resolve test
  return expect(fn.getAge()).resolves.toBe(30);
});

test("3초 후 에러가 난다.", () => {
  // reject catch test
  // return fn.delayThrowError().catch((error) => {
  //   expect(error).toMatch("error");
  // });
  return expect(fn.delayThrowError()).rejects.toMatch("error");
});

test("async await 3초 후 받아오는 나이", async () => {
  // const age = await fn.getAge();
  // expect(age).toBe(30);

  await expect(fn.getAge()).resolves.toBe(30);
});
