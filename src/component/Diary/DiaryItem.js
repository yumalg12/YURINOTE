import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getEmotionImgById, getFormattedDate, getIcon } from "../../util.js";
import Button from "../Common/Button";
import "./DiaryItem.css";
import "./EmotionItem.css";

const DiaryItem = ({ id, emotionId, content, date }) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/view/${id}`);
    };
    const goEdit = () => {
        navigate(`/diary/edit/${id}`);
    }

    return (
    <div className="DiaryItem">
        <div className={["img_section", `EmotionItem_on_${emotionId}`].join(' ')}>
            <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)}/>
        </div>
        <div className="info_section" onClick={goDetail}>
            <label>{getFormattedDate(date, '모월모일모요일')} 
            <span>{new Date(date).toLocaleTimeString("ko-KR",{ hour: "2-digit", minute: "2-digit" })}</span></label>
            <p>{content}</p>
        </div>
        <div className="button_section">
            <img src={getIcon('modify')} onClick={goEdit}/>
        </div>
    </div>);
};

export default React.memo(DiaryItem);
