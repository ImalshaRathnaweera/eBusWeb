import React, {useState, useEffect} from 'react'
import { Grid, } from '@material-ui/core'

const initialFValues = {
    id:0,
    busNo: '',
    routeNo: '',
    busRoute: '',
    busCapacity: '',
    isBookEnable: false,
    start: '',
    destination: '',
    startTime: ''

}



export default function BusRegisterFunc() {

    const [values, setValues] = useState(initialFValues);
    const classes = useStyles();

    const handleInputChange= e
    
    return (
        <form className={classes.root}>
            <<Grid container spacing={1}>
                <Grid item xs={6}>
                    <<TextField
                      variant="outlined"
                      label="Bus Number"
                      value={values.busNo}
                      onChange={handleInputChange}
                      
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>
              
            </Grid>
        </form>
    )
}



