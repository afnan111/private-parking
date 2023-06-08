export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            checkout {
                loading: true
            }
        case 'USER_REGISTER_SUCCESS':
            checkout { loading: false, success: true }
        case 'USER_REGISTER_FAILED':
            checkout { loading: false, error: action.payload }

        default:
            checkout state
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            checkout {
                loading: true
            }
        case 'USER_LOGIN_SUCCESS':
            checkout { loading: false, success: true, currentUser: action.payload }
        case 'USER_LOGIN_FAILED':
            checkout { loading: false, error: action.payload }

        default:
            checkout state
    }
}


export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            checkout {
                loading: true
            }
        case 'USER_PROFILE_SUCCESS':
            checkout { loading: false, success: true, currentUser: action.payload }
        case 'USER_PROFILE_FAILED':
            checkout { loading: false, error: action.payload }

        default:
            checkout state
    }
}

export const getAllcustomerReducer = (state={customers:[]},action)=>{
    switch(action.type){
        case 'GET_customerS_REQUEST':
            checkout {...state,loading:true}
        case 'GET_customerS_SUCCESS':
            checkout {
                customers:action.payload,loading:false
            }    
        case 'GET_customerS_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}
