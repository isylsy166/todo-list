import style from '../css/todoItem.module.css'
import { RiDeleteBackFill } from 'react-icons/ri'

export default function TodoItem({todo, onUpdate, onDelete}) {

    const { id, text, status} = todo;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status:status});
    }

    const handleDelete = () => onDelete(todo)

    return (
    <div className={style.itemBox}>
        <input 
            type='checkbox' 
            id={id} 
            className={style.checkbox} 
            checked={status === 'completed'}
            onChange={handleChange}
        />
        <label htmlFor={id} className={style.itemText}>{text}</label>
        <RiDeleteBackFill size={20} className={style.deleteIcon} onClick={handleDelete}/>           
    </div>
    )
}
