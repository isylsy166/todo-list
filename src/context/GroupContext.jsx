import { createContext, useState } from "react";

export const GroupContext = createContext();

export function GroupProvider({children}){

    // 함수 실행 후 초기 값을 설정하도록 변경
    const [groups, setGroups] = useState(() => readGroupsFromLocalStorage());

    const addGroup = (g) => {
        setGroups([...groups, ...g]);
    }

    const deleteGroup = (groupId) => {
        setGroups( groups.filter((g) => g.id !== groupId) );
    }

    return(
        <GroupContext.Provider value={{groups, addGroup, deleteGroup}}>
            {children}
        </GroupContext.Provider>
    )
}

function readGroupsFromLocalStorage(){
    const groups = localStorage.getItem('groups');
    return groups ? JSON.parse(groups) : [];
}
