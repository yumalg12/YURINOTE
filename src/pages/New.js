import { useNavigate } from "react-router-dom";
import Button from "../component/Diary/Button";
import Header from "../component/Diary/Header";
import Editor from "../component/Diary/Editor";
import logo from "../img/heart.svg"

const New = () => {
    const navigate = useNavigate();
    
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
        onSubmit={() => {alert("작성완료");}}
        />
    </div>;
};

export default New;