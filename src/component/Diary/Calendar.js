import "./Calendar.css";

const generateCalendar = (year, month) => {
    const date = new Date(year, month - 1);
    const firstDay = new Date(year, month - 1, 1).getDay();
    
    let calendarArr = [];
    let weekArr = [];

    let currentDate = new Date(year, month - 1, 1);

    // 첫 주의 시작 요일까지 빈 셀로 채우기
    for (let i=0; i<firstDay; i++) {
        weekArr.push(<td key={`empty-${i}`} />);
    }
    
    while (currentDate.getMonth() === date.getMonth()) {
      weekArr.push(<td key={currentDate.toString()}>{currentDate.getDate()}</td>);
      
      if (currentDate.getDay() === 6) {
        calendarArr.push(<tr key={currentDate.toString()}>{weekArr}</tr>);
        weekArr = [];
      }
      
      currentDate.setDate(currentDate.getDate() + 1);
     }
     
     // 마지막 주가 완전한 행이 아닌 경우 빈 셀로 채우기
     if (weekArr.length > 0){
         for(let i=weekArr.length; i<7; i++){
             weekArr.push(<td key={`empty-${i}`} className="empty"/>);
         }
         calendarArr.push(<tr key={currentDate.toString()}>{weekArr}</tr>);
     }

     return calendarArr;
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

               {generateCalendar(year, month)}
           </table>

       </div>

   );
};

export default Calendar;
