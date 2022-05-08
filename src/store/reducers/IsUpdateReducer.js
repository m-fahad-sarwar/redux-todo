import { ISUPDATE } from "../actions/IsUpdateAction";

const initialState = {
    value: false
}

const IsUpdateReducer = (state= initialState, action) =>{
switch (action.type) {
    case ISUPDATE:
    let newState = {
        value: true
    }
    

    return newState;
        

    default:
        return state;
}


}
export default IsUpdateReducer;