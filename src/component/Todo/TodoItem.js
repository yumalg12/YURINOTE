import Button from "../Diary/Button";

const TodoItem = ({id, content, isDone, createDate, onUpdate, onEdit, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickEdit = () => {
        onEdit(id);
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
        <Button onClick={onClickEdit} addSpan={true} value={"✏️"}/>
        <Button onClick={onClickDelete} addSpan={true} value={"🗑️"}/>
    </div>
</div>
    );
};

export default TodoItem;