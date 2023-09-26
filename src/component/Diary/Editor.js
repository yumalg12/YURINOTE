import "./Editor.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList, getFormattedDate } from "../../util.js";
import Button from "./Button"
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
    const [state, setState] = useState({
        date: getFormattedDate(new Date(initData.date)),
        emotionId: initData.emotionId.value,
        content: initData.content,
    });
    console.log('Editor',initData);
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
    const handleSubmit = () => {
        onSubmit(state);
    };
    const navigate = useNavigate();
    const reset = () => {
        navigate(0);
    };
    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    };
    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        };
    }, [initData]);

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
            <div className="input_wrapper emotion_list_wrapper">
                {emotionList.map(e=><EmotionItem key={e.id} {...e} onClick={handleChangeEmotion}
                isSelected={state.emotionId === e.id}/>)}
            </div>
        </div>
        
        <div className="editor_section">
            <h4>오늘의 일기</h4>
            <div className="input_wrapper">
                <textarea placeholder="일기 내용 작성하기" rows={6} value={state.content} onChange={handleChangeContent}/>
            </div>
        </div>
        
        <div className="editor_section">
            <div className="editor_section button_section">
                <Button value="내용 초기화" onClick={reset}/>  <Button value="일기 저장" type={"negative"} onClick={handleSubmit}/>
            </div>
        </div>
        
    </div>
    );
};

export default Editor;