import { useRef, useState } from "react";
import Button from "../Common/Button";
import { getIcon } from "../../util.js";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if (!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        };
    };

    return (<div className="TodoEditor">
    <div className="editor_wrapper">
    <img src={getIcon('pencil')} />
        <input placeholder={"새 Todo 작성하기"}
        ref={inputRef} 
        value={content} 
        onChange={onChangeContent} 
        onKeyDown={onKeyDown} />

        <Button value={"추가"} type="negative" onClick={onSubmit}/>
    </div>
    </div>);

};

export default TodoEditor;