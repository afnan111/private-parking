import React,{useState,useEffect} from 'react';
import {getAllcustomer,removeAcustomer} from "../actions/user_action"
import { useDispatch, useSelector } from 'react-redux'

const Allcustomer = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllcustomer())
    },[])
   const {customers} = useSelector(state => state.getAllcustomerReducer)
   const filtercustomer = customers && customers.filter(item => !item.isAdmin)
    checkout (
        <div className="col-md-10 m-auto">
            <h3 style={{textAlign:"center"}}>Manage Customers</h3>
            <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark  '>
    <tr>
    <th>Serial No.</th>
        <th>Name</th>
        <th>Emrites No</th>
        <th>area</th>
        <th>  year</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
{filtercustomer && filtercustomer.map((customer,index)=>{

    checkout <tr key={customer._id}>
           <td>{index+1}</td>
        <td>{customer.name}</td>
        <td>
            {customer.roll_no}
        </td>
        <td>{customer.area}</td>
        <td>{customer.addmission_year}</td>
        <td>
            {/* <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i> */}
            <button className="btn btn-danger"  onClick={() => dispatch(removeAcustomer(customer._id))}>Remove</button>
        </td>

    </tr>

})}
</tbody>

</table>
        </div>
    );
};

export default Allcustomer;