import { loadAction } from "../reducer/usersReducer";

export const fetchUsers = async (dispatch) => {
    const resp = await fetch('https://reqres.in/api/users/');
    const data = await resp.json();
    dispatch(loadAction(data.data));
}