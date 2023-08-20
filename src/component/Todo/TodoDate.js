const TodoDate = () => {
    return (<div className="TodoDate">
    <h2>오늘은 📆 <span className="today">{new Date().toDateString()}</span></h2>
    </div>);

};

export default TodoDate;