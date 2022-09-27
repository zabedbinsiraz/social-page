import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from './CommentSlice';
import reactionsReducer from './ReactionSlice';
import repliesReducer from './ReplySlice';
import statusReducer from './StatusSlice';

const store = configureStore({
    reducer:{
        reactionsReducer:reactionsReducer,
        commentsReducer:commentsReducer,
        repliesReducer:repliesReducer,
        statusReducer:statusReducer,
    }
})

export default store;