import { useContext, useEffect, useState } from 'react';
import style from '../css/rightMenuBar.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPen } from 'react-icons/fa';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { GroupContext } from '../context/GroupContext';
import { v4 as uuidv4 } from 'uuid';

export default function RightMenuBar({ isVisible }) {
  const [text, setText] = useState('');
  //const [groups, dispatch] = useReducer(groupReducer, initialGroups)
  const {groups, addGroup, deleteGroup} = useContext(GroupContext);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
    setText('');
  }, [groups]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    }
    const newGroup = [{ id: uuidv4(), text: text }];
    addGroup(newGroup);
  };

  const handleGroupDelete = (groupId) => {
    deleteGroup(groupId);
  };

  return (
    <div className={`${style.frame} ${!isVisible ? style.slideOut : ''}`}>
      <h2>Group</h2>
      <div>
        <div className={style.inputGroupBox}>
          <input
            type="text"
            placeholder="그룹명을 입력해주세요"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <IoMdAddCircle className={style.addGroupIcon} onClick={handleSubmit} />
        </div>
        <div className={style.groupBox}>
          {groups.length === 0 ? (
            <div></div>
          ) : (
            groups.map((g) => (
              <div className={style.groupWrap} key={g.id}>
                <input
                  type="text"
                  value={g.text}                
                />
                <div className={style.groupIconWrap}>
                  <FaPen />
                  <BiSolidTrashAlt onClick={() => handleGroupDelete(g.id)} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
