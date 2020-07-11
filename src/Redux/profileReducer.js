const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initState = {
    posts: [
        {id: 1, message: 'hello World', likeCount: 22},
        {id: 2, message: 'norm', likeCount: 32},
        {id: 3, message: 'norm', likeCount: 2},
    ],
    newPostText: ''
};

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = (action.newText);
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (newText) => ({
    type: UPDATE_NEW_POST_TEXT, newText: newText
});