import type { Note } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';


interface Props {
  list: Note[];
  onChangeRoute: (nextRoute: string, pickNoteId: number) => void;
}

function NoteListPage({list, onChangeRoute}:Props) {

  const handleClick = () => {}

  return (
    <div className='NoteListPage'>
      <NoteList list={list} onChangeRoute={onChangeRoute}/>
      <a href="#create-note" className="createNoteLink" onClick={handleClick}>
        노트 작성
      </a>
    </div>
  )
}
export default NoteListPage