import { createSlice } from "@reduxjs/toolkit";

const initialReacts = {
    reacts:[
        // {postId:1,reacts:['love','like']},
        // {postId:2,reacts:['wow','sad']},
    ]
};

export const replyReactionSlice = createSlice({
    name:"reacts",
    initialState:initialReacts,
    reducers:{
        showReplyReaction:(state)=>state,

        addReplyReaction:(state,action)=>{
            const {postId,commentId,replyId,reaction} = action.payload;
            const isExistReaction = state.reacts.filter((reaction)=>reaction.postId===postId && reaction.commentId===commentId && reaction.replyId===replyId);
            console.log(isExistReaction)
            if(isExistReaction.length){
                isExistReaction[0].reacts?.push(reaction);
            }else{
                const newReaction = {
                    postId:postId,
                    commentId:commentId,
                    replyId:replyId,
                    reacts:[reaction]
                }
                state.reacts.push(newReaction);
            }
        },
        
    }

})

export const {showReplyReaction,addReplyReaction} = replyReactionSlice.actions;
export default replyReactionSlice.reducer;