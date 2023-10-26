import React, { useState } from "react";
import "./SettingPage.css";
import Button from "../Common/Button";

const SettingPage = () => {
  const getNoteObj = () =>
    JSON.parse(localStorage.getItem("noteList"))[
      sessionStorage.getItem("currentNote") - 1
    ];

  const [noteInfo, setNoteInfo] = useState(getNoteObj());
  const [newNoteName, setNewNoteName] = useState(noteInfo.noteName);

  const onDelete = () => {
    setNoteInfo({
      ...noteInfo,
      noteName: "No data",
    });
    alert("삭제됨");
  };

  const onNewNoteName = (e) => {
    setNewNoteName(e.target.value);
  };

  const onSave = () => {
    setNoteInfo({
      ...noteInfo,
      noteName: newNoteName,
    });
  };

  return (
    <div className="SettingPage">
      <h4>노트 제목 수정</h4>
      <input
        type="text"
        value={newNoteName}
        maxLength={20}
        onChange={onNewNoteName}
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
