import React,{useEffect,useState} from 'react';
import {getUsercheckinBook ,singleissueABook ,issueABookcheckout,checkoutReqAction} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Modal,Button} from "react-bootstrap"
import Moment from 'react-moment';
import moment from 'moment';

const UsercheckinBook = () => {
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getUsercheckinBook())
      },[])
      const [show, setShow] = useState(false);
      const [date,setDate] = useState(null)
      const [dateTo,setDateTo] = useState(null)
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
    const {usercheckinBook} = useSelector(state => state.usercheckinBookReducer)
    const {singleIsBook} = useSelector(state => state.singlecheckinBookReducer)
     
    const checkinBook = usercheckinBook && usercheckinBook.filter(item => item.isIssue);
   
    const callantherFunction = (postId)=>{
        dispatch(singleissueABook(postId))
    }
    
     const handleModal = (postId,cDate) => {
         setDate(cDate) 
        //  cDate.setDate(cDate.getDate() + 7);
        //  console.log(cDate)
         setShow(true);
         callantherFunction(postId)
     }
    var dateFrom ;
    var dayDiff ;
    const now = new Date()
  if(date){
    //dateFrom = moment(date + 7 * 24 * 3600 * 1000).format('YYYY-MM-DD');
    var result = new Date(date) ;
    result.setDate(result.getDate() + 7);
    dateFrom= result ;

    var today = moment(new Date());
    var end = moment(result); // another date
var duration = moment.duration(today.diff(end));
var days = duration.asDays();
dayDiff = days
      
  }


  const hanndleReqandcheckout = (book)=>{
      dispatch(issueABookcheckout(book.bookId))

       dispatch(checkoutReqAction(book))
  }
  
 
 
    checkout (
        <div className="col-md-10 m-auto pt-4">
          {!checkinBook.length  ? <>
          <div className="bg-success p-2 text-center">
          <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Yet you havn't  any Booking</h4>
          </div>
          
          </> : 
          <>
            <h4 style={{textAlign:"center",fontFamily:"sans-serif"}}>My  Booking</h4>
            <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info'>
    <tr>
        <th style={{textAlign:"center"}}>Booking</th>
        <th style={{textAlign:"center"}}>Area</th>
        <th style={{textAlign:"center"}}>Owner</th>
        <th style={{textAlign:"center"}}>Actions</th>
    </tr>
</thead>
<tbody>
    
{checkinBook && checkinBook.map(book=>{

    checkout <tr key={book._id}>
        <td style={{textAlign:"center"}}>{book.title}</td>
        <td style={{textAlign:"center"}}>
            {book.area}
        </td >
        <td style={{textAlign:"center"}}>
            {book.owner}
        </td>
       
        <td style={{textAlign:"center"}}>
            {/* <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i> */}
             {/* <button onClick={() => console.log("")} className="btn btn-success">Renew</button> */}
             <button onClick={() => hanndleReqandcheckout(book)} className="btn btn-danger mr" style={{marginRight:"5px"}}>checkout </button>
             <button onClick={() => handleModal(book.bookId,book.createdAt)} className="btn btn-success">Details</button>
        </td>

    </tr>

})}
</tbody>

</table>
      <div>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
            <h3><b>  Name : </b>{singleIsBook && singleIsBook.title}</h3>
            <p>  <b>Owner:</b> {singleIsBook && singleIsBook.area}</p>
            <p> <b>Area : </b>{singleIsBook && singleIsBook.owner}</p>
            <p> <b>Originally  : </b>{singleIsBook && singleIsBook.year}</p>
            {/* <p>{date && date.substring(0,10)}</p> */}
            <p> <b>Checkin Date:</b>{date &&  <Moment format="YYYY-MM-DD">{date}</Moment>}</p>
          
            <p> <b>Checkout Date :</b> {date &&  <Moment format="YYYY-MM-DD">{dateFrom}</Moment>}</p>
          
          
            <p>  {Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) : null }  </p>
            <h3> Fine : {Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) * 15 : 0 } </h3>
            {/* <p> {dateFrom && dateFrom}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
      </div>
       </> }
        </div>
    );
};

export default UsercheckinBook;
