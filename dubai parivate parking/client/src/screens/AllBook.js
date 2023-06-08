import React,{useState,useEffect} from 'react';
import {getAllBook,filterBook} from "../actions/book_action"
import {issueABook,getAllcheckinBook} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Toast,Spinner} from "react-bootstrap"
const AllBook = () => {
    const dispatch = useDispatch() ;
    const [searchKey,setSearchKey] = useState("")
    const [show, setShow] = useState(false);
    const[bootTitle,setBookTitle] = useState(null)
   const[error,setError] = useState(false)
    
    useEffect(()=> {
        dispatch(getAllBook())
        dispatch(getAllcheckinBook())
    },[show])
    
   const {books} = useSelector(state => state.getAllBookReducer)
   //const {userbooks} = useSelector(state => state.usercheckinBookReducer)
   const {all_checkinBook} = useSelector(state => state.allcheckinBookReducer)
   const {currentUser} = useSelector(state => state.userLoginReducer)
   const userId = currentUser.user._id ;
  const  userarea  =  currentUser.user.area ;
  const userName = currentUser.user.name ;
  let sendReq = true
let filterBook22 = all_checkinBook && all_checkinBook.filter(book=> book.userId == userId);
let newBooksId = filterBook22 && filterBook22.map(book=> book.bookId)

    

    const postData = (book)=>{

       
        if(newBooksId && newBooksId.includes(book._id)){
            console.log("You can not add one more book")
            setError(true);
            setTimeout(()=>{
              setError(false)
            },3000)
            checkout ;
        }

        if(book.copies < 1){
            console.log("No copies available")
            checkout;
           

        }
        const {title,area,owner,year,_id,copies} = book ;
     
        const issueUser = {
            title,area,owner,year,userId,bookId:_id,userarea,userName,copies
        }
        if(book.copies){
            dispatch(issueABook(issueUser))
            setBookTitle(title)
            setShow(true) ;
            dispatch(getAllBook())
        } else {
            alert("book not available")
        }
        setTimeout(()=>{
            setShow(false)
        }, 5000)
        // 
    }

    checkout (
        <div>
               <div className="col-md-10 m-auto" >
                  <h3 className='text-center   p-2'  >My All BOOking  Slots  </h3>
                  <br />
                  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>You successfully send issue request for {bootTitle}  </Toast.Body>
                  </Toast>
              

              
            </div>

            {error && <div className="alert alert-danger"> You have already request for this booking </div>}
         
           {    !books.length ?
           <div style={{marginLeft:"40%",marginTop:"5%"}}>
           <Spinner animation="border" variant="danger" />
           </div>
           
           : (
               <>
                  <div className="col-md-8 m-auto" style={{display:"flex"}}>
                  <input type="text"  className="form-control" placeholder="search book by Name"  style
                  ={{height:"50px"}}
                  onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
                  <button  onClick={() => dispatch(filterBook(searchKey))} className="btn btn-primary">Search  </button>
                  </div>
                  
                  <div className="col-md-10 m-auto">
      
                  <table  className='table table-bordered table-responsive-sm' style={{marginTop:"20px"}}>
      
                    
      
      <thead className='thead-dark' >
          <tr>
              <th>  No.</th>
              <th>Name</th>
              <th>Area</th>
              
              <th>Status</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
      {books && books.map((book,index)=>{
      
          checkout <tr key={book._id}>
                  <td>{index+1}</td>
              <td>{book.title}</td>
              <td>
                  {book.area}
              </td> 
              <td>{book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</td>
              <td>
                 
                  {currentUser.user.isAdmin && (
                      <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i>
                  )}
                  {!currentUser.user.isAdmin && (
                      <button onClick={() => postData(book)} className={`btn btn-success`}>Booking</button>
                  )}
                 
              </td>
      
          </tr>
      
      })}
      </tbody>
      
      </table>
      </div>
      </>
           )}
        </div>
    );
};

export default AllBook;