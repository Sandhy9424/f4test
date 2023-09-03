import { POST_FETCHING, POST_FETCH_SUCCESS, POST_FETCH_ERROR } from "./actionTypes";
import axios from "axios";

export const postFetching = () =>{
        return {
            type:POST_FETCHING
        }
}

export const postFetchSuccess = (value) =>{
        return {
            type:POST_FETCH_SUCCESS,
            payload:value
        }
}

export const postFetchError = (error) =>{
        return {
            type:POST_FETCH_ERROR,
            payload:error
        }
}

// the part using applyMiddleware

export function getAPIDetails(word){
    console.log(word)
    return function(dispatch){
        
        dispatch(postFetching());

        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
            dispatch(postFetchSuccess(response.data))
        })
        .catch((error)=>{
            dispatch(postFetchError(error.message))
        })
    }
}