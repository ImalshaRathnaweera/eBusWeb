import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, IconButton } from '@material-ui/core'

import Button from '@material-ui/core/Button';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';


const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <DirectionsBusIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Button variant="contained" color="default"
                    
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} >
                    No </Button>
                <Button variant="contained" color="primary"
                    
                    onClick={confirmDialog.onConfirm} >
                    Confirm </Button>
            </DialogActions>
        </Dialog>
    )
}