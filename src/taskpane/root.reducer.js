import { combineReducers } from '@reduxjs/toolkit';

// Define your initial states and reducers directly in this file
const initialUserState = {
    name: '',
    email: '',
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
            };
        default:
            return state;
    }
};

const initialPostsState = {
    posts: [],
};

const postsReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;
    }
};

// Combine the reducers
const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

export default rootReducer;
