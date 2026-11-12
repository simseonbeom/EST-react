import { Fragment } from "react/jsx-runtime";


interface Props {
  reactLibrary: ReactLibrary;
  items: StatusMessageObject[];
}



function RenderList({ reactLibrary, items }: Props) {


  const demoListUsingStatement = [];

  for (const item of items) {
    demoListUsingStatement.push(<li key={item.id}>{item.message}</li>);
  }


  const demoList = items.map((item) => {
    return <li key={item.id}>{item.message}</li>;
  });

    const renderDemoList = () =>
    items.map(({ id, message }) => {
      return <li key={id}>{message}</li>;
    });



    const renderDefinitionList = (data:ReactLibrary) => {
    const definitionItems = Object.entries(data).map(([key,value])=>(
      <Fragment key={key}>
        <dt>{key}</dt>
        <dd>{value}</dd>
      </Fragment>
    ))
    return <dl className="reactLibrary">{definitionItems}</dl>

  }

return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <ul>
      
        </ul>
        <hr />
        <ul>{demoListUsingStatement}</ul>
        <hr />
        <ul>{demoList}</ul>
        <hr />
        <ul>{renderDemoList()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
        {/* [수정] <li> 가 <ul>/<ol> 없이 <dd> 에 바로 들어가 잘못된 HTML 구조(스크린 리더가 목록으로 인식 못함) → <ul> 로 감쌈 */}
        <ul>
          {items.toReversed().map((item, index) => (
            <li key={item?.id ?? index}>{item.message}</li>
          ))}
        </ul>
      </dd>
         <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        {renderDefinitionList(reactLibrary)}
      </dd>
    </>
  );
}
export default RenderList