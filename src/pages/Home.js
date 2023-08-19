import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import logo from "../img/heart.svg"

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    return <div>
        <Header
              title={
                <>
                <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
                내 일기장
                <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
                </>
              }
            leftChild={
                <Button text={"긍정"} type="positive" onClick={() => {alert("Positive");}}/>
            }
            rightChild={
                <Button text={"부정"} type="negative" onClick={() => {alert("Negative");}}/>
            }
            >
                
        </Header>
        <Editor onSubmit={() => {
        alert("작성완료");
    }}/>
    </div>;
};

export default Home;