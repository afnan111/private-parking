import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { userRegisterReducer, userLoginReducer,getAllcustomerReducer,userProfileReducer } from "./reducers/user_reducer"
import {addBookReducer,getAllBookReducer} from "./reducers/book_reducer"
import {getAllcheckoutBookReqReducer,issueRqquestReducer,getAllIssueBookReqReducer,usercheckinBookReducer,singlecheckinBookReducer,allcheckinBookReducer} from "./reducers/issue_reducer"


const rootReducer = combineReducers({
    userRegisterReducer, userLoginReducer,getAllcustomerReducer,userProfileReducer,
    addBookReducer,getAllBookReducer,getAllcheckoutBookReqReducer,
    issueRqquestReducer,getAllIssueBookReqReducer,usercheckinBookReducer,singlecheckinBookReducer,allcheckinBookReducer
})


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {

    userLoginReducer: { currentUser }
}
const composedEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composedEnhancers(applyMiddleware(thunk)))

export default store;