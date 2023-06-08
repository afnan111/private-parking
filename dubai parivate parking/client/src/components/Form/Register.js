
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from "react-router-dom"
import * as Yup from "yup";
import "yup-phone";
import "./Register.css"
import { useDispatch } from 'react-redux'
import {registerUser} from "../../actions/user_action"

const signInSchema = Yup.object().shape({
    name:Yup.string()
    .required("Name is required")
    .min(3, "Password is too short - should be 3 chars minimum")
    .max(15, "Password is too short - should be 15 chars minimum"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
 
});


const initialValues = {
  name:"",
  email: "",
  password: "",
  area: "",
  roll_no:"",
  year:""
};

const SignInForm = () => {

  const dispatch = useDispatch() ;

 

  checkout (
      <div className="col-md-12 register-container">
    <div className="col-md-5 m-auto  " >
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values,{resetForm}) => {
        dispatch( registerUser(values))
        resetForm();
      }}
      
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        checkout (
            
          <div className="container dsds" >
              <div style={{marginLeft:"37%"}}>
                        <div id="circle"></div>
                          <h1  style={{color:"black",marginLeft:"44px",marginTop:"-70px",fontSize:"45px"}}>Parking</h1>
                        </div>
                        
          
            <Form >
            <div className="form-row"> 
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  className={
                    errors.name && touched.name ? "input-error" : null
                  }
                />
                <ErrorMessage name="name" component="span" className="error" />
              </div>

              <div className="form-row"> 
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row"> 
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <Field
                  type="text"
                  name="area"
                  placeholder="area"
                  id="area"
                  className={
                    errors.area && touched.area ? "input-error" : null
                  }
                />
                <ErrorMessage name="area" component="span" className="error" />
              </div>
              <div className="form-row"> 
                <Field
                  type="text"
                  name="roll_no"
                  placeholder="roll_no"
                  id="roll_no"
                  className={
                    errors.area && touched.area ? "input-error" : null
                  }
                />
                <ErrorMessage name="roll_no" component="span" className="error" />
              </div>

              <div className="form-row">
                <Field
                  type="number"
                  name="year"
                  id="year"
                  
                  placeholder="year"
                  className={
                    errors.area && touched.area ? "input-error" : null
                  }
                />
                <ErrorMessage name="year" component="span" className="error" />
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign Up
              </button>

            </Form>
           
            <Link to="/login" 
             style={{ color:"white",textDecoration:"none",fontSize:"16px"  }}>
                 If You have account then plz login</Link>
            </div>
           
        
        );
      }}
    </Formik>
    </div>
    </div>
  );
};

export default SignInForm;
