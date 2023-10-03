import { Routes, Route } from "react-router-dom";
import React, { useReducer, useRef, useEffect, useState } from "react";
import "modern-css-reset";
import "./App.css";
import Login from "./pages/Login";
import Diary from "./pages/Diary";
import New from "./pages/New";
import DiaryView from "./pages/DiaryView";
import Edit from "./pages/Edit";
import Todo from "./pages/Todo";

function reducer(state, action) {
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

function App() {
    const [data, dispatch] = useReducer(reducer, []);
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

    if (!isDataLoaded) {
        return <div className="Loading">데이터를 불러오는 중입니다.</div>;
    } else {
        return (
            <div className="App">
                <DiaryStateContext.Provider value={data}>
                    <DiaryDispatchContext.Provider
                        value={{
                            onCreate,
                            onUpdate,
                            onDelete,
                        }}
                    >
                        <Routes>
                            <Route path="/diary" element={<Diary />} />
                            <Route path="/diary/new" element={<New />} />
                            <Route path="/diary/view/:id" element={<DiaryView />} />
                            <Route path="/diary/edit/:id" element={<Edit />} />
                        </Routes>
                    </DiaryDispatchContext.Provider>
                </DiaryStateContext.Provider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            </div>
        );
    }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
export default App;
