


import { COMPLETE_TASK, UNCOMPLETE_TASK } from "../actions/CompletedAction";


const initialState = {
    data: [
    ]

}


export default function CompleteReducer(state = initialState, actions) {

    switch (actions.type) {
        case COMPLETE_TASK: {
            let newTask = [...state.data, actions.payload]
            return {
                ...state,
                data: newTask,
            };
        }
        case UNCOMPLETE_TASK: {
            let newTask = state.data.filter((data) => data.id !== actions.payload)
            return {
                ...state,
                data: newTask,
            };
        }
        
        default:
            return state;
    }



}