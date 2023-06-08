
import React,{useEffect} from 'react';
import {getAllBookcheckoutReq} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';

const checkoutBook = () => {

    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getAllBookcheckoutReq())
      },[])



    const {checkoutbooks} = useSelector(state => state.getAllcheckoutBookReqReducer)
    var filterd;
    const filterOut = ()=>{
        const todayDate = moment(new Date()).format('YYYY-MM-DD');
        //console.log(todayDate)
         filterd = checkoutbooks && checkoutbooks.filter(item =>  (item.updatedAt.slice(0,10) == todayDate))
        
    }

    filterOut()
    checkout (
        <div className="col-md-10 m-auto pt-4">
        {!filterd.length  ? <>
        <div className="bg-success p-2 text-center">
        <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Yet No booked checkin Today</h4>
        </div>
        
        </> : 
        <>
          <h4 style={{textAlign:"center",fontFamily:"sans-serif"}}>Today checkin Book</h4>
          <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info'>
  <tr>
      <th style={{textAlign:"center"}}>Book</th>
      <th style={{textAlign:"center"}}>area</th>
      <th style={{textAlign:"center"}}>owner</th>
      <th style={{textAlign:"center"}}>customer Name</th>
      <th style={{textAlign:"center"}}>area</th>
  </tr>
</thead>
<tbody>
  
{filterd && filterd.map(book=>{

 
 checkout <tr key={book._id}>
      <td style={{textAlign:"center"}}>{book.title}</td>
      <td style={{textAlign:"center"}}>
          {book.area}
      </td >
      <td style={{textAlign:"center"}}>
          {book.owner}
      </td>
     
      <td style={{textAlign:"center"}}>
         {book.userName}
      </td>
      <td style={{textAlign:"center"}}>
         {book.userarea}
      </td>

  </tr>

})}
</tbody>

</table>
    
     </> }
      </div>
    );
};

export default checkoutBook;