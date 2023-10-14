import './NoteSetModal.css';
import React, { useEffect, useState } from 'react';

const NoteSetModal = () => {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    const storedNoteList = JSON.parse(localStorage.getItem('noteList'));

    if (storedNoteList) {
      setNoteList(storedNoteList);
    } else {
      const initialData = [
        { id: 0, noteName: 'No dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { id: 1, noteName: 'No dataaaaaaaa' },
        { id: 2, noteName: 'No dataaaa' },
        { id: 3, noteName: 'No data' }
      ];

      setNoteList(initialData);
      localStorage.setItem('noteList', JSON.stringify(initialData));
    }
  }, []);

  const setData = (id, noteName) => {
    // 로컬스토리지 데이터 설정
    setNoteList({
      id: id,
      noteName: noteName,
    });
  };

  const openSetting = (id) => {
    // 데이터 설정 모달 또는 프롬프트 열기
    if(prompt('asdfsadf')){
      alert('ok');
    }
  };

  return (
    <>
      {noteList.map(note => (
        <div className='NoteSetModal' key={note.id} onClick={() => openSetting(note.id)}>
          <div className='id'>{note.id}</div>
          <div className='name'>{note.noteName}</div>
        </div>
      ))}
    </>
  );
};

export default NoteSetModal;
