import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import { ROUTES } from "../routes";



interface Props {
  list: Note[];
  onChangeRoute: (nextRoute: string, pickNoteId: number) => void;
}



function NoteList({list, onChangeRoute}:Props) {

    // 함수를 반환하는 함수: 클릭된 노트의 id를 기억해 둔 이벤트 핸들러를 만든다
  const handleClick = (pickNoteId: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.detail, pickNoteId);
  };

  
  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {
          list.map((item)=>{
            const slug = `#${convertSlug(item.title)}` 
            return (
           
            <li key={item.id}>
              <a href={slug} onClick={handleClick(item.id)}>{item.title}</a>
            </li>
          )
          })
        }
      </ul>
    </div>
  )
}
export default NoteList