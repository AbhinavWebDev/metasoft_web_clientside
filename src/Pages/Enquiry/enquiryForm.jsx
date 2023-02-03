import * as React from 'react';
import { useEffect } from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,

  CardHeader,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { logOut, register } from "../../Redux/Actions/AuthAction";
import {Button } from "@mui/material";
import "./enquiryForm.css";
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@mantine/core';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxWidth: 500,
  borderRadius:4
  
};
const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

//Data
const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
  location: "",
  enquiry:"",
  product:"",
};

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//validation schema
let validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
    enquiry:Yup.string().required("Required"),
    product:Yup.string().required("Required"),
});

const EnquiryForm = () => {
  const navigate  = useNavigate();
  const { enquirystatus } = useSelector((state) => state.authReducer);

  const classes = useStyle();
  const dispatch = useDispatch();
  const onSubmit = (values,{resetForm}) => {
    dispatch(register(values));
    resetForm({values:''})
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if(enquirystatus===true){
      setOpen(true)
    }
    else{
      setOpen(false) 
    
      
    }
  }, [enquirystatus]);




  return (
    <>
    <div className='enquiry'>

   
      <Grid  container justify="center" spacing={1} >
        <Grid item md={6}>
          <Card className={classes.padding}>
            <div className="image">
              {/* <img src={Logo} alt="" /> */}
              <h3>Brand Name </h3>
              <p>Product Enquiry!</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({  values,isValid }) => {
                return (
                
                  <Form>
                    <CardContent  >
                      <Grid item container spacing={3} justify="center">
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            name="fullName"
                            value={values.fullName}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Location"
                            variant="outlined"
                            fullWidth
                            name="location"
                            value={values.location}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Mobile Number"
                            variant="outlined"
                            fullWidth
                            name="mobile"
                            value={values.mobile}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                            name="product"
                            value={values.product}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Enquiry"
                            variant="outlined"
                            fullWidth
                            multiline
                            name="enquiry"
                            value={values.enquiry}
                            component={TextField}
                          />
                        </Grid>

                       
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                       disabled={ !isValid}
                        variant="contained"
                        color="primary"
                        type="Submit"
                        
                      >
                        Send Enquiry
                      </Button>
                    </CardActions>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Grid>
      </Grid>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class='modals'>
        <div class="wrapperAlert">

<div class="contentAlert">

  <div class="topHalf">

    <p><svg viewBox="0 0 512 512" width="100" title="check-circle">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
      </svg></p>
    <h1>Thanks</h1>

  </div>

  <div class="bottomHalf">

    <p>Your response has been recorded.</p>

    <Button
                       
                        variant="contained"
                        color="primary"
                        type="Submit"
                        onClick={()=> {dispatch(logOut())}} 
                      >
                        Submit another response
                      </Button>

  </div>

</div>        

</div>
</div>
        </Box>
      </Modal>
    </>
  );
};

export default EnquiryForm;








