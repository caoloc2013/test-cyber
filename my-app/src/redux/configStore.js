import { combineReducers, createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import loginHomeReducer from "./../page/moduleLogin/reducer"
import getHomeReducer from "./../page/moduleGet/reducer"
import createHomeReducer from "../page/moduleCreate/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    loginHomeReducer,
    getHomeReducer,
    createHomeReducer
})
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
export default store