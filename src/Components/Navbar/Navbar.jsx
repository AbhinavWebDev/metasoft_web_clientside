import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logOut } from '../../Redux/Actions/AuthAction';
import { useDispatch} from "react-redux";
import { Modal, Stack } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 360,
};
export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const [openLogout, setOpenLogout] = React.useState(false);
  const handleOpenLogout = () => setOpenLogout(true);
  const handleCloseLogout = () => setOpenLogout(false);
  const handleLogout=()=>dispatch(logOut())
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       User Enquiry Data
          </Typography>

         <Button
            onClick={handleOpenLogout}
            variant="contained" 
            color="success"
            endIcon={<LogoutIcon />}
           
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
          open={openLogout}
          onClose={handleCloseLogout}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Confirm Logout
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure want to Logout.
            </Typography>

            <Stack direction="row" spacing={3} padding={2}>
              <Button variant="contained" onClick={handleLogout}>
                Yes, log out
              </Button>
              <Button variant="outlined" onClick={handleCloseLogout}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>
    </Box>
</>
  );
}