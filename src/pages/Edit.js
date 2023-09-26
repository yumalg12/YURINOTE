import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDate, getFormattedDateKorean } from "../util.js";
import { DiaryDispatchContext } from "../App.js";
import useDiary from "../hooks/useDiary";
import Header from "../component/Diary/Header";
import Button from "../component/Diary/Button";
import Editor from "../component/Diary/Editor";

const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const data = useDiary(id);
    const goBack = () => {
        navigate(-1);
    }
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

    const onClickDelete = () => {
        if (window.confirm(`${getFormattedDate(data.date)} 일자의 일기를 지우시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)){
            onDelete(id);
            navigate('/',{ replace: true });
        };
    }
    
    const onSubmit = (data) => {
        if (window.confirm(`${getFormattedDate(data.date)} 일자의 일기를 현재 내용으로 수정하시겠습니까?`)){
            const { date, content, emotionId } = data;
            onUpdate(id, date, content, emotionId);
            navigate('/',{ replace: true });
        };
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else {
        const { date, emotionId, content } = data;
        return (<div>
            <Header 
                title={getFormattedDateKorean(date)} 
                leftChild={<Button value={'< 뒤로 가기'} type={'positive'} onClick={goBack}/>}
                rightChild={<Button value={'일기 삭제'} type={'warning'} onClick={onClickDelete}/>}
            />

            <Editor 
                initData={data}
                onSubmit={onSubmit}
            />
            </div>)
    }
};

export default Edit;