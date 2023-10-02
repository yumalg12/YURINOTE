import { getIcon } from "../../util";

const TodoSearch = ({ search, onChangeSearch }) => {
  return (
    <div className="TodoSearch">
    <img src={getIcon('search')}/>
    <input className="searchbar" 
    value={search}
    onChange={onChangeSearch} 
    placeholder="검색어를 입력하십시오"/>
    </div>
  );
}

export default TodoSearch;