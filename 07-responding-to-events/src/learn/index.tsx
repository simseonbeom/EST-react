import NavContents from "./NavContents"
import View from "./View"


// 컴포넌트 네임스페이스 패턴
// Compound Component
function Learn() {
  return (
    <div className="Learn">
      <NavContents />
      <View.HTMLvsJSX />
      <View.RespondingToEvents />
    
    </div>
  )
}
export default Learn