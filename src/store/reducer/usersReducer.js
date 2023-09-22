const LOAD = 'LOAD';

export const loadAction = (payload) => ({ type: LOAD, payload });

export const usersReducer = (state = [], action) => {
    if (action.type === LOAD) {
        return action.payload;
    }
    return state;
}

export default usersReducer;