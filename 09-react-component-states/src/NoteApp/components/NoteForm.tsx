import { useId, useState } from 'react';
import type { Note } from '../api/getNote';
import { getUser, getUserList } from '../api/getUser';
import './NoteForm.css'
import { convertHTMLToText, convertTextToHTMLString } from '@/utils/convertTextToHTMLString';


interface Props {
  onBackLink: () => void;
  mode: "create" | "edit";
  onCreate?: (newNoteItem: Note) => void;
  newNoteId?: number;
  note?:Note;
  onDelete?:(willDeleteNoteId:number)=>void;
  onEdit?:(willDeleteNote:Note)=>void;
}



const userList = getUserList();

interface FormData {
  title: string;
  content: string;
  userId: number;

}

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

function NoteForm({onCreate,onBackLink,newNoteId,mode,note, onDelete,onEdit}:Props) {
  

const [formData, setFormData] = useState<FormData>(() => {
  if (mode === "edit" && note) {
    return {
      title: note.title,
      content: convertHTMLToText(note.content), // HTML → textarea용 텍스트
      userId: note.userId,
    };
  }
  return { title: "", content: "", userId: 0 };
});


const titleId = useId();
const contentId = useId();
const userId = useId();

const handleCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();                          // 페이지 새로고침 막기
  const { title, content, userId } = formData;

  const newUserId = Number(userId);           // 문자열 → 숫자
  const user = getUser(newUserId);
  if (!user) return;                         // 작성자 미선택 방어
  if (!newNoteId) return;

  const newNote = {
    id: newNoteId,
    title: title.trim(),
    content: convertTextToHTMLString(content), // 텍스트 → HTML
    userId: newUserId,
    createdAt: "",
    updatedAt: "",
    expand: { user },
  };

  onCreate?.(newNote);
  onBackLink();
};


const handleUpdateFormData = (e: FormEvent) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  console.log(formData);
  
};

const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (note && onEdit) {
    const willEditNote = {
      ...note,
      title: formData.title.trim(),
      content: convertTextToHTMLString(formData.content),
      userId: Number(formData.userId),
    };
    onEdit(willEditNote);
    onBackLink();
  }
};

const handleDelete = () => {
  if (note && onDelete) {
    onDelete(note.id);
    onBackLink();
  }
};

const isCreateMode = mode === "create";

  return (
      <form
        className="NoteForm"
        onSubmit={isCreateMode ? handleCreateNote : handleEdit}
        onReset={() => setFormData({ title: "", content: "", userId: 0 })}
      >
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input type="text" value={formData && formData.title} id={titleId} name="title"  onChange={handleUpdateFormData}/>
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea  value={formData && formData.content} id={contentId} name="content"  onChange={handleUpdateFormData}/>
      </div>

      {
        isCreateMode && (
          <div className="formControl">
            <label htmlFor={userId}>작성자</label>
            <select name={userId} value={formData && formData.userId} id={userId} onChange={handleUpdateFormData}>
              <option value={0}>작성자 선택</option>
              {
                userList.map((user)=>(
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))
              }
            </select>
          </div>
        )
      }
      <div className="buttonGroup">
        <button type="submit">{isCreateMode ? '추가' : '수정'}</button>
        {isCreateMode
          ? <button type="reset">초기화</button>
          : <button type="button" onClick={handleDelete} >삭제</button>}
      </div>
    </form>
  )
}
export default NoteForm