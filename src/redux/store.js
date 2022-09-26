import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from './CommentSlice';
import reactionsReducer from './ReactionSlice';
import repliesReducer from './ReplySlice';

const store = configureStore({
    reducer:{
        reactionsReducer:reactionsReducer,
        commentsReducer:commentsReducer,
        repliesReducer:repliesReducer,
    }
})

export default store;