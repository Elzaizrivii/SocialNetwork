const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initState = {
    users: []
};
console.log(initState);

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {

                        return {...u, followed: true}
                    }

                    return u;
                }),

            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {

                        return {...u, followed: false}
                    }

                    return u;
                }),

            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.user]
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersAC = (user) => ({type: SET_USERS, user});
