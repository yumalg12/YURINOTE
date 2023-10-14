import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDate, setPageTitle } from "../util.js";
import { DiaryDispatchContext } from "../App.js";
import useDiary from "../hooks/useDiary";
import Header from "../component/Common/Header";
import Button from "../component/Common/Button";
import Editor from "../component/Diary/Editor";

const Edit = () => {
    useEffect(() => {
        setPageTitle("일기 수정");
    }, []);

    const navigate = useNavigate();
    const {id} = useParams();
    const data = useDiary(id);
    const goBack = () => {
        navigate(-1);
    }
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

    const onClickDelete = () => {
        if (window.confirm(`현재 일기를 지우시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)){
            onDelete(id);
            navigate('/diary',{ replace: true });
        };
    }
    
    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onUpdate(id, date, content, emotionId);
        navigate('/diary',{ replace: true });
    }

    if (!data) {
        return <div className="Loading">일기 로딩 중...</div>;
    } else {
        const { date, emotionId, content } = data;
        return (<div>
            <Header 
                title={"일기 고치기"} 
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