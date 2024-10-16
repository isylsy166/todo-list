import React, { useState } from 'react'
import st from '../css/todoFooter.module.css'
import { IoMdAdd } from 'react-icons/io'
import {v4 as uuidv4} from 'uuid'

export default function TodoFooter({onAdd, isShow, group}) {


  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지가 새로고침 되지 않도록
    // 공백 체크
    if(text.trim().length === 0){
      setText('');
      return;
    }
    onAdd({ id: uuidv4(), text : text, status: 'active', group:'default'})
    setText('');
  }

  const addTodosInGroup = (e) => {
    e.preventDefault(); // 페이지가 새로고침 되지 않도록
    if(text.trim().length === 0){
      setText('');
      return;
    }
    onAdd({ id: uuidv4(), text : text, status: 'active', group: group.id});
    setText('');
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e); // 엔터키가 눌리면 handleSubmit 호출
    }
  };

  const handleKeyPressGroup = (e) => {
    if (e.key === 'Enter') {
      addTodosInGroup(e);
    }
  };

  if(isShow){
    return(
      <div className={`${st.frame} ${isShow ? st.slideUp : st.slideDown}`}>
        <div className={st.inputBox}>
            <input 
              type='text' 
              placeholder='할 일을 입력하세요' 
              value={text} 
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
            />     
            <IoMdAdd size={40} color='#ffff' onClick={handleSubmit}/>        
        </div>
      </div>
    )
  }
  else{
    return(
      <div className={`${st.groupFrame} ${isShow ? st.slideDown : st.slideUp}`}>
        <div className={st.inputBox}>
        <input 
          type='text' 
          placeholder={`${group.text}에 할 일을 입력하세요 `}
          value={text} 
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPressGroup}
        />     
        <IoMdAdd size={40} color='#ffff' onClick={addTodosInGroup}/>        
        </div>
      </div>
    )
  }

    // return(
    //   <>
    //     <div className={`${st.frame} ${isShow ? st.slideUp : st.slideDown}`}>
    //     <div className={st.inputBox}>
    //         <input 
    //           type='text' 
    //           placeholder='할 일을 입력하세요' 
    //           value={text} 
    //           onChange={(e) => setText(e.target.value)}
    //           onKeyPress={handleKeyPress}
    //         />     
    //         <IoMdAdd size={40} color='#ffff' onClick={handleSubmit}/>        
    //     </div>
    //   </div>

    //   <div className={`${st.groupFrame} ${isShow ? st.slideDown : st.slideUp}`}>
    //     <div className={st.inputBox}>
    //         <input 
    //           type='text' 
    //           placeholder={`${group.text}에 할 일을 입력하세요 `}
    //           value={text} 
    //           onChange={(e) => setText(e.target.value)}
    //           onKeyPress={handleKeyPressGroup}
    //         />     
    //         <IoMdAdd size={40} color='#ffff' onClick={addTodosInGroup}/>        
    //     </div>
    //   </div>
    //   </>
    // )

}
