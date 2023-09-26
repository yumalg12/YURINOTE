import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../../util";
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
    const getFormattedDateKorean = (date) => {
        const dateObj = new Date(date);
        const dayArr = ['일','월','화','수','목','금','토'];
        return `${dateObj.getMonth()+1}월 ${dateObj.getDate()}일 ${dayArr[dateObj.getDay()]}요일`;
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
