/**
 * > test 명령어
 * $ npm test fn.describe.test
 *
 * > describe
 * 테스트끼리 묶어준다.
 *
 */

const fn = require("./fn");

// 실행순서 1
beforeAll(() => console.log("밖 beforeAll"));
// 실행순서 2, 6
beforeEach(() => console.log("밖 beforeEach"));
// 실행순서 4, 9
afterEach(() => console.log("밖 afterEach"));
// 실행순서 11
afterAll(() => console.log("밖 afterAll"));

// 실행순서 3
test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});

describe("내부 test 작업", () => {
  // 실행순서 5
  beforeAll(() => console.log("내부 beforeAll"));
  // 실행순서 6
  beforeEach(() => console.log("내부 beforeEach"));
  // 실행순서 8
  afterEach(() => console.log("내부 afterEach"));
  // 실행순서 10
  afterAll(() => console.log("내부 afterAll"));

  // 실행순서 7
  test("0 + 2 = 2", () => {
    expect(fn.add(0, 2)).toBe(2);
  });
});
