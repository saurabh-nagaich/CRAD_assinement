
import { ADD_FILETER,CREATE_FILETER ,EDIT_FILETER, DELETE_FILETER, LIKE_FILETER, UNLIKE_FILETER } from "./filterType"

const initialState = [
    
];

const filterReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_FILETER :{
            // console.log(action.payload.data.Filters);
            return action.payload.data.Filters 
        }
        // case CREATE_FILETER :{
        //     // console.log(action.payload.data.Filters);
        //     return action.payload.data.Filters 
        // }

        case EDIT_FILETER :
            let index = state.findIndex(el=>el.id===action.payload.id);
            state[index].title=action.payload.title;
            state[index].categories=action.payload.categories;
            state[index].content=action.payload.content;
            return [
                ...state,
            ]

        case DELETE_FILETER :
            let id = state.findIndex(el=>el.id===action.payload.id);
            if (id > -1) {
                state.splice(id, 1);
            }
            return state;
        
        case LIKE_FILETER :
            let like_id = state.findIndex(el=>el.id===action.payload.id);
            state[like_id].like += 1;
            return state;

        case UNLIKE_FILETER :
            let unLike_id = state.findIndex(el=>el.id===action.payload.id);
            console.log(state[unLike_id].like)
            state[unLike_id].like = state[unLike_id].like - 1;
            console.log(state[unLike_id].like)
            return state;

        default : return state
    }
}


export default filterReducer;