import React, { useState, useEffect } from "react";
import "./Calendar.css";

const generateCalendar = (year, month, emotionId) => {
    const inputDate = new Date(year, month - 1);
    const startDate = new Date(year, month - 1, 1);

    let calendar = [];
    let weekArr = [];

    // 첫 주가 7일이 아닌 경우 빈 셀 채우기
    for (let i = 0; i < startDate.getDay(); i++) {
        weekArr.push({ day: null });
    }

    while (startDate.getMonth() === inputDate.getMonth()) {
        weekArr.push({
            day: startDate.getDate(),
            emotionId: emotionId,
        });

        if (startDate.getDay() === 6) {
            //토요일(=6) 이 되면 다음 주차 시작
            calendar.push(weekArr);
            // console.log(weekArr);
            weekArr = [];
        }

        startDate.setDate(startDate.getDate() + 1);
    }

    // 마지막 주가 7일이 아닌 경우 빈 셀 채우기
    if (weekArr.length > 0) {
        for (let i = weekArr.length; i < 7; i++) {
            weekArr.push({ day: null });
        }
        calendar.push(weekArr);
    }

    return calendar;
};

const Calendar = ({ year, month, leftChild, rightChild }) => {
    const [calendarData, setCalendarData] = useState([]);
    const [today, setToday] = useState(new Date().toDateString());

    useEffect(() => {
        setCalendarData(generateCalendar(year, month));
    }, [year, month]);

    return (
        <>
        <h3>{year}년 {month}월</h3>
        <div id="Calendar" className="Calendar">
                        <div className="header_left">{leftChild}</div>

            <table>
                <thead>
                    <tr>
                        <th>일</th> <th>월</th> <th>화</th> <th>수</th> <th>목</th>
                        <th>금</th> <th>토</th>
                    </tr>
                </thead>
                <tbody>
                    {calendarData.map((week, i) => (
                        <tr key={i}>
                            {week.map((theDay, j) =>
                                theDay.day
                                ? (<td key={j} className={new Date(year, month - 1, theDay.day).toDateString() === today ? "today" : undefined}>{theDay.day}</td>)
                                : (<td key={j}></td>)
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="header_right">{rightChild}</div>

        </div>
                                </>
    );
};

export default Calendar;
