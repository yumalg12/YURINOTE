import Button from "../Common/Button";
import { getIcon } from "../../util.js";

const TodoItem = ({id, content, isDone, createDate, onUpdate, onEdit, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickEdit = () => {
        onEdit(id, content);
    }

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
<div className="TodoItem">
    <div className="checkbox_col">
        <input type="checkbox" className="toggle" checked={isDone} onChange={onChangeCheckbox}/>
    </div>
    <div className="title_col">{content}</div>
    <div className="btn_col">
        <img src={getIcon('modify')} onClick={onClickEdit}/>
        <img src={getIcon('delete')} onClick={onClickDelete}/>
    </div>
</div>
    );
};

export default TodoItem;