import { useState, useRef, useEffect } from 'react';
import '../component/Todo/Todo.css';
import { setPageTitle } from "../util";
import Header from "../component/Diary/Header";
import logo from "../img/heart.svg"
import TodoDate from '../component/Todo/TodoDate';
import TodoEditor from '../component/Todo/TodoEditor';
import TodoList from '../component/Todo/TodoList';

const mockTodo = [
  {
    id: 0,
    isDone: true,
    content: "첫 투두리스트",
    createDate: new Date().getTime(),
  },
];

function Todo() {
  useEffect(() => {
    setPageTitle("투두리스트");
  }, []);

  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(1);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetID) => {
    setTodo(
      todo.map((it) => it.id === targetID ? { ...it, isDone: !it.isDone } : it)
    );
  }

  const onDelete = (targetID) => {
    setTodo(todo.filter((it) => it.id !== targetID));
  }

  return (
    <div>
      <Header
        title={"데일리 투두"}
        leftChild={
          <>
            <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
          </>
        }
        rightChild={
          <>
            <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
          </>
        }
      >

      </Header>
      <div className="Todo">
        <TodoDate />
        <TodoEditor onCreate={onCreate} />
        <TodoList
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete} />
      </div>
    </div>
  );
}

export default Todo;
