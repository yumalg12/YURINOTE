import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ data }) => {
    // 정렬 select box
    const [sortType, setSortType] = useState("latest");

    const sortOptions = [
        { value: "latest", name: "최신 순" },
        { value: "oldest", name: "오래된 순" },
    ];

    const onChangeSortType = e => {
        setSortType(e.target.value);
    };

    // 정렬 기능
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const compare = (a,b) => {
            return sortType === "latest"? Number(b.date) - Number(a.date): Number(a.date) - Number(b.date)
        }
        const copyList = JSON.parse(JSON.stringify(data));
        copyList.sort(compare);
        setSortedData(copyList);
    }, [data, sortType]);

    // 버튼 링크
    const navigate = new useNavigate();

    const onClickNew = () => {
        navigate("/new");
    }


    return (
    <div className="DiaryList">
        <div className="menu_wrapper">
            <div className="left_col">
                <select value={sortType} onChange={onChangeSortType}>{sortOptions.map((e, i)=><option key={i} value={e.value}>{e.name}</option>)}</select>
            </div>
            <div className="right_col">
                <Button 
                    type={"negative"}
                    value={"새 일기 쓰기"}
                    onClick={onClickNew}
                />
            </div>
        </div>

        <div className="list_wrapper">
            {sortedData.map(e=>(<DiaryItem key={e.id} {...e}/>))}
        </div>
    </div>
)};

export default DiaryList;