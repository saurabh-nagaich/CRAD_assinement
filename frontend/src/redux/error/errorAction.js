import { CLEAR_ERRORS, GET_ERRORS } from "./errorType"


// RETURN ERRORS
export const returnError = (msg, status, id = null) =>{
    return {
        type:GET_ERRORS,
        payload: { msg, status, id }
    };
};

// CLEAR ERRORS
export const clearError = () => {
    return {
        type: CLEAR_ERRORS
    }
}