import { useState, useRef, useEffect, useReducer } from "react";
import "../component/Todo/Todo.css";
import { setPageTitle, getFormattedDateKorean, getIcon } from "../util";
import Header from "../component/Common/Header";
import TodoEditor from "../component/Todo/TodoEditor";
import TodoList from "../component/Todo/TodoList";

function Todo() {
  useEffect(() => {
    setPageTitle("투두 체크보드");
  }, []);
  
  const idRef = useRef(1);
  
  const [data, dispatch] = useReducer(reducer, []);
  
  const storedTodo = [ ...JSON.parse(localStorage.getItem('todo')) ];
  console.log(storedTodo);
  const [todo, setTodo] = useState(storedTodo? storedTodo: []);
  
    function reducer(state, action) {
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
            const newState = state.map(e => String(e.id) === String(action.data.id)? {...action.data}: e);
            localStorage.setItem("todo", JSON.stringify(newState));
            return newState;
          }
          case "DELETE": {
            const newState = state.filter(e => String(e.id) !== String(action.targetId));
            localStorage.setItem("todo", JSON.stringify(newState));
            return newState;
          }
          default: {return state};
        }
      }

    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
        dispatch({ type: "CREATE", data: newItem });
    };

    const onUpdate = (targetID) => {
        setTodo(todo.map((it) => (it.id === targetID ? { ...it, isDone: !it.isDone } : it)));
    };

    const onEdit = (targetID) => {
        alert('개발 예정');
    }

    const onDelete = (targetID) => {
        setTodo(todo.filter((it) => it.id !== targetID));
    };

    return (
        <div>
            <Header title={"투두 체크보드"} />
            <div className="Todo">
                <div className="TodoDate">
                    <h2>오늘은{" "}
                        <span className="today">{getFormattedDateKorean(new Date())}<img src={getIcon('calendar')}/></span>
                    </h2>
                </div>
                <h4>Todo List</h4>
                <TodoEditor onCreate={onCreate} />
                <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} />
            </div>
        </div>
    );
}

export default Todo;
