import { SET_USER, SET_TOKEN } from "../actionType";
import { ActionType } from "../../utils/types";

const initialState = {
    userInfo: {},
    token: "",
    menu: [],
    routes: [],
}

function reducer(state = initialState, action: ActionType){
    switch (action.type) {
        case SET_USER:
            return {...state, userInfo: action.payload}
        case SET_TOKEN:
            return {...state, token: action.payload}
        default:
            return state
    }
}
export default reducer;