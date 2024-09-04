import { createContext, useState } from "react";

export const GroupContext = createContext();

export function GroupProvider({children}) {

    const [groups, setGroups] = useState(() => readGroupsFromLocalStorage());
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
    const [todoInputShow, setTodoInputShow] = useState(true);

    const addGroup = (g) => {
        setGroups([...groups, ...g]);
    }

    const updateGroup = (groupId, editText) => {
        setGroups(groups.map((group) => 
            group.id === groupId ? { ...group, text: editText } : group
        ));
    }

    const deleteGroup = (groupId) => {
        console.log(todos);  // 현재 todos 상태 확인

        // 그룹 삭제
        const newGroups = groups.filter((g) => g.id !== groupId);
        setGroups(newGroups);
        localStorage.setItem('groups', JSON.stringify(newGroups));

        // 관련된 todos 삭제
        const newTodos = todos.filter((t) => t.group !== groupId);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));

        console.log(newTodos);  // 업데이트된 todos 확인
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const updateTodo = (updated) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))

    }

    const deleteTodo = (deleted) => {
        setTodos(todos.filter((t) => t.id !== deleted.id))
    }

    const isShow = (state) => {
        setTodoInputShow(state);
    }

    return(
        <GroupContext.Provider value={{
            todos,
            groups,
            todoInputShow,
            addTodo,
            updateTodo,
            deleteTodo,
            addGroup, 
            updateGroup, 
            deleteGroup,
            isShow
            }}>
            {children}
        </GroupContext.Provider>
    );
}

function readGroupsFromLocalStorage(){
    const groups = localStorage.getItem('groups');
    return groups ? JSON.parse(groups) : [];
}

function readTodosFromLocalStorage(){
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}
