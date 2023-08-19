import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    return <div>
        <Header
            title={"유맑음의 일기장"}
            leftChild={
                <Button text={"긍정"} type="positive" onClick={() => {alert("Positive");}}/>
            }
            rightChild={
                <Button text={"부정"} type="negative" onClick={() => {alert("Negative");}}/>
            }
            >
        </Header>
        <Editor/>
    </div>;
};

export default Home;