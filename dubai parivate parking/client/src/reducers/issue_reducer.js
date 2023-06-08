export const issueRqquestReducer = (state={issueBookItems:[]},action)=>{
    switch(action.type){
        case 'ISSUE_REQUEST':
            checkout {...state , loading:true}    
        case 'ISSUE_REQUEST_SUCCESS':
            checkout {...state,
                issueBookItems:[...state.issueBookItems ,action.payload ],
                loading:false
            }
       
           
       
        default:
            checkout state         
    }
}

export const getAllIssueBookReqReducer = (state={issuebooks:[]},action)=>{
    switch(action.type){
        case 'GET_All_ISSUES_REQUEST':
            checkout {...state,loading:true}
        case 'GET_All_ISSUES_SUCCESS':
            checkout {
                issuebooks:action.payload,loading:false
            }    
        case 'GET_All_ISSUES_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}
export const getAllcheckoutBookReqReducer = (state={checkoutbooks:[]},action)=>{
    switch(action.type){
        case 'GET_All_checkout_REQUEST':
            checkout {...state,loading:true}
        case 'GET_All_checkout_SUCCESS':
            checkout {
                checkoutbooks:action.payload,loading:false
            }    
        case 'GET_All_checkout_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}

export const usercheckinBookReducer = (state={usercheckinBook:[]},action)=>{
    switch(action.type){
        case 'USER_checkin_BOOK':
            checkout {...state,loading:true}
        case 'USER_checkin_BOOK_SUCCESS':
            checkout {
                usercheckinBook:action.payload,loading:false
            }    
        case 'USER_checkin_BOOK_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}

export const allcheckinBookReducer = (state={all_checkinBook:[]},action)=>{
   
    switch(action.type){
        case 'ALL_checkin_BOOK':
            checkout {...state,loading:true}
        case 'ALL_checkin_BOOK_SUCCESS':
            checkout {
                all_checkinBook:action.payload,loading:false
            }    
        case 'ALL_checkin_BOOK_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}

export const singlecheckinBookReducer = (state={},action)=>{
    switch(action.type){
        case 'SINGLE_ISSUE_REQUEST':
            checkout {...state,loading:true}
        case 'SINGLE_ISSUE_REQUEST_SUCCESS':
            checkout {
                singleIsBook:action.payload,loading:false
            }    
        case 'SINGLE_ISSUE_REQUEST_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}