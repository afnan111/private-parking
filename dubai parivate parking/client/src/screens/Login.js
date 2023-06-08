import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch, useSelector } from 'react-redux'
import customerIMage from "../Images/customer4.gif"
const Login = () => {

    const [password, setPassword] = useState("123456");
    const[show,setShow] = useState("password") 
    const [roll_no, setRoll_no] = useState("CS3150")
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password, roll_no }
        dispatch(loginUser(user))
    };

    const handleShow = ()=> {
        if(show === "password"){
            setShow("text")
        } else {
            setShow("password")
        }
    }

    checkout (
        <div >
            <div className="LoginPage"></div>
            <div className="login_container">
               
                    <div className="col-md-6 m-auto" style={{opacity:1}}>
                        <div style={{marginLeft:"37%"}}>
                        <div id="circle"></div>
                          <h3 className="pps" style={{fontFamily:"sans-serif"}}>Private Parking Dubai</h3>
                        </div> 
<img src={customerIMage} alt="customerIMage" style={{height:"120px",width:"120px",borderRadius:"50%"}} />
                    <div style={{marginTop:"20px"}}>
                        <input type="text" className="form-control" style={{height:"30px",borderRadius:"20px"}}
                         placeholder="Emrites ID" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <input type="text"  style={{height:"30px",borderRadius:"20px"}}
                        className="form-control" type={show} placeholder="password"
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-eye"  onClick={() =>  handleShow()}></i>
                    </div>
                     <br />



                    <button style={{width:"100%",height:"30px",color:"white",borderRadius:"20px",backgroundColor:"blue"}} onClick={() => PostData()}>
                        Login 
                    </button>
                    </div>
                    <br />
                    <Link to="/register"  style={{  color:"white",textDecoration:"none"}}>  Register Here</Link>
               
            </div>
        </div>
    );
};



export default Login;