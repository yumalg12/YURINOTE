import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Todo from './pages/Todo';
import Count from './pages/Count';

function App() {
  return (
    <div className="App">
      <div className="TempMenus">
        <Link to={"/"}>Home </Link>
        <span>/</span>
        <Link to={"/new"}>New </Link>
        <span>/</span>
        <Link to={"/diary"}>Diary </Link>
        <span>/</span>
        <Link to={"/edit"}>Edit</Link>
        <span>/</span>
        <Link to={"/todo"}>Todo</Link>
        <span>/</span>
        <Link to={"/count"}>Count</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/count" element={<Count/>}/>
      </Routes>
    </div>
  );
}

export default App;
