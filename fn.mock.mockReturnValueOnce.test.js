/**
 * > 테스트 명령어
 * $ npm test fn.mock.mockReturnValueOnce.test.js
 */

const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("실행마다 값 다르게 return", () => {
  console.log(mockFn.mock.results);
  expect("dd").toBe("dd");
});
