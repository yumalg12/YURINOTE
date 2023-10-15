import './NoteList.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNoteList = localStorage.getItem('noteList');

    if (storedNoteList && storedNoteList != 'undefined' && storedNoteList != 'null') {
      try{
        setNoteList(JSON.parse(storedNoteList));
      } catch {
        setMockData();
      }
    } else {
      setMockData();
    }
  }, []);

  const setMockData = () => {
    const initialData = [
      { id: 1, noteName: 'No data' },
      { id: 2, noteName: 'No data' },
      { id: 3, noteName: 'No data' },
      { id: 4, noteName: 'No data' }
    ];

    setNoteList(initialData);
    localStorage.setItem('noteList', JSON.stringify(initialData));
  };

  const NoteRename = (id, noteName) => {
    const newData = noteList.map(e =>
      e.id === id ? { ...e, noteName: noteName } : e
    );
    
    setNoteList(newData);
    
    console.log(newData);
    
    localStorage.setItem('noteList', JSON.stringify(newData));
  };
  
  const openSetting = (id) => {
    const thisNoteName = noteList[id-1].noteName;
    if (thisNoteName === 'No data') {

      const newName = prompt(
        `${id}번 노트의 이름을 설정해 주세요.`,
        noteList[id - 1].noteName
        );
        
        if (newName) {
          NoteRename(id, newName);
        } else {
          alert('수정이 취소되었습니다.');
        }
      } else {
        sessionStorage.setItem('currentNote', id);
        navigate('/diary');
      }
  };

  return (
    <div className='NoteList'>
      {noteList.map(note => (
        <div className='NoteCard' key={note.id} onClick={() => openSetting(note.id)}>
          <div className='id'>{note.id}</div>
          <div className='name'>{note.noteName}</div>
        </div>
      ))}
     </div>
   );
};

export default NoteList;
