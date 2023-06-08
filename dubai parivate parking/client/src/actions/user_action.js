import axios from 'axios';

export const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("/api/users/signup", user);
        console.log(res)
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_LOGIN_REQUEST'
    })

    try {
        const res = await axios.post("/api/users/signin", user);
        console.log(res)
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: res.data
        })
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        window.location.href = "/dashboard";
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAILED',
            payload: error
        })
    }
}


export const logoutUser = () => async dispatch => {

    localStorage.removeItem('currentUser');
    window.location.href = "/";

}


export const userProfile = () => async (dispatch, getState) => {
    dispatch({
        type: "USER_PROFILE_REQUEST"
    });
    const config = {
        headers: {
            "Content-Type": "application/json",
            areaization: "Bearer " + localStorage.getItem("jwt"),
        },
    };

    try {
        const response = await axios.get(`/api/users/profile`, config);
        dispatch({
            type: "USER_PROFILE_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "USER_PROFILE_FAILED",
            payload: error,
        });
    }

};

export const getAllcustomer = ()=> async dispatch =>{
    dispatch({
        type:'GET_customerS_REQUEST'
    })
    try {
        const response = await axios.get('/api/users/allcustomer');
   
        dispatch({
           type:'GET_customerS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_customerS_FAILED',
           payload:error
       })
    }
}

export const removeAcustomer = (postId)=> async dispatch =>{

   
 
    try {
         await axios.post('/api/users/removecustomer',{postId});
        const response2 = await axios.get(`/api/users/allcustomer`);
       
        dispatch({
            type:'GET_customerS_SUCCESS',
            payload:response2.data
        })
      } catch (error) {
        console.log(error);
      }
  
    
}