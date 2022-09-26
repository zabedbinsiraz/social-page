import { createSlice } from "@reduxjs/toolkit";

const initialReplies = {
    replies:[
        {postId:1,commentId:1,replyId:1,reply:'Beautiful'},
        {postId:2,commentId:2,replyId:2,reply:'Excellent'},
    ]
};

export const replySlice = createSlice({
    name:"replies",
    initialState:initialReplies,
    reducers:{
        showReplies:(state)=>state,
        addReply:(state,action)=>{
            state.replies.push(action.payload);
        },
        deleteReply:(state,action)=>{
            const id = action.payload;
            state.replies = state.replies.filter((reply)=>reply.replyId!==id);
        },
        updateReply:(state,action)=>{
            const {replyId,reply}=action.payload;
            const isReplyExist = state.replies.filter((reply)=>reply.replyId===replyId);
            if(isReplyExist.length){
                isReplyExist[0].reply=reply;
            }
        }
    }

})

export const {showReplies,deleteReply,updateReply,addReply} = replySlice.actions;
export default replySlice.reducer;