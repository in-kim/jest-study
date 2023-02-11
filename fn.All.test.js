/**
 * > npm 명령어
 * $ npm test fn.All.test.js
 *
 * > beforeAll
 * 테스트 전 한번 실행
 *
 * > afterAll
 * 테스트 후 한번 실행
 */

const fn = require("./fn");

let user;

beforeAll(async () => {
  user = await fn.connectUserDB();
});

afterAll(() => {
  user = fn.disconnectDB();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("나이는 30", () => {
  expect(user.age).toBe(30);
});

test("성별은 남성", () => {
  expect(user.gender).toBe("male");
});
