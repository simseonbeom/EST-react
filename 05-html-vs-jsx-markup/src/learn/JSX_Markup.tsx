import ConditionalRendering from "./ConditionalRendering";
import DataBinding from "./DataBinding"
import * as learnData from '@/data/learn';
import ConditionalDisplay from "./ConditionalDisplay";



function JSX_Markup() {
  
  const {statusMessage, imageType, isShowReactImage} = learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessage} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowImage={isShowReactImage}/>
    </dl>
  )
}
export default JSX_Markup
