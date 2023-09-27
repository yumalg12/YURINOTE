import { getFormattedDateKorean } from "../../util.js";

const TodoDate = () => {
    return (<div className="TodoDate">
    <h2>오늘은 <span className="today">{getFormattedDateKorean(new Date())}{'📆'}</span></h2>
    </div>);
};

export default TodoDate;