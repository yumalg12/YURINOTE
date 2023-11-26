import { useState, useRef } from 'react';
import Button from '../Common/Button';
import { getIcon } from '../../util.js';

const TodoItem = ({ id, content, isDone, createDate, onUpdate, onModify, onDelete }) => {
  const [isModifyVisible, setIsModifyVisible] = useState(false);
  const modifyRef = useRef(null);
  const savedRef = useRef(null);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickModify = () => {
    setIsModifyVisible(true);
  };

  const onModifySave = () => {
    setIsModifyVisible(false);
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
      <div className={`todo_content saved ${isModifyVisible ? 'hidden' : ''}`} ref={savedRef}>
        <div className="title_col"><p>{content}</p></div>
        <div className="btn_col">
          <img src={getIcon('modify')} onClick={onClickModify} />
          <img src={getIcon('delete')} onClick={onClickDelete} />
        </div>
      </div>
      <div className={`todo_content modify ${!isModifyVisible ? 'hidden' : ''}`} ref={modifyRef}>
        <div className="title_col"><input type="text" value={content} /></div>
        <div className="btn_col">
          <Button value={'저장'} onClick={onModifySave} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
