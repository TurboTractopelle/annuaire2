import * as actionTypes from "./actionTypes"
import axios from "axios"

const createAction = (type, ...autreArgs)=> {
    return (...args) => {
        const action = {type}
        autreArgs.map((item,i) => action[item] = args[i])
        return action
    }
}

export const getSections = () =>{
 
    return dispatch => {
        dispatch(getSectionsStart())
    
        axios.get("https://annuaire2-228f7.firebaseio.com/sections.json")
            .then(res => {
                const data = Object.keys(res.data).map((item, i, k) => ({title: res.data[item].sectionTitle, id: k[i]}))
                dispatch(getSectionsSuccess(data))
            })
    }

}

export const getSectionsStart = createAction(actionTypes.GET_SECTIONS_START)
export const getSectionsSuccess = createAction(actionTypes.GET_SECTIONS_SUCCESS, "data")
export const getSectionsFail = createAction(actionTypes.GET_SECTIONS_FAIL)


export const getList = ()=> {
    return dispatch => {
        dispatch(getListStart())    
        
        setTimeout(()=>{
            dispatch(getListSuccess("ok"))         
        },2000)

    }
}

export const getListStart = createAction(actionTypes.GET_LIST_START)
export const getListSuccess = createAction(actionTypes.GET_LIST_SUCCESS, "data")
export const getListFail = createAction(actionTypes.GET_LIST_FAIL)

