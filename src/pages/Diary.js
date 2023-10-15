import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setPageTitle } from "../util";
import Button from "../component/Common/Button";
import Header from "../component/Common/Header";
import Calendar from "../component/Diary/Calendar";
import DiaryList from "../component/Diary/DiaryList";

const Diary = () => {
    useEffect(() => {
        setPageTitle("일기장");
    }, []);

    //월 변경
    const [pivotDate, setPivotDate] = useState(new Date());
    let pivotYear = pivotDate.getFullYear();
    let pivotMonth = pivotDate.getMonth() + 1;
    let today = new Date();

    const headerTitle = `${pivotYear}년 ${pivotMonth}월`;

    const onIncreaseMonth = () => {
        if (pivotDate.getFullYear() === today.getFullYear() && pivotDate.getMonth() === today.getMonth()) {
            alert("마지막 페이지입니다.");
        } else {
            setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
        }
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    const onGoToday = () => {
        setPivotDate(new Date());
    }

    //일기 렌더링
    const data = useContext(DiaryStateContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(e => beginTimeStamp <= e.date && e.date <= endTimeStamp)
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);

    return <>
            <Header
                title={"감정 일기장"}
                rightChild={<Button value={"Today"} type="positive" onClick={onGoToday} />}
            />

            <Calendar
                year = {pivotYear}
                month = {pivotMonth}
                leftChild={<Button value={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button value={">"} onClick={onIncreaseMonth} />}
            />

            <DiaryList
                data = { filteredData }
            />
        </>;
};

export default Diary;