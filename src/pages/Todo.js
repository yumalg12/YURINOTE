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
        const newItem = {
          id: idRef.current,
          content: action.content,
          isDone: false,
          createDate: new Date().getTime(),
        };
        localStorage.setItem("todo", JSON.stringify([newItem, ...state]));
        idRef.current += 1;
        return [newItem, ...state];
      }
      case "UPDATE": {
        const updatedState = state.map((item) =>
          item.id === action.id ? { ...item, isDone: !item.isDone } : item
        );
        localStorage.setItem("todo", JSON.stringify(updatedState));
        return updatedState;
      }
      case "EDIT": {
        const updatedState = state.map((item) =>
          item.id === action.id ? { ...item, content: action.content } : item
        );
        localStorage.setItem("todo", JSON.stringify(updatedState));
        return updatedState;
      }
      case "DELETE": {
         const newState = state.filter(e => String(e.id) !== String(action.id));
         localStorage.setItem("todo", JSON.stringify(newState));
         return newState;
       }
       default:
         return state;
     }
   }

   const onCreate = (content) => {
     dispatch({ type: "CREATE", content });
   };

   const onUpdate = (targetID) => {
     dispatch({ type: "UPDATE", id: targetID });
   };

   const onEdit = (targetID, content) => {
     dispatch({ type: "EDIT", id: targetID, content });
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
           <h2>
             오늘은{" "}
             <span className="today">
               {getFormattedDate(new Date(), '모월모일모요일')}
               <img src={getIcon('calendar')} />
             </span>
           </h2>
         </div>
         <h4>Todo List</h4>
         <TodoEditor onCreate={onCreate} />
         <TodoList todo={todoList} onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} />
       </div>
     </>
   );
    }
}

export default Todo;
