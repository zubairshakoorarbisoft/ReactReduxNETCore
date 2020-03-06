import { combineReducers  } from 'redux'
import postReducer from './postReducer'
import usersReducer from './usersReducer'
import weatherForcastReducer from './weatherForcastReducer'
import authenticationReducer from './authenticationReducer'

export default combineReducers({
    posts: postReducer,
    users: usersReducer,
    weathers: weatherForcastReducer,
    isLoggedIn: authenticationReducer
});