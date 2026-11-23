// import { useContext } from "react";
// import { UserContext } from "./UserContext";
import { useUserContext } from "@/hook/UserContext";
import { useTheme } from "./ThemeContext";

function GrandChild() {

  // const ctx = useContext(UserContext);
  // if(!ctx) return;
  // const {username, setUsername} = ctx;  

  const { username, setUsername } = useUserContext();
  const {theme, toggleTheme} = useTheme();

  console.log(theme);
  

  return (
    <div style={{ 
              background: theme.colors.background,
        color: theme.colors.text,
      border: "1px solid lightgray", padding: "10px", marginTop: "10px" }}>
      <h4>바뀐다44444</h4>
      <button type="button" onClick={toggleTheme}>CHANGE THEME</button>
      <p style={{margin:theme.spacing.md}}>
        안녕하세요, <strong>{username}</strong>님!
      </p>
      <button type="button" onClick={()=> setUsername('정은빈')}>사용자 변경</button>
    </div>
  );
}
export default GrandChild;