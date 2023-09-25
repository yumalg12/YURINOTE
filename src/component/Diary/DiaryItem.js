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



    return (
    <div className="DiaryItem">
        <div className={["img_section", `EmotionItem_on_${emotionId}`].join(' ')}>
            <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)}/>
        </div>
        <div className="info_section" onClick={goDetail}>{date}{content}</div>
        <div className="button_section"><Button addSpan={true} value={"✏️"}/></div>
    </div>);
};

export default DiaryItem;
