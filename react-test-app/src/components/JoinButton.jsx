export default function JoinButton({ age }) {
  return (
    <>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? (
        <h3 style={{ color: "red" }}>19세 이상만 가입할 수 있습니다.</h3>
      ) : (
        <h3 style={{ color: "white" }}>가입 할 수 있습니다.</h3>
      )}
    </>
  );
}
