import React from 'react';
import  Sidebar from "../components/Sidebar"
import {Switch,Route,Link} from "react-router-dom";
import AddBook from "./AddBook"
import AllBook from "./AllBook"
import Allcustomer from "./Allcustomer"
import IssueRequest from "./IssueRequest"
import UserHome from "../components/UserHome"
import UsercheckinBook from "./UsercheckinBook"
import Recom_Book from "./Recom_Book"
import RecomdationBook from "./Recommdation"
import Messages from "./Messages"
import AllcheckinBook from "./AllcheckinBook"
import Navbar from "../components/Navbar"
import Issuecheckout from "./Issue_checkout";
import checkoutBook from "./checkoutBook"
import Addemployee from "./Add_Employee"

const Dashboard = () => {
    checkout (
         <div>
             <div style={{marginBottom:"34px"}}>
               <Navbar style={{  backgroundColor:"#243b89"}} />
             </div>
        
            <div style={{display:"flex"}}>
                  <div style={{height:"940px" ,width:"14%",backgroundColor:"#243b89"}}>
                       <Sidebar  />         
                  </div>
                  <div style={{height:"940px" ,width:"80%"}}>
                  <Switch>
                  <Route path="/dashboard/" component={UserHome} exact />
            <Route path="/dashboard/addBook" component={AddBook} exact />
                <Route path="/dashboard/allBook" component={AllBook} exact />
                <Route path="/dashboard/managecustomer" component={Allcustomer} exact />
                <Route path="/dashboard/checkinBook" component={UsercheckinBook} exact /> 
                <Route path="/dashboard/allcheckinBook" component={AllcheckinBook} exact /> 
                <Route path="/dashboard/RecomBook" component={Recom_Book} exact /> 
                <Route path="/dashboard/Recommandation" component={RecomdationBook} exact /> 
                <Route path="/dashboard/stuReqIssue" exact component={IssueRequest} />
                <Route path="/dashboard/messages" exact component={Messages} />
                <Route path="/dashboard/issue_checkout" exact component={Issuecheckout} />
                <Route path="/dashboard/checkoutBook" exact component={checkoutBook} />
                <Route path="/dashboard/addEmployee" exact component={Addemployee} />
            </Switch>  
                  </div>
            </div>
        </div>
    );
};

export default Dashboard;