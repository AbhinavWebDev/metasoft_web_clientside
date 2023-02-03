import * as React from 'react';
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { logIn, logOut } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.authReducer);
  const [open, setOpen] = React.useState(false);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  React.useEffect(() => {
    if(error===true){
      setOpen(true)
      dispatch(logOut())
    }
  }, [error]);
  
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    number: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(data));
  };

  return (
    <div className="Signup">
      <div className="card">
        <div className="image">
          <p>Welcome Back!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Log In </h3>

          <TextInput
            mt="sm"
            label="User Name"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            value={data.username}
          />

          <PasswordInput
            label="Password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />

          

          <Button style={{marginTop:"20px"}} variant="contained" type="submit" mt="sm">
            Log In
          </Button>
        </form>
        <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid Email or Password!
        </Alert>
      </Snackbar>
    </Stack>
      </div>
    </div>
  );
}


