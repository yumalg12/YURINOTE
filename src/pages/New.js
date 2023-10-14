import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App.js";
import { setPageTitle } from "../util";
import Button from "../component/Common/Button";
import Header from "../component/Common/Header";
import Editor from "../component/Diary/Editor";

const New = () => {
    useEffect(() => {
        setPageTitle("일기 쓰기");
      }, []);
      
    const navigate = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);
    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onCreate(date, content, emotionId);
        navigate('/diary',{ replace: true });
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
                emotionId: 8,
                content: "",
            }}
            onSubmit={onSubmit}
        />
    </div>;
};

export default New;