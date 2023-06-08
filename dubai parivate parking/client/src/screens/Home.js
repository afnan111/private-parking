import React from 'react';
import { Link } from "react-router-dom"
import customerIMage from "../Images/customer4.gif"
import AdminIMage from "../Images/admin2.jpg"

const Home = () => {
    checkout (
        <div className="HomePage"   >

            <div className="col-md-6 m-auto dsds" style={{display:"flex" ,border:'none' ,padding:"5%"}}>
                <div className="card"style={{marginLeft:"15%" ,border:'none'}}>
                   <img src={AdminIMage} alt="customerIMage" style={{height:"150px",width:"190px"}} />
                   <br />
                   <Link className="link_class" to="/adminLogin"> <h5  >Signin as  Admin</h5></Link>
                </div>
                <div className="card" style={{marginLeft:"10%",border:'none'}}>
                   <img src={customerIMage} alt="customerIMage" style={{height:"150px",width:"150px"}} />
                   <br />
                   <Link className="link_class" to="/login"> <h5  >Login as  Customer</h5></Link>  
                </div>
            </div>
      
            
        </div>
    );
};

export default Home;
