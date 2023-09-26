import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDateKorean, setPageTitle } from "../util.js";
import useDiary from "../hooks/useDiary";
import Header from "../component/Diary/Header";
import Viewer from "../component/Diary/Viewer";
import Button from "../component/Diary/Button";

const Diary = () => {
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
        navigate(`/edit/${id}`);
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else {
        const { date, emotionId, content } = data;
        return (<div>
            <Header 
                title={getFormattedDateKorean(date)} 
                leftChild={<Button value={'< 뒤로 가기'} type={'positive'} onClick={goBack}/>}
                rightChild={<Button value={'수정하기'} type={''} onClick={goEdit}/>}
            />
        <Viewer content={content} emotionId={emotionId}/></div>)
    }
};

export default Diary;