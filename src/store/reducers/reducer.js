import * as actionTypes from "../actions/actionTypes"

const initialState ={
    sections: [],
    loading:false,
    error:false,
    list:[],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_SECTIONS_START:
            return ({...state, loading:true})

        case actionTypes.GET_SECTIONS_SUCCESS:
            return ({...state, loading:false, sections: action.data})

        /*case actionTypes.GET_LIST_START:
            return ({...state, loading:true})

        case actionTypes.GET_LIST_SUCCESS:
            return ({...state, loading:false, list: action.data})            
        */
        default:
            return state
    }

}

export default reducer