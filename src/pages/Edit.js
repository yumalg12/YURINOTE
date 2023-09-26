import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDateKorean } from "../util.js";
import useDiary from "../hooks/useDiary";
import Header from "../component/Diary/Header";
import Button from "../component/Diary/Button";
import Editor from "../component/Diary/Editor";

const Edit = () => {
    const {id} = useParams();
    const data = useDiary(id);
    console.log(data);
    const navigate = useNavigate();

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
            onSubmit={() => {alert("수정 완료");}}
        />
        </div>)
    }
};

export default Edit;