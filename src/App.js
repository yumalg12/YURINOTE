import { Routes, Route, Link } from "react-router-dom";
import React, { useReducer, useRef, useEffect, useState } from "react";
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Todo from './pages/Todo';
import Count from './pages/Count';

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map(it => String(it.id) === String(action.data.id)? {...action.data}: it)
    }
    case "DELETE": {
      return state.filter(it => String(it.id) !== String(action.targetId))
    }
    case "INIT": {
      return action.data;
    }
    default: {return state};
  }
}

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emotionId: 3,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emotionId: 5,
  },
]

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime,
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  }

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime,
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
    idRef.current += 1;
  }

  if (!isDataLoaded){
    return (<div className="initLoading"><p>데이터를 불러오는 중입니다.</p></div>);
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value = {{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
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
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/count" element={<Count/>}/>
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
  );
}
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
export default App;
