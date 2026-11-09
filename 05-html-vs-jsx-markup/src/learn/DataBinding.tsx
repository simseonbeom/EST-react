import type { JSX } from "react/jsx-runtime"
import { getRandom } from "../utils/getRandom";


interface Prop {
  statusMessages: StateMessage[];
}

function DataBinding({ statusMessages }:Prop):JSX.Element {

  console.log(statusMessages);
  
  const statusMessage = statusMessages[getRandom(statusMessages.length)];

  return (
    <>
      <dt>데이터 바인딩 (data binding)</dt>
      <dd>
        <p>상태 메시지를 연결해 화면에 출력합니다.</p>
        <span className="status">{statusMessage}</span>
      </dd>
    </>
  )
}
export default DataBinding