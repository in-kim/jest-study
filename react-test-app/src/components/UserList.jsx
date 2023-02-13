import { useEffect, useState } from "react";

export default function UserList({ users }) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 3000);
  }, []);
  return (
    <>
      {showTitle && <h1>사용자 목록</h1>}

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}
