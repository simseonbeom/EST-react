

function NavContents() {


  const handleClickFirstLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // 사이드 이펙트(부수 효과) 처리 함수
    // 사이드 이펙트: 리액트 렌더링 프로세스와 연관이 없는 것을 처리
    // console.log('이벤트 응답');
    const firstLink = document.querySelector('[href="#jsx-markup"]') as HTMLAnchorElement;
    firstLink.dataset.element = 'jsx-markup';
    console.log('hit');

  }

  const handleClickLastLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const lastLink = document.querySelector('[href="#responding-to-events"]') as HTMLAnchorElement;
    lastLink.dataset.element = 'responding-to-events';
    
  }

  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup" onClick={handleClickFirstLink}>
        JSX 마크업
      </a>
       <a href="#responding-to-events" onClick={handleClickLastLink}>이벤트 응답</a>
    </nav>
  )
}
export default NavContents