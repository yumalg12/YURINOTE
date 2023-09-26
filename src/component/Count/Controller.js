import Button from "../Diary/Button";

const Controller = ({handleSetCount}) => {
    return (
        <div>
            <Button value={"-1"} type="" onClick={()=>handleSetCount(-1)}/>
            <Button value={"-10"} type="" onClick={()=>handleSetCount(-10)}/>
            <Button value={"-100"} type="" onClick={()=>handleSetCount(-100)}/>
            <Button value={"+100"} type="" onClick={()=>handleSetCount(+100)}/>
            <Button value={"+10"} type="" onClick={()=>handleSetCount(+10)}/>
            <Button value={"+1"} type="" onClick={()=>handleSetCount(+1)}/>
        </div>
    );
};

export default Controller;