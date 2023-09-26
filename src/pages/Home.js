import { useSearchParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate  } from "../util";
import Button from "../component/Diary/Button";
import Header from "../component/Diary/Header";
import Calendar from "../component/Diary/Calendar";
import DiaryList from "../component/Diary/DiaryList";
import logo from "../img/heart.svg"

const Home = () => {
    //월 변경
    const [pivotDate, setPivotDate] = useState(new Date());
    let pivotYear = pivotDate.getFullYear();
    let pivotMonth = pivotDate.getMonth() + 1;
    let today = new Date();

    const headerTitle = `${pivotYear}년 ${pivotMonth}월`;

    const onIncreaseMonth = () => {
        if (pivotDate.getFullYear() === today.getFullYear() && pivotDate.getMonth() === today.getMonth()){
            alert("마지막 페이지입니다.");
        } else {
            setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
        }
    };
    
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    //일기 렌더링
    const data = useContext(DiaryStateContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data.length >= 1){
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(e => beginTimeStamp <= e.date && e.date <= endTimeStamp)
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);

    return <div>
        <Header
            title={headerTitle}
            leftChild={<Button value={"<"} type="positive" onClick={onDecreaseMonth}/>}
            rightChild={<Button value={">"} type="positive" onClick={onIncreaseMonth}/>}
        />

        <Calendar
            year = {pivotYear}
            month = {pivotMonth}
        />

        <DiaryList
            data = { filteredData }
        />
    </div>;
};

export default Home;