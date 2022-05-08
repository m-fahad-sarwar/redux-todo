   
import { combineReducers } from "redux";

import TaskReducer from "./TaskReducer";
import IsUpdateReducer from "./IsUpdateReducer";
import CompleteReducer from "./CompletedReducer";
const RootReducer = combineReducers({
TaskReducer,
IsUpdateReducer,
CompleteReducer
})

export default RootReducer;