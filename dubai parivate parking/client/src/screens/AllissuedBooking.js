import React,{useEffect,useState} from 'react';
import {getAllcheckinBook,filterallcheckinBook} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'

import TableDate from "../components/TableDate"

const AllcheckinBook = () => {
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getAllcheckinBook())
      },[])
   
      const [searchKey,setSearchKey] = useState("")
      
    const {all_checkinBook} = useSelector(state => state.allcheckinBookReducer)
 
     
   
    const fetchDataAgaib = ()=>{
        dispatch(getAllcheckinBook())
    }
  
 

    checkout (
        <div className="col-md-10 m-auto pt-4">
            <h4 style={{textAlign:"center"}}> checkin Booking</h4>
            <div className="col-md-8 m-auto" style={{display:"flex"}}>
            <input type="text"  className="form-control" placeholder="search book by Name"  style
            ={{height:"50px"}}
            onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
            <button  onClick={() => dispatch(filterallcheckinBook(searchKey))} className="btn btn-primary">Search  </button>
            </div>
            <br />
          <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info'>
    <tr>
        <th>Booking</th>
        <th>area</th>
        <th>Name</th> 
        <th>checkin Date</th>
        <th>checkout Date</th>
        <th>Dues</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    
{all_checkinBook && all_checkinBook.map(book=>{
     
     checkout <TableDate key={book._id} book={book} fetchDataAgaib={fetchDataAgaib} />

})}

</tbody>

</table>
      
  
        </div>
    );
};

export default AllcheckinBook;
