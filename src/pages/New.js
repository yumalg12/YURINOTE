import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App.js";
import logo from "../img/heart.svg"
import Button from "../component/Diary/Button";
import Header from "../component/Diary/Header";
import Editor from "../component/Diary/Editor";

const New = () => {
    const navigate = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);
    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onCreate(date, content, emotionId);
        navigate('/',{ replace: true });
    }
    
    const goBack = () => {
        navigate(-1);
    }
    
    return <div>
        <Header
            title={"새 일기 쓰기"}
            leftChild={<Button value={'< 뒤로 가기'} type={'positive'} onClick={goBack}/>}
        />

        <Editor 
            initData={{
                date: new Date().getTime(),
                emotionId: 1,
                content: "",
            }}
            onSubmit={onSubmit}
        />
    </div>;
};

export default New;