/**
 * > 테스트 명령어
 * $ npm fn.skip.test.js
 */
const fn = require("./fn");

let num = 0;

test("0 + 1 = 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test("0 + 2 = 2", () => {
  expect(fn.add(num, 2)).toBe(2);
});

test("0 + 3 = 3", () => {
  expect(fn.add(num, 3)).toBe(3);
});

// 에러 나는 코드
test.skip("0 + 4 = 4", () => {
  expect(fn.add(num, 4)).toBe(5);
});
