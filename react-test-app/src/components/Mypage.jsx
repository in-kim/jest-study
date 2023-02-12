export default function Mypage({ user }) {
  return user?.name ? (
    <div>{user.name}님 환영합니다!</div>
  ) : (
    <div>
      로그인을 해주세요.
      <button>Login</button>
    </div>
  );
}
