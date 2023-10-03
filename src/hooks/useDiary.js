import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../pages/Diary.js";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        const matchDiary = data.find(e => String(e.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            alert("일기가 존재하지 않습니다.");
            navigator("/diary", {replace: true});
        }
    }, [id,data]);

    return diary;
};

export default useDiary;