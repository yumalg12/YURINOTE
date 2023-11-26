import { useState, useRef } from 'react';
import Button from '../Common/Button';
import { getIcon } from '../../util.js';

const TodoItem = ({ id, content: initialContent, isDone, createDate, onUpdate, onModify, onDelete }) => {
    const [content, setContent] = useState(initialContent);
    const [isVisible, setIsVisible] = useState(false);

  const modifyRef = useRef(null);
  const savedRef = useRef(null);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickModify = () => {
    setIsVisible(true);
  };

  const onModifySave = () => {
    setIsVisible(false);
    let content = document.getElementById("newContent_"+id).value;
    onModify(id, content);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" className="toggle" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className={`todo_content saved ${isVisible ? 'hidden' : ''}`} ref={savedRef}>
        <div className="title_col"><p>{content}</p></div>
        <div className="btn_col">
          <img src={getIcon('modify')} onClick={onClickModify} />
          <img src={getIcon('delete')} onClick={onClickDelete} />
        </div>
      </div>
      <div className={`todo_content modify ${!isVisible ? 'hidden' : ''}`} ref={modifyRef}>
        <div className="title_col">
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} id={"newContent_"+id}/>
        </div>
        <div className="btn_col">
          <Button value={'저장'} onClick={onModifySave} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
