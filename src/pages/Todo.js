import { useState, useRef, useEffect, useReducer } from "react";
import "../component/Todo/Todo.css";
import { setPageTitle, getFormattedDate, getIcon } from "../util";
import Header from "../component/Common/Header";
import TodoEditor from "../component/Todo/TodoEditor";
import TodoList from "../component/Todo/TodoList";

function Todo() {
  useEffect(() => {
    setPageTitle("투두 체크보드");
  }, []);

  const idRef = useRef(0);
  const [todoList, dispatch] = useReducer(todoReducer, []);
  
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const rawData = localStorage.getItem("todo");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    idRef.current = localData[0].id + 1;
    dispatch({ type: "INIT", data: localData });
    setIsDataLoaded(true);
  }, []);

  function todoReducer(state, action) {
    switch (action.type) {
      case "INIT": {
        return action.data;
      }
      case "CREATE": {
        const newState = [action.data, ...state];
        localStorage.setItem("todo", JSON.stringify(newState));
        return newState;
      }
      case "UPDATE": {
        const newState = state.map((e) => (String(e.id) === String(action.id) ? { ...e, isDone: !e.isDone } : e));
        localStorage.setItem("todo", JSON.stringify(newState));
        return newState;
      }
      case "MODIFY": {
        const newState = state.map((e) => (String(e.id) === String(action.id)) ? { ...e, content: action.content } : e);
        localStorage.setItem("todo", JSON.stringify(newState));
        return newState;
      }
      case "DELETE": {
        const newState = state.filter((e) => String(e.id) !== String(action.id));
        localStorage.setItem("todo", JSON.stringify(newState));
        return newState;
      }
      default:
        return state;
    }
  }
  

  const onCreate = (content) => {
    dispatch({
        type: "CREATE",
        data: {
            note: sessionStorage.getItem('currentNote'),
            category: 'all',
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        },
    });
    idRef.current += 1;
   };

   const onUpdate = (targetID) => {
     dispatch({ type: "UPDATE", id: targetID });
   };

   const onModify = (targetID, content) => {
    alert(targetID,content);
     dispatch({ type: "MODIFY", id: targetID, content });
   };

   const onDelete = (targetID) => {
     dispatch({ type: "DELETE", id: targetID });
    };

    if (!isDataLoaded){
      return (<div className="Loading">데이터를 불러오는 중입니다.</div>);
    } else { return (
     <>
       <Header title={"투두 체크보드"} />
       <div className="Todo">
         <div className="TodoDate">
           <h4>
             {"Todo List - "}
             <span className="today">
               {getFormattedDate(new Date(), '모월모일모요일')}
             </span>
               <img src={getIcon('calendar')} />
           </h4>
         </div>
         <TodoEditor onCreate={onCreate} />
         <TodoList todo={todoList.filter(e=>e.note === sessionStorage.getItem('currentNote'))} onUpdate={onUpdate} onDelete={onDelete} onModify={onModify} />
       </div>
     </>
   );
    }
}

export default Todo;
