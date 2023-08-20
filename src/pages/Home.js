import { useSearchParams } from "react-router-dom";
import Button from "../component/Diary/Button";
import Header from "../component/Diary/Header";
import Editor from "../component/Diary/Editor";
import logo from "../img/heart.svg"

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    return <div>
        <Header
            title={"데일리 다이어리"}
            leftChild={
                <>
                <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
                <Button text={"긍정"} type="positive" onClick={() => {alert("Positive");}}/>
                </>
            }
            rightChild={
                <>
                <Button text={"부정"} type="negative" onClick={() => {alert("Negative");}}/>
                <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
                </>
            }
            >
                
        </Header>

        <Editor 
        initData={{
            date: new Date().getTime(),
            emotionId: 3,
            content: "",
        }}
        onSubmit={() => {alert("작성완료");}}
        />
    </div>;
};

export default Home;