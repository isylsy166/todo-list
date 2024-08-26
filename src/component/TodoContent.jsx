import React, { useContext, useEffect, useState } from 'react'
import style from '../css/todoContent.module.css'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
import { StatusContext } from '../context/StatusContext';

export default function TodoContent() {

  const {conStatus} = useContext(StatusContext);
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    console.log(conStatus);
    if (conStatus === 'active') {
      setFilteredTodos(todos.filter((todo) => todo.status === 'active'));
    } else if (conStatus === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.status === 'completed'));
    } else {
      setFilteredTodos(todos); // 모든 상태를 보여줌
    }
  },[ conStatus, todos ])

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이터 해야한다
    setTodos([...todos, todo]);
  }

  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id))
  }

  return (
    <div className={style.frame}>
      <div className={style.itemBox}>
        {
          todos.length === 0 ? (
            <div className={style.emptyMessage}>할 일을 추가해보세요!</div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem 
              key={todo.id} 
              todo={todo} 
              onUpdate={handleUpdate} 
              onDelete={handleDelete}/>
            ))
          )
        }
      </div>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  )
}
