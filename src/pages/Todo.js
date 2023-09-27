import { useState, useRef, useEffect } from "react";
import "../component/Todo/Todo.css";
import { setPageTitle, getFormattedDateKorean } from "../util";
import Header from "../component/Common/Header";
import TodoEditor from "../component/Todo/TodoEditor";
import TodoList from "../component/Todo/TodoList";

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
        setTodo(todo.map((it) => (it.id === targetID ? { ...it, isDone: !it.isDone } : it)));
    };

    const onDelete = (targetID) => {
        setTodo(todo.filter((it) => it.id !== targetID));
    };

    return (
        <div>
            <Header title={"데일리 투두"} />
            <div className="Todo">
                <div className="TodoDate">
                    <h2>오늘은{" "}
                        <span className="today">{getFormattedDateKorean(new Date())}{"📆"}</span>
                    </h2>
                </div>
                <h4>Todo List</h4>
                <TodoEditor onCreate={onCreate} />
                <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default Todo;
