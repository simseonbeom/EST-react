import type { Note } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
import { ROUTES } from '../routes';
import './NoteDetailPage.css';

interface Props {
  noteId: number | null;
  note: Note | null;
  onChangeRoute: (nextRoute: string, pickNoteId: number) => void;
}

function NoteDetailPage({ noteId, note, onChangeRoute }: Props) {
  if (!noteId) {
    return <PrintError>노트를 찾을 수 없습니다.</PrintError>;
  }

  const handleBackToList = () => onChangeRoute(ROUTES.list, 0);

  // content는 HTML 문자열이라 dangerouslySetInnerHTML로 출력
  const createMarkup = () => {
    if (!note) return;
    return { __html: note.content };
  };

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>노트를 찾을 수 없습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>{note.expand?.user.name}</span>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </>
      )}
    </div>
  );
}
export default NoteDetailPage;
