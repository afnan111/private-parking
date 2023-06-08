import React from 'react';
import {Link} from "react-router-dom"
import {logoutUser} from "../actions/user_action"
import { useDispatch,useSelector } from 'react-redux';
//import {userProfile} from "../actions/user_action"

const Sidebar = () => {
   const dispatch = useDispatch();
 
 
   const {currentUser} = useSelector(state => state.userLoginReducer) ;
    checkout (
        <div style={{marginTop:"10%"}}>
            <ul>
               <li className="list_item"> <i className="fas fa-home text-white"></i> <Link  to="/dashboard/" 
               style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Home </Link>  </li>
               <hr style={{color:"white"}} />

            
               <li> <i className="fas fa-address-book text-white"></i>
                <Link  to="/dashboard/allBook"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> All Bookings </Link>  </li>
               <hr style={{color:"white"}} />
              
                
                  {currentUser.user.isAdmin ? (
                      <>
                       <li> <i className="fas fa-book text-white"></i> 
               <Link  to="/dashboard/addBook"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Add Booking </Link>  </li>
               <hr style={{color:"white"}} />
                       <li> <i className="fas fa-users text-white"></i> 
                       <Link  to="/dashboard/managecustomer"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Manage User </Link>  </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-registered text-white"></i> 
                       <Link  to="/dashboard/stuReqIssue"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Issue Request </Link>  </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> <Link  to="/dashboard/Recommandation"  
                        style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Booking Recommandation </Link>  </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> <Link  to="/dashboard/allcheckinBook" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> All Reserved Booking </Link>  </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> <Link  to="/dashboard/issue_checkout" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Today Issue Booking </Link>  </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> <Link  to="/dashboard/checkoutBook" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Today checkout Booking </Link>  </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-users text-white"></i> <Link  to="/dashboard/addEmployee" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Add user </Link>  </li>
                       <hr style={{color:"white"}} />
                       </>
                       
                  ): (
                    
                      <>
                    {/* <li> <i className="fas fa-users"></i> 
                    <Link  to="/dashboard/managecustomer"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Borrowed Book</Link>  </li> */}
                    {/* <hr style={{color:"white"}} /> */}
                    <li> <i className="fas fa-registered text-white"></i> 
                    <Link  to="/dashboard/RecomBook"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Recommended Booking </Link>  </li>
                    <hr style={{color:"white"}} />
                    <li> <i className="fas fa-book text-white"></i> <Link  to="/dashboard/checkinBook" 
                      style={{textDecoration:"none",color:"#f1f1f1",fontSize:"13px",marginLeft:"5px"}}> Curently  Booking</Link>  </li>
                    <hr style={{color:"white"}} />
                    </>
                  )}

                
               <li onClick={() => dispatch(logoutUser())}> <i className="fas fa-power-off text-white"></i> 
                      <span style={{fontSize:"13px",color:"#fff",marginLeft:"2px"}}> Logout </span>    </li>
            </ul>
        </div>
    );
};

export default Sidebar;