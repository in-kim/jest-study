import Mypage from "./components/Mypage";

function App() {
  const user = {
    name: "Mike",
    age: 30,
  };
  return <Mypage user={user} />;
}

export default App;
