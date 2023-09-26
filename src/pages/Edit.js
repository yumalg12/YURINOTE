import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDateKorean } from "../util.js";
import { DiaryDispatchContext } from "../App.js";
import useDiary from "../hooks/useDiary";
import Header from "../component/Diary/Header";
import Button from "../component/Diary/Button";
import Editor from "../component/Diary/Editor";

const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const data = useDiary(id);
    const { onUpdate } = useContext(DiaryDispatchContext);
    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onUpdate(date, content, emotionId);
        console.log(data);
        navigate('/',{ replace: true });
    }
    const goBack = () => {
        navigate(-1);
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else {
        const { date, emotionId, content } = data;
        return (<div>
            <Header 
                title={getFormattedDateKorean(date)} 
                leftChild={<Button value={'< 뒤로 가기'} type={'positive'} onClick={goBack}/>}
            />

        <Editor 
            initData={data}
            onSubmit={onSubmit}
        />
        </div>)
    }
};

export default Edit;