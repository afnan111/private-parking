import React, { useState } from "react";
import {addOneBook} from "../actions/book_action"
import { useDispatch } from 'react-redux'
import {Toast} from "react-bootstrap"

const AddBook = () => {
    const[title,setTitle] = useState("")
    const[area,setarea] = useState("")
    const[owner,setowner] = useState("")
    const[year,setYear] = useState("")
    const[copies,setCopies] = useState("")
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

      const PostData = () => {
        const book = { title,area,owner,year,copies };
        
        dispatch(addOneBook(book));
        setShow(true)
        setTitle("")
        setarea("")
        setowner("")
        setCopies("")
        setYear("")
    };
    checkout (
        <div  className=" mt-5">
             

             <div className="card col-md-6 m-auto p-3" >
             <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"blue",color:"white",fontSize:"18px"}}>One Booking Added</Toast.Body>
              </Toast>
                   <h2 style={{textAlign:"center",marginBottom:"20px"}}>Add a New Booking</h2>
                    <div className="mb-3">
                        <input type="text" placeholder="Parking Name" style={{height:"60px"}}
                         onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Owner name" value={area}  style={{height:"60px"}}
                        onChange={(e) => setarea(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="detail" value={owner}  style={{height:"60px"}}
                        onChange={(e) => setowner(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="comment" value={year} style={{height:"60px"}}
                         onChange={(e) => setYear(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text"
                         placeholder=" Number of Slots"  style={{height:"60px"}}
                         value={copies} onChange={(e) => setCopies(e.target.value)} className="form-control" />
                    </div>  
                   


                    <button className="btn btn-primary " onClick={() => PostData()}>
                        Add Booking
                    </button>

                </div>
        </div>
    );
};

export default AddBook;