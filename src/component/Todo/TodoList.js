import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoSearch from "./TodoSearch";

const TodoList = ({todo, onUpdate, onDelete, onEdit}) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearchResult = () => {
    return search === "" 
    ? todo 
    : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
  };

    return (<div className="TodoList">
    <div className="list_wrapper">
      {getSearchResult().map((it) => (
        <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit}/>))
      }
    </div>
    <TodoSearch
      search={search}
      onChangeSearch={onChangeSearch}
    />

    </div>)

};

export default TodoList;