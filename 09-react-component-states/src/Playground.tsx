import UserPage from "@/pages/users/UserPage"
import NoteApp from "@/NoteApp/App"



function Playground() {
  return (
    <div style={styles}>
      {/* <UserPage /> */}
      <NoteApp></NoteApp>
      
      
    </div>
  )
}
export default Playground


const styles:React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};