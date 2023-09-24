import "./Calendar.css";

const generateCalendar = (year, month) => {
    const today = new Date(year, month - 1);
    const startDate = new Date(year, month - 1, 1);
    
    let calendar = [];
    let weekArr = [];

    // 첫 주가 7일이 아닌 경우 빈 셀 채우기
    for (let i=0; i<startDate.getDay(); i++) {
        weekArr.push(<td key={`empty-${i}`}/>);
    }
    
    while (startDate.getMonth() === today.getMonth()) {
      weekArr.push(<td key={startDate.toString()}>{startDate.getDate()}</td>);
      
      if (startDate.getDay() === 6) { //6=토요일이 되면 다음 주차 시작
        calendar.push(<tr key={startDate.toString()}>{weekArr}</tr>);
        weekArr = [];
      }
      
      startDate.setDate(startDate.getDate() + 1);
     }
     
     // 마지막 주가 7일이 아닌 경우 빈 셀 채우기
     if (weekArr.length > 0){
         for(let i=weekArr.length; i<7; i++){
             weekArr.push(<td key={`empty-${i}`}/>);
         }
         calendar.push(<tr key={startDate.toString()}>{weekArr}</tr>);
     }

     return calendar;
}

const Calendar = ({ year, month }) => {

   return (
       <div className="Calendar">
           <table>
               <thead>
                   <tr>
                       <th>일</th> <th>월</th> <th>화</th> <th>수</th> <th>목</th> <th>금</th> <th>토</th>
                   </tr>
               </thead>

            <tbody>
                {generateCalendar(year, month)}
            </tbody>
           </table>

       </div>

   );
};

export default Calendar;
