import { v4 as uuidv4 } from 'uuid';


export const initialGroups = readGroupsFromLocalStorage();

export default function groupReducer(groups, action){
    switch(action.type) {
        case 'add': {
            const {text} = action;
            if (text.trim().length === 0) {
                return groups;
            }
            const newGroup = { id: uuidv4(), text: text };

            return [...groups, newGroup ] //groups 배열을 복사하고, newGroup을 추가한 새로운 배열을 반환
        }
        case 'delete': {
            const {groupId} = action;
            return groups.filter((group) => group.id !== groupId)
        }
        default: {
            throw Error('알 수 없는 액션 타입이다')
        }
    }
}

function readGroupsFromLocalStorage(){
    const groups = localStorage.getItem('groups');
    return groups ? JSON.parse(groups) : [];
}