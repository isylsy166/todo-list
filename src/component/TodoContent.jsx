import React, { useContext, useEffect, useState } from 'react'
import style from '../css/todoContent.module.css'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
import { StatusContext } from '../context/StatusContext';
import { GroupContext } from '../context/GroupContext';
import { IoMdAdd } from 'react-icons/io';

export default function TodoContent() {

  const {conStatus} = useContext(StatusContext);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const {todos, groups, addTodo, updateTodo, deleteTodo} = useContext(GroupContext);
  const {todoInputShow, isShow} = useContext(GroupContext);
  const [selectGroup, setSelectGroup] = useState([]);
  
  
  useEffect(()=>{
    
    localStorage.setItem('todos', JSON.stringify(todos))


    if (conStatus === 'active') {
      setFilteredTodos(todos.filter((todo) => todo.status === 'active'));
    } else if (conStatus === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.status === 'completed'));
    } else {
      setFilteredTodos(todos); // 모든 상태를 보여줌
    }

  },[ conStatus, todos, groups ])

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이터 해야한다
    addTodo(todo);
  }

  const handleUpdate = (updated) => {
    updateTodo(updated);
  }

  const handleDelete = (deleted) => {
    deleteTodo(deleted);
  }

  const addTodoAtGroup = (group) => {
    isShow((prev) => !prev);
    setSelectGroup(group);
  }

  return (
    <div className={style.frame}>
      <div className={style.itemBox}>
        {
          groups.map((group) => (
            <div className={style.groupBox}>

              {/* 그룹이름 */}
              <div className={style.groupTitleBox} key={group.id}>
                <h1>{group.text}</h1>
                <IoMdAdd className={style.groupAddBtn} onClick={() => addTodoAtGroup(group)} />
              </div>

              {
                filteredTodos
                  .filter((todo) => todo.group === group.id)
                  .map((todo) => (
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onUpdate={handleUpdate} 
                    onDelete={handleDelete}/>
                  ))
              }
            </div>
          ))
        }
        {
          todos.length === 0 ? (
            <div className={style.emptyMessage}>할 일을 추가해보세요!</div>
          ) : (
            filteredTodos.filter((todo) => todo.group === 'default').map((todo) => (
              <TodoItem 
              key={todo.id} 
              todo={todo} 
              onUpdate={handleUpdate} 
              onDelete={handleDelete}/>
            ))
          )
        }
      </div>
      <TodoFooter onAdd={handleAdd} isShow={todoInputShow} group={selectGroup}/>
    </div>
  )
}

