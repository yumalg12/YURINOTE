import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { setPageTitle } from "../util.js";
import useDiary from "../hooks/useDiary.js";
import Header from "../component/Common/Header.js";
import Viewer from "../component/Diary/Viewer.js";
import Button from "../component/Common/Button.js";

const DiaryView = () => {
    useEffect(() => {
        setPageTitle("일기장");
    }, []);

    const {id} = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    const goEdit = () => {
        navigate(`/diary/edit/${id}`);
    }

    if (!data) {
        return <div className="DiaryView Loading">일기를 불러오고 있습니다...</div>;
    } else {
        const { date, emotionId, content } = data;
        return (<div>
            <Header 
                title={'일기 보기'} 
                leftChild={<Button value={'< 뒤로 가기'} type={'positive'} onClick={goBack}/>}
                rightChild={<Button value={'수정하기'} type={''} onClick={goEdit}/>}
            />
        <Viewer date={date} content={content} emotionId={emotionId}/></div>)
    }
};

export default DiaryView;