import { useContext, useEffect, useState } from 'react';
import style from '../css/rightMenuBar.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPen } from 'react-icons/fa';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { GroupContext } from '../context/GroupContext';
import { v4 as uuidv4 } from 'uuid';

export default function RightMenuBar({ isVisible }) {
  const [text, setText] = useState('');
  const [editText, setEditText] = useState(''); // 수정 중인 그룹의 텍스트
  const [editGroupId, setEditGroupId] = useState(''); // 수정 중인 그룹의 ID
  const {groups, addGroup, updateGroup, deleteGroup, isShow} = useContext(GroupContext);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
    setText('');
  }, [groups]);

  useEffect(()=>{
    // style.frame의 속성의 display:none을 없애는 코드
    const frameElement = document.querySelector(`.${style.frame}`);
    if (frameElement) {
      if (isVisible) {
        frameElement.style.display = 'block';  // isVisible이 true면 표시
        frameElement.classList.remove(style.slideOut);  // 슬라이드 아웃 클래스 제거
      } else {
        frameElement.classList.add(style.slideOut);  // 슬라이드 아웃 클래스 추가
        setTimeout(() => {
          frameElement.style.display = 'none';  // 애니메이션 후에 display none 적용
        }, 300);  // 애니메이션 지속 시간에 맞춰 300ms 정도 딜레이
      }
    }
  },[isVisible])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    }
    const newGroup = [{ id: uuidv4(), text: text }];
    addGroup(newGroup);
  };

  const handleGroupEdit = (group) => {
    setEditGroupId(group.id);
    setEditText(group.text);
  };

  const handleEditSubmit = (groupId) => {
    updateGroup(groupId, editText);
    setEditGroupId(''); // 수정 모드 비활성화
  };

  const handleGroupDelete = (groupId) => {
    deleteGroup(groupId);
    isShow(true);
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
            <div className={style.emptyMessage}>그룹을 추가해보세요!</div>
          ) : (
            groups.map((g) => (
              <div className={style.groupWrap} key={g.id}>
                {editGroupId === g.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => handleEditSubmit(g.id)} // 인풋 필드에서 포커스를 잃으면 수정 내용 저장
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleEditSubmit(g.id);
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <p id={g.id}>{g.text}</p>
                )}
                <div className={style.groupIconWrap}>
                  <FaPen onClick={() => handleGroupEdit(g)} />
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
