import {usersApi} from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth:false
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
};

export const setUserData = (id, login,email) => ({type: SET_USER_DATA, data: {id: id, login: login, email: email}});
export default authReducer;

export const getAuth = () => {
    return (dispatch) => {
        usersApi.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserData(id, login, email));
            }
        });
    }
}