import { screen, render } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Mike", "Jane"];

  test("잠시후 제목이 나타난다.", async () => {
    render(<UserList users={users} />);
    screen.debug();
    const titleElement = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        timeout: 3100,
      }
    );
    screen.debug();
    expect(titleElement).toBeInTheDocument();
  });

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("li는 3개가 나오나?", () => {
    render(<UserList users={users} />);
    const liElements = screen.getAllByRole("listitem");
    expect(liElements).toHaveLength(users.length);
  });
});
