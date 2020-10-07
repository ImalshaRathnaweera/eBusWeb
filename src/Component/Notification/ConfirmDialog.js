import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {DialogActions, DialogContent, DialogTitle} from '@material-ui/core';

const ConfirmDialog = (props) => { 
    const { title, children, open, setOpen, onConfirm } = props;
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
           <DialogTitle id="confirm-dialog">{title}</DialogTitle>
           <DialogContent>{children}</DialogContent>
           <DialogActions>
              <Button variant="contained" color="secondary" 
                onClick= {() => setOpen(false) }
              >
                No
              </Button>
              <Button variant="contained" 
                      onClick={ () => {
                          setOpen(false); //state func that set the state of the dialog to show/close
                          onConfirm(); // call back func when the user click 'yes'
                      }}
                      color="default">
                Confirm
              </Button>
           </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;


