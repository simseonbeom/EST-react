import type { Note } from "../api/getNote";
import NoteForm from "../components/NoteForm";
import { ROUTES } from "../routes";



interface Props {
  onChangeRoute: (nextRoute:string,pickNoteId:number)=> void;
  noteId:number | null;
  // [수정] App의 list 상태에서 찾은 노트를 prop으로 받음
  note: Note | null;
  onDelete:(willDeleteNoteId:number)=>void;
  onEdit:(willDeleteNote:Note)=>void;
}




function NoteEditPage({onChangeRoute,noteId, note, onDelete, onEdit}:Props) {
  if(!noteId) return;
  const handleBackLink = () => onChangeRoute(ROUTES.list,0);

  return (
    <div className="NoteEditPage">
      {
        note && (
          <>
            <h2>노트 편집</h2>
            <NoteForm 
              onBackLink={handleBackLink}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
              mode="edit"
              // mode="create"
            />
          </>
        )
      }
    </div>
  )
}
export default NoteEditPage