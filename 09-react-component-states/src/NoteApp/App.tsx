import { useState } from 'react';
import { getNoteList } from './api/getNote';
import NoteListPage from './pages/NoteListPage';
import NoteDetailPage from './pages/NoteDetailPage';
import { ROUTES } from './routes';
import './NoteApp.css';

function App() {
  const [routeInfo, setRouteInfo] = useState<{
    route: string;
    noteId: number | null;
  }>({
    route: 'list',
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

  // 파생 상태: list + noteId만 있으면 계산 가능 → 따로 상태로 만들지 않는다
  const selectedNote = list.find((item) => item.id === routeInfo.noteId) ?? null;

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
  }
}
export default App;
