import { createSlice } from "@reduxjs/toolkit";

const initialReacts = {
    reacts:[
        // {postId:1,reacts:['love','like']},
        // {postId:2,reacts:['wow','sad']},
    ]
};

export const reactionSlice = createSlice({
    name:"reacts",
    initialState:initialReacts,
    reducers:{
        showReaction:(state)=>state,

        addReaction:(state,action)=>{
            const {postId,reaction} = action.payload;
            const isExistReaction = state.reacts.filter((reaction)=>reaction.postId===postId);
            console.log(isExistReaction)
            if(isExistReaction.length){
                isExistReaction[0].reacts?.push(reaction);
            }else{
                const newReaction = {
                    postId:postId,
                    reacts:[reaction]
                }
                state.reacts.push(newReaction);
            }
        },
        
    }

})

export const {showReaction,addReaction} = reactionSlice.actions;
export default reactionSlice.reducer;