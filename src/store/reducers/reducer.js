import * as actionTypes from "../actions/actionTypes"

const initialState ={
    sections: [],
    loading:false,
    error:false,
    list:[],
    sectionInfo: {}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_SECTIONS_START:
            return ({...state, loading:true})

        case actionTypes.GET_SECTIONS_SUCCESS:
            return ({...state, loading:false, sections: action.data})

        case actionTypes.GET_LIST_START:
            return ({...state, loading:true})

        case actionTypes.SET_SECTION_INFO:
            return ({...state, sectionInfo:{...action.data}})            

        case actionTypes.GET_LIST_SUCCESS:
            return ({...state, loading:false, list: action.data})  
            
        case actionTypes.CLEAR_LIST:
            return ({...state, loading:false, list: []})              

        default:
            return state
    }

}

export default reducer