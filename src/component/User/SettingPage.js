import React, { useState } from "react";
import "./SettingPage.css";
import Button from "../Common/Button";

const SettingPage = () => {
  const getNoteObj = () =>
    JSON.parse(localStorage.getItem("noteList"))[sessionStorage.getItem("currentNote") - 1];

  const [noteInfo, setNoteInfo] = useState(getNoteObj());

  const onDelete = () => {
    const updatedNoteList = JSON.parse(localStorage.getItem("noteList"));
    updatedNoteList[sessionStorage.getItem("currentNote") - 1].noteName = "No data";
    localStorage.setItem("noteList", JSON.stringify(updatedNoteList));
    setNoteInfo(getNoteObj());
    alert("노트가 삭제되었습니다.");
    window.location.href = "/";
  };

  const onSave = () => {
    const updatedNoteList = JSON.parse(localStorage.getItem("noteList"));
    updatedNoteList[sessionStorage.getItem("currentNote") - 1].noteName = noteInfo.noteName;
    localStorage.setItem("noteList", JSON.stringify(updatedNoteList));
    setNoteInfo(getNoteObj());
    alert("노트 제목이 변경되었습니다.");
    window.location.reload();
  };

  return (
    <div className="SettingPage">
      <h4>노트 제목 수정</h4>
      <input
        type="text"
        value={noteInfo.noteName}
        maxLength={20}
        onChange={(e) => setNoteInfo({ ...noteInfo, noteName: e.target.value })}
      />
      <Button value={"저장"} type="" onClick={onSave} />

      <h4>노트 색상</h4>
      <select>
        <option>Blue</option>
      </select>

      <h4>노트 관리</h4>
      <Button value={"삭제"} type="warning" onClick={onDelete} />
    </div>
  );
};

export default SettingPage;
