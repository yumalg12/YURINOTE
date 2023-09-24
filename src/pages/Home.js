import { useSearchParams } from "react-router-dom";
import Button from "../component/Diary/Button";
import Header from "../component/Diary/Header";
import Calendar from "../component/Diary/Calendar";
import logo from "../img/heart.svg"

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));

    const dateObj = new Date();
    const thisYear = dateObj.getFullYear();
    const thisMonth = dateObj.getMonth() + 1;
    const thisDay = dateObj.getDate();

    return <div>
        <Header
            title={thisYear+"년 "+thisMonth+"월"}
            leftChild={<Button text={"<"} type="positive" onClick={() => {alert(thisMonth-1);}}/>}
            rightChild={<Button text={">"} type="positive" onClick={() => {alert(thisMonth+1);}}/>}
        />

        <Calendar
            year = {thisYear}
            month = {thisMonth}
        />

    </div>;
};

export default Home;