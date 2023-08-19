import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

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
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
