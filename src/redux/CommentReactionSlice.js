import { createSlice } from "@reduxjs/toolkit";

const initialReacts = {
    reacts:[
        // {postId:1,reacts:['love','like']},
        // {postId:2,reacts:['wow','sad']},
    ]
};

export const commentReactionSlice = createSlice({
    name:"reacts",
    initialState:initialReacts,
    reducers:{
        showCommentReaction:(state)=>state,

        addCommentReaction:(state,action)=>{
            const {postId,commentId,reaction} = action.payload;
            const isExistReaction = state.reacts.filter((reaction)=>reaction.postId===postId && reaction.commentId===commentId);
            console.log(isExistReaction)
            if(isExistReaction.length){
                isExistReaction[0].reacts?.push(reaction);
            }else{
                const newReaction = {
                    postId:postId,
                    commentId:commentId,
                    reacts:[reaction]
                }
                state.reacts.push(newReaction);
            }
        },
        
    }

})

export const {showCommentReaction,addCommentReaction} = commentReactionSlice.actions;
export default commentReactionSlice.reducer;