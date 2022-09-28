import { createSlice } from "@reduxjs/toolkit";

const initialComments = {
    comments:[
        
    ]
};

export const commentSlice = createSlice({
    name:"comments",
    initialState:initialComments,
    reducers:{
        showComments:(state)=>state,
        addComment:(state,action)=>{
            console.log(action.payload)
            state.comments.push(action.payload);
        },
        deleteComment:(state,action)=>{
            const id = action.payload;
            state.comments = state.comments.filter((comment)=>comment.commentId!==id);
        },
        updateComment:(state,action)=>{
            const {commentId,comment}=action.payload;
            const isCommentExist = state.comments.filter((comment)=>comment.commentId===commentId);
            if(isCommentExist){
                isCommentExist[0].comment=comment;
            }
        }
    }

})

export const {showComments,deleteComment,updateComment,addComment} = commentSlice.actions;
export default commentSlice.reducer;