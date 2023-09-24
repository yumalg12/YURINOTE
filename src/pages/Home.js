import { useSearchParams } from "react-router-dom";
import Button from "../component/Diary/Button";
import Header from "../component/Diary/Header";
import Calendar from "../component/Diary/Calendar";
import logo from "../img/heart.svg"

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));

    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    return <div>
        <Header
            title={year+"년 "+month+"월"}
            leftChild={<Button text={"<"} type="positive" onClick={() => {alert("<");}}/>}
            rightChild={<Button text={">"} type="positive" onClick={() => {alert(">");}}/>}
        />

        <Calendar
            year = {year}
            month = {month}
        />

        <hr/>

        
    </div>;
};

export default Home;