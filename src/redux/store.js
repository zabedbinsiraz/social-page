import { configureStore } from "@reduxjs/toolkit";
import commentReactionsReducer from './CommentReactionSlice';
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
        commentReactionsReducer:commentReactionsReducer,
    }
})

export default store;