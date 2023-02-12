import { render, screen } from "@testing-library/react";
import Mypage from "./Mypage";

test("유저가 없으면 로그인버튼과 문구를 보여준다.", () => {
  render(<Mypage />);
  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("Login");
});

test("유저가 있으면 환영문구를 보여준다.", () => {
  render(<Mypage user={{ name: "Kim" }} />);
  const txtEl = screen.getByText(/Kim님 환영합니다!/);
  expect(txtEl).toBeInTheDocument();
});

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<Mypage user={"Kim"} />);
  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("Login");
});
