export const addBookReducer = (state={bookItems:[]},action)=>{
    switch(action.type){
        case 'ADD_BOOK_REQUEST':
            checkout {...state , loading:true}    
        case 'ADD_BOOK_SUCCESS':
            checkout {...state,
                bookItems:[...state.bookItems ,action.payload ],
                loading:false
            }
       
           
       
        default:
            checkout state         
    }
}

export const getAllBookReducer = (state={books:[]},action)=>{
    switch(action.type){
        case 'GET_BOOKS_REQUEST':
            checkout {...state,loading:true}
        case 'GET_BOOKS_SUCCESS':
            checkout {
                books:action.payload,loading:false
            }    
        case 'GET_BOOKS_FAILED':
            checkout {error:action.payload,loading:false}
        default:
            checkout state         
    }
}
