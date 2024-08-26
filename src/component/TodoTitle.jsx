import { useContext, useState } from 'react'
import style from '../css/todoTitle.module.css'
import { TbMoonFilled } from 'react-icons/tb'
import { StatusContext } from '../context/StatusContext';

export default function TodoTitle() {

  const {checkStatus} = useContext(StatusContext);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleAll = () => {
    setAll(true);
    setCompleted(false);
    setActive(false);
    checkStatus('');
  }

  const handleActive = () => {
    setActive(true);
    setAll(false);
    setCompleted(false);
    checkStatus('active');
  }

  const handleCompleted = () => {
    setCompleted(true);
    setAll(false);
    setActive(false);
    checkStatus('completed');
  }


  return (
    <div className={style.frame}>
      <div className={style.iconBox}>
        <TbMoonFilled size={20} color='#fff787'/>
        <p>2024.8.26.mon</p>
      </div>
      <div className={style.menuBox}>
        {all ? (<p className={style.seletedMenu} onClick={handleAll}>All</p>) : (<p onClick={handleAll}>All</p>)}
        {active ? (<p className={style.seletedMenu} onClick={handleActive}>Active</p>) : (<p onClick={handleActive}>Active</p>)}
        {completed ? (<p className={style.seletedMenu} onClick={handleCompleted}>Complete</p>) : (<p onClick={handleCompleted}>Complete</p>)}
      </div>
    </div>
  )
}
