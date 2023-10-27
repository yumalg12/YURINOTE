import Button from "../Common/Button";
import { getIcon } from "../../util.js";

const TodoItem = ({id, content, isDone, createDate, onUpdate, onModify, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickModify = () => {
        let modifyTodo = document.querySelector('.modify');
        modifyTodo.style.display = 'grid';
        let savedTodo = document.querySelector('.saved');
        savedTodo.style.display = 'none';
      }
    
    const onModifySave = () => {
        let modifyTodo = document.querySelector('.modify');
        modifyTodo.style.display = 'none';
        let savedTodo = document.querySelector('.saved');
        savedTodo.style.display = 'grid';
        onModify(id, content);
    }

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
<div className="TodoItem">
    <div className="checkbox_col">
        <input type="checkbox" className="toggle" checked={isDone} onChange={onChangeCheckbox}/>
    </div>
    <div className="todo_content saved">
        <div className="title_col"><p>{content}</p></div>
        <div className="btn_col">
            <img src={getIcon('modify')} onClick={onClickModify}/>
            <img src={getIcon('delete')} onClick={onClickDelete}/>
        </div>
    </div>
    <div className="todo_content modify">
        <div className="title_col"><input type="text" value={content}/></div>
        <div className="btn_col">
            <Button value={'저장'} onClick={onModifySave}/>
        </div>
    </div>
</div>
    );
};

export default TodoItem;