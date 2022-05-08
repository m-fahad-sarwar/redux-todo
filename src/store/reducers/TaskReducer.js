


import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/TaskAction";


const initialState = {
    data: [
    ]

}


export default function TaskReducer(state = initialState, actions) {

    switch (actions.type) {
        case ADD_TASK: {
            let newTask = [...state.data, actions.payload]
            return {
                ...state,
                data: newTask,
            };
        }
        case DELETE_TASK: {
            let newTask = state.data.filter((data) => data.id !== actions.payload)
            return {
                ...state,
                data: newTask,
            };
        }
        case UPDATE_TASK:{
            let newTasks = state.data.map((item,index) => {
                if (item.id !==  actions.payload.id) {

                    console.log(item.id,actions.payload.id)
                  return  actions.payload
                }
                else {
                  return item
                }
              })
              return {
                ...state,
                data: newTasks
              };
            
        }
        
        default:
            return state;
    }



}