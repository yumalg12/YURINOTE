import './NoteSelect.css';
import NoteList from './NoteList';
import logo from "../../img/yurinote-logo.svg";
import { getIcon } from "../../util.js";

const NoteSelect = () => {
  return (
    <div className="NoteSelect">
        <img className='logo' src={logo} alt="로고" />
        <label><img className='icon' src={getIcon('pencil')}/>나의 오늘을 기록할 다이어리를 선택하세요</label>
        <NoteList/>
    </div>
  );
};

export default NoteSelect;
