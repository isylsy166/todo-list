
import style from '../css/todoFrame.module.css'

export default function TodoFrame({children}) {
  return (
    <div className={style.frame}>
      <div className={style.box}>
        {children}
      </div>
    </div>
  )
}

