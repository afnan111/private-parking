import React,{useEffect} from 'react';
import {userProfile} from "../actions/user_action"
import { useDispatch, useSelector } from 'react-redux'
import Image from "../Images/profile2.png"
const UserHome = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
        dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    console.log("UserHome",currentUser)
    checkout (
        <div className="col-md-4 m-auto">
              <div className="card mt-2">
                  <img src={Image} alt="mohen mondal" style={{height:"150px",width:"150px",borderRadius:"50%",marginLeft:"33%"}} />
                  <h3 style={{textAlign:"center"}}>{currentUser && currentUser[0] && currentUser[0].name}</h3>
                  <div style={{backgroundColor:"rgb(36, 59, 137)",padding:"20px"}}>
                   { currentUser && currentUser[0] && currentUser[0].isAdmin ?
                    <p style={{fontSize:"22px",color:"white"}}> <b> Id : </b>{currentUser && currentUser[0] && currentUser[0].roll_no}</p>
                   : <>
                      <p style={{fontSize:"12px",color:"white"}}> <b> Email Id :</b> {currentUser && currentUser[0] && currentUser[0].email}</p>
                  <p style={{fontSize:"12px",color:"white"}}> <b>Phone Number :</b> {currentUser && currentUser[0] && currentUser[0].phone_no}</p>
                  <p style={{fontSize:"12px",color:"white"}}> <b> No : </b>{currentUser && currentUser[0] && currentUser[0].roll_no}</p>
                  <p style={{fontSize:"12px",color:"white"}}><b>area : </b>{currentUser && currentUser[0] && currentUser[0].area}</p>
                  <p style={{fontSize:"12px",color:"white"}}> <b> Year :</b> {currentUser && currentUser[0] && currentUser[0].addmission_year}</p>
                   </>}

                 
                  </div>
                  {/* <p>{currentUser && currentUser[0] && currentUser[0].name}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].email}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].phone_no}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].roll_no}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].area}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].addmission_year}</p> */}
              </div>
        </div>
    );
};

export default UserHome;