import { useState } from "react";
import { getNoteList, type Note } from "./api/getNote";
import NoteListPage from "./pages/NoteListPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { ROUTES } from "./routes";
import "./NoteApp.css";
import NoteEditPage from "./pages/NoteEditPage";

function App() {
  /* 
  1. NoteListPage 화면 랜더링
  2. 라우팅 설정
  3. 라우팅 핸들러 만들기
  4. NoteListPage에 라우팅 핸들러 전달 
  5. NoteDetailPage 화면 랜더링
  6. BackLink만들고 라우팅 전달 

  
   */

  const [routeInfo, setRouteInfo] = useState<{
    route: string;
    noteId: number | null;
  }>({
    route: "list",
    noteId: null,
  });

  const [list, setList] = useState(() => getNoteList());

  const handleChangeRoute = (nextRoute: string, pickNoteId: number) => {
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId ? pickNoteId : routeInfo.noteId,
    });
  };

    // 노트 수정 기능
  const handleEditNote = (willEditNote:Note) => {
    const nextList = list.map((item) =>
      item.id === willEditNote.id ? willEditNote : item
    );

    setList(nextList);
  };
  
    // 노트 삭제 기능
  const handleDeleteNote = (willDeleteNoteId:number) => {
    const nextList = list.filter((item) => item.id !== willDeleteNoteId);
    setList(nextList);
  };


  // 파생 상태: list + noteId만 있으면 계산 가능 → 따로 상태로 만들지 않는다
  const selectedNote =
    list.find((item) => item.id === routeInfo.noteId) ?? null;




  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return (
        <NoteDetailPage
          noteId={routeInfo.noteId}
          note={selectedNote}
          onChangeRoute={handleChangeRoute}
        />
      );

    case ROUTES.edit:
      return (
        <NoteEditPage
          noteId={routeInfo.noteId}
          note={selectedNote}
          onChangeRoute={handleChangeRoute}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />
      );
  }
}
export default App;
