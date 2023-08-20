import "./Editor.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList, getFormattedDate } from "../util.js";
import Button from "./Button"
import EmotionItem from "./EmotionItem";

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
    const handleSubmit = () => {
        onSubmit(state);
    };
    const navigate = useNavigate();
    const handleOnGoBack = () => {
        navigate(-1);
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
            <h4>💗오늘의 날짜</h4>
            <div className="input_wrapper">
                <input type="date" value={state.date} onChange={handleChangeDate}/>
            </div>
        </div>
        
        <div className="editor_section">
            {/* 감정 */}
            <h4>💗오늘의 감정</h4>
            <div className="input_wrapper emotion_list_wrapper">
                {emotionList.map(e=><EmotionItem key={e.id} {...e} onClick={handleChangeEmotion}
                isSelected={state.emotionId === e.id}/>)}
            </div>
        </div>
        
        <div className="editor_section">
            <h4>💗오늘의 일기</h4>
            <div className="input_wrapper">
                <textarea placeholder="일기 내용 작성하기" rows={6} value={state.content} onChange={handleChangeContent}/>
            </div>
        </div>
        
        <div className="editor_section">
            <div className="editor_section button_section">
                <Button text="작성 취소" onClick={handleOnGoBack}/> <Button text="작성 완료" type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
        
    </div>
    );
};

export default Editor;