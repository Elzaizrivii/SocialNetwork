import {profileApi, usersApi} from "../Api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_POST = 'SET_POST';
const SET_STATUS = 'SET_STATUS';

let initState = {
    posts: [],
    newPostText: '',
    profile: null,
    status: []
};

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_POST:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status.data.status
            };
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newText) => ({
    type: UPDATE_NEW_POST_TEXT, newText: newText
});
export const setPosts = (posts) => ({type: SET_POST, posts});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setProfileUsers = (profile) => ({type: SET_PROFILE_USER, profile});

export const getProfile = (id) => {
    return (dispatch) => {
        usersApi.getProfile(id).then(data => {
            dispatch(setProfileUsers(data));
        });
    }
};

export const getStatus = (id) => {
    return (dispatch) => {
        profileApi.getStatus(id).then(data => {
            dispatch(setStatus(data));
        });
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(data => {
            dispatch(setStatus(data));
        });
    }
};