import "./Editor.css";
import { useState } from "react";
import { getFormattedDate } from "../util.js";

const Editor = ({ initData, onSubmit }) => {
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };
    return (<div className="Editor">
        <div className="editor_section">
            <h4>오늘의 날짜</h4>
            <div className="input_wrapper">
                <input type="date" value={state.date} onChange={handleChangeDate}/>
            </div>
        </div>
        
        <div className="editor_section">
            {/* 감정 */}
            <h4>오늘의 감정</h4>
        </div>
        
        <div className="editor_section">
            <h4>오늘의 일기</h4>
            <div className="input_wrapper">
                <textarea placeholder="일기 내용 작성하기" rows={10} cols={20} value={state.content} onChange={handleChangeContent}/>
            </div>
        </div>
        
        <div className="editor_section">
            {/* 버튼 */}
        </div>
        
    </div>
    );
};

export default Editor;