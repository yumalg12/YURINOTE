import { Routes, Route } from "react-router-dom";
import 'modern-css-reset';
import './App.css';
import Login from './pages/Login';
import Diary from './pages/Diary';
import New from './pages/New';
import DiaryView from './pages/DiaryView';
import Edit from './pages/Edit';
import Todo from './pages/Todo';

function App() {
  return (
          <div className="App">
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/diary" element={<Diary/>}/>
              <Route path="/diary/new" element={<New/>}/>
              <Route path="/diary/view/:id" element={<DiaryView/>}/>
              <Route path="/diary/edit/:id" element={<Edit/>}/>
              <Route path="/todo" element={<Todo/>}/>
            </Routes>
          </div>
  );
}

export default App;
