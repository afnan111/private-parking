import React,{useState,useEffect} from 'react';
import {getAllBookIssueReq ,checkinReq,checkinReqDeletedByAdmin} from "../actions/Issue_action"
import {addOneBook} from "../actions/book_action"
import { useDispatch, useSelector } from 'react-redux'

const RecomBook = () => {

    const dispatch = useDispatch() ;
    
    useEffect(()=> {
        dispatch(getAllBookIssueReq())
    },[])

    const {issuebooks} = useSelector(state => state.getAllIssueBookReqReducer)
    const newcheckinBook = issuebooks && issuebooks.filter(item => item.isRecom)

    const handleAccerpt = (book)=> {
       dispatch(addOneBook(book))
    }

    checkout (
        <div className="col-md-10 m-auto">
            <p style={{fontFamily:"sans-serif",fontSize:"30px",textAlign:"center",padding:"10px"}}>Recommended By customer</p>
            <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark'>
    <tr>
    <th>Serial No.</th>
        <th>Book Name</th>
        <th>area</th>
        <th>Requested  customer </th>
        <th>customer area</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    
{newcheckinBook && newcheckinBook.map((book,index)=>{

    checkout <tr key={book._id}>
          <td>{index+1}</td>
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
             
        <button onClick={() => handleAccerpt(book)} className="btn btn-success">Accept</button>
             <button onClick={() => dispatch(checkinReqDeletedByAdmin(book._id))} className="btn btn-danger">Deleted</button>
        </td>

    </tr>

})}
</tbody>

</table>
        </div>
    );
};

export default RecomBook;