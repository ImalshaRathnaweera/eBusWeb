import React, {useState, useEffect} from 'react'
import { Grid, } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root: {
       '& .MuiFormControl-root': {
           width: '80%',
           margin: theme.spacing(1)
       } 
    }
}))


const initialFValues = {
    busNo: '',
    routeNo: '',
    startPoint: '',
    endPoint: '',
    busCapacity: '',
    isBookEnable: false,
    forwardStartPoint: '',
    startDepartureTime
    backwardStartPoint: '',
    endDepartureTime: '',
}



export default function BusRegisterFunc() {

    const classes = useStyles();

    useForm(initialFValues);

    
    return (
        <form className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      label="Bus Number"
                      name="busNo"
                      value={values.busNo}
                      onChange={handleInputChange}
                    />
                    <TextField
                      variant="outlined"
                      label="Route Number"
                      name="routeNo"
                      value={values.routeNo}
                      onChange={handleInputChange}
                    />
                    <TextField
                      variant="outlined"
                      label="Bus Route"
                      name="busRoute"
                      value={values.busRoute}
                      onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>
              
            </Grid>
        </form>
    )
}



