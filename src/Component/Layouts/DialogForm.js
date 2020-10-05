import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'black',
    height: 48,
    width: "200%",
    padding: '20px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    alignItems: 'center',
    fontSize: '20px'
  });


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
        
    <div 
      //   style={{
      //   alignItems:'center',
      //   justifyContent:'center',
      //   display:'flex',
      //   margin:'15px'
      // }}
      >
      {/* <Button variant="outlined" color="" onClick={handleClickOpen}>
            Add New Bus
      </Button> */}

      <MyButton variant="outlined" onClick={handleClickOpen}>Update</MyButton>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Bus Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
             <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="busNo"
                  label="Bus Number"
                  name="busNo"
                  autoComplete="BusNo"
                  autoFocus
              />

              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="busRoute"
                  label="Bus Route"
                  name="busRoute"
                  autoComplete="Bus Route"    
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="busCapacity"
                  label="Bus Capacity"
                  name="busCapacity"
                  autoComplete="Bus Capacity"
              />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
