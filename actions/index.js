let nextTodoId = 0;

export const addNode = (text) => {
    return {
        type: 'ADD_NODE',
        id: nextTodoId++,
        text
    }
}

export const toggleNode = (id)  => {
    return {
        type: 'TOGGLE_NODE',
        id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}