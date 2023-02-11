/**
 * > 테스트 명령어
 * $ npm test fn.apiMoking.test.js
 */

const fn = require("./fn");
jest.mock("./fn");
fn.createUser.mockReturnValue({ name: "Mike" });

test("유저 생성 테스트", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});
