import React from 'react'
import style from '../css/todoTitle.module.css'
import { TbMoonFilled } from 'react-icons/tb'

export default function TodoTitle() {
  return (
    <div className={style.frame}>
      <div className={style.iconBox}>
        <TbMoonFilled size={20} color='#fff787'/>
        <p>2024.8.26.mon</p>
      </div>
      <div className={style.menuBox}>
        <p>All</p>
        <p>Active</p>
        <p>Complete</p>
      </div>
    </div>
  )
}
