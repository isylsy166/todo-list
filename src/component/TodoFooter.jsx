import React, { useState } from 'react'
import st from '../css/todoFooter.module.css'
import { IoMdAdd } from 'react-icons/io'
import {v4 as uuidv4} from 'uuid'

export default function TodoFooter({onAdd}) {

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지가 새로고침 되지 않도록
    // 공백 체크
    if(text.trim().length === 0){
      setText('');
      return;
    }
    onAdd({ id: uuidv4(), text : text, status: 'active'})
    setText('');
  }

  return (
    <div className={st.frame}>
      <div className={st.inputBox}>
          <input type='text' placeholder='할 일을 입력하세요' value={text} onChange={(e) => setText(e.target.value)}/>     
          <IoMdAdd size={40} color='#ffff' onClick={handleSubmit}/>        
      </div>
    </div>
  )
}
