import { routes } from "@/router/router";
import S from "./Header.module.css";
import NavLink from "../NavLink";
import { useAuth } from "../auth/AuthProvider";

function Header() {
  const { isAuth, user } = useAuth();

  // 로그인하면 숨길 메뉴
  const hideWhenLoggedIn = ["로그인", "회원가입"];

  const visibleRoutes = routes.filter(
    ({ title }) => !(isAuth && hideWhenLoggedIn.includes(title)),
  );

  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        {user && <p className={S.greeting}>{user.nickname}님 반갑습니다 😄</p>}
        <ul>
          {visibleRoutes.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
