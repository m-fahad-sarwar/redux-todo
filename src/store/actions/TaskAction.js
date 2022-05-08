
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const ADD_TASK = "ADD_TASK"

export function deleteTask(id) {
    return {
     type:DELETE_TASK,
     payload: id
    }
}

export function updateTask(data) {
    console.log(data)
    return {
     type: UPDATE_TASK,
     payload: data
    }
}


export function addTask(data) {
      return {
       type: ADD_TASK,
       payload: data
      }
  }