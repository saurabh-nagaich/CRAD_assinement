import { combineReducers } from "redux"
import filterReducer from "./filter/filterReducer"
import errorReducer from "./error/errorReducer";

const rootReducer = combineReducers({
    filter:filterReducer,
    error: errorReducer,

})

export default rootReducer