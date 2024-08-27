import { useContext, useEffect, useState } from 'react'
import style from '../css/todoTitle.module.css'
import { TbMoonFilled } from 'react-icons/tb'
import { StatusContext } from '../context/StatusContext';
import { DarkmodeContext } from '../context/DarkmodeContext';
import { IoSunny } from 'react-icons/io5';
import moment from 'moment';

export default function TodoTitle() {

  const {checkStatus} = useContext(StatusContext);
  const {darkmode, toggleMode} = useContext(DarkmodeContext);
  
  //날짜
  const nowData = moment();
  const date = nowData.format('YYYY.MM.DD');
  const day = nowData.format('dddd').substring(0,3);
  
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkmode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkmode]);

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
        {darkmode ? (<IoSunny size={23} color='#ffbfbf' className={style.themeicon} onClick={() => toggleMode()}/>) : (<TbMoonFilled size={20} color='#fff787' className={style.themeicon} onClick={() => toggleMode()}/>)}      
        <p>{`${date}.${day}`}</p>
      </div>
      <div className={style.menuBox}>
        {all ? (<p className={style.seletedMenu} onClick={handleAll}>All</p>) : (<p onClick={handleAll}>All</p>)}
        {active ? (<p className={style.seletedMenu} onClick={handleActive}>Active</p>) : (<p onClick={handleActive}>Active</p>)}
        {completed ? (<p className={style.seletedMenu} onClick={handleCompleted}>Complete</p>) : (<p onClick={handleCompleted}>Complete</p>)}
      </div>
    </div>
  )
}
