import { useNavigate } from "react-router-dom";
import { getEmotionImgById, getFormattedDateKorean } from "../../util.js";
import Button from "./Button";
import "./DiaryItem.css";
import "./EmotionItem.css";

const DiaryItem = ({ id, emotionId, content, date }) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    };
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    return (
    <div className="DiaryItem">
        <div className={["img_section", `EmotionItem_on_${emotionId}`].join(' ')}>
            <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)}/>
        </div>
        <div className="info_section" onClick={goDetail}>
            <label>{getFormattedDateKorean(date)} 
            <span>{new Date(date).toLocaleTimeString("ko-KR",{ hour: "2-digit", minute: "2-digit" })}</span></label>
            <p>{content}</p>
        </div>
        <div className="button_section">
            <Button onClick={goEdit} addSpan={true} value={"✏️"}/>
        </div>
    </div>);
};

export default DiaryItem;
