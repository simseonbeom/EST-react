import './BackLink.css';

interface Props {
  onClick: () => void;
}

function BackLink({ onClick }: Props) {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    // 아이콘만 있는 링크라 스크린 리더용 이름(aria-label)을 붙이고, 장식용 svg는 숨김
    <a href="#back" className="BackLink" onClick={handleBack} aria-label="목록으로 돌아가기">
      <svg aria-hidden="true" width="16px" height="16px" viewBox="0 0 24 24" strokeWidth={1} fill="none">
        <path
          d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
          stroke="#fff"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
export default BackLink;
