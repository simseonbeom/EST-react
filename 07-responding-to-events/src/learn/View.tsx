import { useState } from "react";
import Headline from "./Headline";
import EventHandlerProp from "./responding-to-events/EventHandlerProp";
import EventPropagation from "./responding-to-events/EventPropagation";
import EventWithSideEffects from "./responding-to-events/EventWithSideEffects";


function RespondingToEvents(){
  const [text, setText] = useState("");

  let message = ''
  const updateMessage = (add: string): void => {
    message += add;
    console.log(message);
  };



  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />
      <form 
        action="/?submitted"
        onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          const form = e.currentTarget;
          const input = form.elements.namedItem('username') as HTMLInputElement;
          const value = input.value;

          setText(value);
          input.value = "";
          
        }}
      
      >
        
        <input type="text" name="username" aria-label="사용자 이름" placeholder="심선범" />{" "}
        <button type="submit">보내기</button>
        <div>
          <output>{text}</output>
          <p>{message}</p>
        </div>
      </form>
      <EventHandlerProp onPrintMessage={updateMessage}/>
      <EventPropagation />
      <EventWithSideEffects />
    </div>
  )
}


function HTMLvsJSX() {
  
  return (
    <div className="ViewHTMLvsJSX" hidden>
      <Headline />
      <hr />
      {/* <JSX_Markup /> */}
      <hr />
    </div>
  );
}






function View() {
  return (
    <div></div>
  )
}
export default View


View.HTMLvsJSX = HTMLvsJSX;

View.RespondingToEvents = RespondingToEvents;