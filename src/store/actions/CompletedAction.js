
export const UNCOMPLETE_TASK = "UNCOMPLETE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"

export function uncomplete(id) {
    return {
     type:UNCOMPLETE_TASK,
     payload: id
    }
}



export function complete(data) {
      return {
       type: COMPLETE_TASK,
       payload: data
      }
  }