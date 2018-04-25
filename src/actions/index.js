let nextTaskNumber = 4;

export const addTask = (inputText) => {
    return  {
        type: 'ADD_TASK',
        payload: inputText,
        id: nextTaskNumber++
    }
};

export const editTask = (todo) => {
    return {
        type: 'EDIT_TASK',
        payload: todo.taskDescription,
        id: todo.taskNumber
    };
}

export const deleteTask = (todo) => {
    return {
        type: 'DELETE_TASK',
        payload: todo.taskNumber
    };
}

export const toggleTask = (todo) => {
    return {
        type: 'TOGGLE_TASK',
        payload: todo.taskNumber
    };
}

export function searchTask(keyword) {
    return {
        type: 'SEARCH_TASK',
        payload: keyword
    };
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter
    }
}