/**
 * > 테스트 명령어
 * $ npm test fn.mock.test.js
 */

const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test("10에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.results[0].value).toBe(11);
});

test("20에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.results[1].value).toBe(21);
});
test("30에서 1 증가한 값이 반환된다.", () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.results[2].value).toBe(31);
});

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});

test("정확히 세번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});

test("20을 전달 받았는가?", () => {
  expect(mockFn).toBeCalledWith(20);
});

test("마지막 함수에 30을 전달 받았는가?", () => {
  expect(mockFn).lastCalledWith(30);
});
