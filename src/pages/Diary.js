import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useReducer, useRef } from "react";
import { getMonthRangeByDate, setPageTitle } from "../util";
import Button from "../component/Common/Button";
import Header from "../component/Common/Header";
import Calendar from "../component/Diary/Calendar";
import DiaryList from "../component/Diary/DiaryList";
import New from './New';
import DiaryView from './DiaryView';
import Edit from './Edit';

function diaryReducer(state, action) {
    switch (action.type) {
        case "INIT": {
            return action.data;
        }
        case "CREATE": {
            const newState = [action.data, ...state];
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        case "UPDATE": {
            const newState = state.map((e) => (String(e.id) === String(action.data.id) ? { ...action.data } : e));
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        case "DELETE": {
            const newState = state.filter((e) => String(e.id) !== String(action.targetId));
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        default: {
            return state;
        }
    }
}

const Diary = () => {
    useEffect(() => {
        setPageTitle("일기장");
    }, []);

    const [data, dispatch] = useReducer(diaryReducer, []);
    const idRef = useRef(0);

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const rawData = localStorage.getItem("diary");
        if (!rawData) {
            setIsDataLoaded(true);
            return;
        }
        const localData = JSON.parse(rawData);
        if (localData.length === 0) {
            setIsDataLoaded(true);
            return;
        }
        localData.sort((a, b) => Number(b.id) - Number(a.id));
        idRef.current = localData[0].id + 1;
        dispatch({ type: "INIT", data: localData });
        setIsDataLoaded(true);
    }, []);

    const onCreate = (date, content, emotionId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
                date: new Date(date).getTime(),
                content,
                emotionId,
            },
        });
        idRef.current += 1;
    };

    const onUpdate = (targetId, date, content, emotionId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: +targetId,
                date: new Date(date).getTime(),
                content,
                emotionId,
            },
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    };

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

    //일기 렌더링
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(data.filter((e) => beginTimeStamp <= e.date && e.date <= endTimeStamp));
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);

    if (!isDataLoaded) {
        return <div className="Loading">데이터를 불러오는 중입니다.</div>;
    } else {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <Header
                        title={headerTitle}
                        leftChild={<Button value={"<"} type="positive" onClick={onDecreaseMonth} />}
                        rightChild={<Button value={">"} type="positive" onClick={onIncreaseMonth} />}
                    />

                    <Calendar year={pivotYear} month={pivotMonth} />

                    <DiaryList data={filteredData} />

                    <New/>
                    <DiaryView/>
                    <Edit/>
   
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

export default Diary;