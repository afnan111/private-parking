import React,{useState,useEffect} from 'react';
import {getAllBookIssueReq ,checkinReq,checkinReqDeletedByAdmin} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'

const IssueRequest = () => {

    const dispatch = useDispatch() ;
    
    useEffect(()=> {
        dispatch(getAllBookIssueReq())
    },[])
   
   

    const {issuebooks} = useSelector(state => state.getAllIssueBookReqReducer)
    const newcheckinBook = issuebooks && issuebooks.filter(item => !item.isIssue && !item.isRecom)

    checkout (
        <div className="col-md-10 m-auto">
             <p style={{fontFamily:"sans-serif",fontSize:"30px",textAlign:"center",padding:"10px"}}>Customer Requested to Admin for booking</p>
            <table  className='table table-bordered table-responsive-sm'>


<thead className='thead-dark'>
    <tr >
        <th>Book Name</th>
        <th>area</th>
        <th> Name</th>
        <th>Area</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    
{newcheckinBook && newcheckinBook.map(book=>{

    checkout <tr key={book._id} >
        <td>{book.title}</td>
        <td>
            {book.area}
        </td>
        <td>
            {book.userName}
        </td>
        <td>
            {book.userarea}
        </td>
       
        <td>
           
             <button onClick={() => dispatch(checkinReq(book._id,book.bookId))} className="btn btn-success">Accepted</button> { "  "}
             <button onClick={() => dispatch(checkinReqDeletedByAdmin(book._id))} className="btn btn-danger">Rejected</button>
        </td>

    </tr>

})}
</tbody>

</table>
        </div>
    );
};

export default IssueRequest;