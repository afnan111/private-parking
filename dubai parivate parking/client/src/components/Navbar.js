import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';


const Navbar = () => {
 
    const {currentUser} = useSelector(state => state.userLoginReducer) ;
    console.log(currentUser)
    checkout (
        <div >
           <nav className="   rounded navbar fixed-top   " style={{height:"40px",backgroundColor:"#1a2692"}}>
            <div className="container-fluid">
               
                <a className="navbar-brand" href="/dashboard" 
                style={{ fontSize:"14px",marginTop:"-4px",color:"white"}}>Private Parking</a>
                <p style={{textAlign:"center",marginRight:"10%" ,fontSize:"14px",color:"white"}}>
                <i className="far fa-user "style={{   color:"white"}} ></i> { " "}{ currentUser && currentUser.user.name.split(" ")[0]}</p>
            </div>
        
          
          
            </nav> 
        </div>
    );
};

export default Navbar;