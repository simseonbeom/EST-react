import ConditionalRendering from "./ConditionalRendering";
import DataBinding from "./DataBinding"
import * as learnData from '@/data/learn';
import ConditionalDisplay from "./ConditionalDisplay";
import RenderList from "./RenderList";
import JSXAttributes from "./JSXAttributes";
import RenderableValues from "./RenderableValues";
import LookupRendering from "./LookupRendering";



function JSX_Markup() {
  
  const {statusMessage, imageType, isShowReactImage, reactLibrary, statusMessagesWithID, emptyStatusMessages} = learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessage} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowImage={isShowReactImage}/>
      <RenderList reactLibrary={reactLibrary} items={statusMessagesWithID}/>

      {/* 보충 1. HTML vs JSX 속성 차이 */}
      <JSXAttributes />
      {/* 보충 2. JSX 가 렌더링하는 값 / 렌더링하지 않는 값 */}
      <RenderableValues items={emptyStatusMessages} />
      {/* 보충 3. switch → 객체 매핑(lookup table) */}
      <LookupRendering imageType={imageType} />
    </dl>
  )
}

export default JSX_Markup
