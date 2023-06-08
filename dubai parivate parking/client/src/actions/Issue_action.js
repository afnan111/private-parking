import axios from "axios"

export const issueABook = (book)=> async dispatch =>{
    dispatch({
        type:'ISSUE_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/issues/issueRequest',book);
        // const response2 = await axios.get('/api/books/allBook');
     
       
        dispatch({
           type:'ISSUE_REQUEST_SUCCESS',
           payload:response.data
       })
      
    } catch (error) {
       dispatch({
           type:'ISSUE_REQUEST_FAILED',
           payload:error
       })

    }
}

export const singleissueABook = (postId)=> async dispatch =>{
    dispatch({
        type:'SINGLE_ISSUE_REQUEST'
    })
    
    try {
        const response = await axios.post('/api/issues/singlecheckinBook',{postId});
        dispatch({
           type:'SINGLE_ISSUE_REQUEST_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'SINGLE_ISSUE_REQUEST_FAILED',
           payload:error
       })
       
    }
}

export const getUsercheckinBook = () => async (dispatch, getState) => {
    dispatch({
        type: "USER_checkin_BOOK"
    });
    const config = {
        headers: {
            "Content-Type": "application/json",
            areaization: "Bearer " + localStorage.getItem("jwt"),
        },
    };

    try {
        const response = await axios.get(`/api/issues/checkinBook`, config);
        dispatch({
            type: "USER_checkin_BOOK_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "USER_checkin_BOOK_FAILED",
            payload: error,
        });
    }

};

export const getAllcheckinBook = () => async (dispatch) => {
    dispatch({
        type: "ALL_checkin_BOOK"
    });
   

    try {
        const response = await axios.get(`/api/issues/allcheckinBook`);
      
        dispatch({
            type: "ALL_checkin_BOOK_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "ALL_checkin_BOOK_FAILED",
            payload: error,
        });
    }

};
export const filterallcheckinBook = (searchKey)=> async dispatch =>{
   
    var filterItem ;
    try {
        const response = await axios.get('/api/issues/allcheckinBook');
        
        filterItem = response.data.filter(item => item.userName.toLowerCase().includes(searchKey.toLowerCase()));
      
        dispatch({
            type: "ALL_checkin_BOOK_SUCCESS",
           payload:filterItem
       })
    } catch (error) {
       dispatch({
        type: "ALL_checkin_BOOK_FAILED",
           payload:error
       })
    }
}

export const getAllBookIssueReq = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_ISSUES_REQUEST'
    })
    try {
        const response = await axios.get('/api/issues/allIssueRequest');
        dispatch({
           type:'GET_All_ISSUES_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_ISSUES_FAILED',
           payload:error
       })
    }
}

export const getAllBookcheckoutReq = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_checkout_REQUEST'
    })
    try {
        const response = await axios.get('/api/issues/allcheckoutedBook');
        dispatch({
           type:'GET_All_checkout_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_checkout_FAILED',
           payload:error
       })
    }
}

export const checkinReq = (bookId,postId)=> async dispatch =>{
   
    try {
         await axios.post('/api/issues/checkinReqAccept' , {bookId,postId})
       
        const response2 = await axios.get('/api/issues/allIssueRequest');
        dispatch({
           type:'GET_All_ISSUES_SUCCESS',
           payload:response2.data
       })
      } catch (error) {
        console.log(error);
      }
  
}


export const checkoutReqAction = (obj)=> async dispatch =>{
   
    try {
         await axios.post('/api/issues/checkoutReq' , obj)
       
       
        dispatch({
           type:'GET_checkout_SUCCESS',
           
       })
      } catch (error) {
        console.log(error);
      }
  
}


export const checkinReqDeletedByAdmin = (postId)=> async dispatch =>{
     
    
    
    try {
       await axios.post('/api/issues/issueReqDelete' , {postId})
       
        const response2 = await axios.get('/api/issues/allIssueRequest');
        dispatch({
           type:'GET_All_ISSUES_SUCCESS',
           payload:response2.data
       })
      } catch (error) {
        console.log(error);
      }
  
}

export const issueABookcheckout = (postId)=> async dispatch =>{

    const config = {
        headers: {
            "Content-Type": "application/json",
            areaization: "Bearer " + localStorage.getItem("jwt"),
        },
    };
 
    try {
        await axios.post('/api/issues/checkinBookDelete',{postId});
        const response2 = await axios.get(`/api/issues/checkinBook`, config);
       
        dispatch({
            type: "USER_checkin_BOOK_SUCCESS",
            payload: response2.data,
        });
      } catch (error) {
        console.log(error);
      }
  
    
}