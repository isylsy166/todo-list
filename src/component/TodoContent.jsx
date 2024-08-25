import React, { useState } from 'react'
import style from '../css/todoContent.module.css'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'

export default function TodoContent() {

  const [todos, setTodos] = useState([])

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이터 해야한다
    console.log(todo);
    setTodos([...todos, todo]);
  }

  const handleUpdate = (updated) => {
    console.log(updated)
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id))
  }

  return (
    <div className={style.frame}>
      <div className={style.itemBox}>
        {todos.length === 0 ? (
          <div className={style.emptyMessage}>할 일을 추가해보세요!</div>
        ) : (
          todos.map((todo) => (
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete}/>
          ))
        )}
      </div>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  )
}
