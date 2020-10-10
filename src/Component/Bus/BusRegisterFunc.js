import React, {useState, useEffect} from 'react'
import { Grid, } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import { useForm, Form } from './../Bus_Form/useForm';


const initialFValues = {
    busNo: '',
    routeNo: '',
    startPoint: '',
    endPoint: '',
    busCapacity: '',
    isReserveEnable: false,
    forwardStartPoint: '',
    forwardDepartTime:'',
    backwardStartPoint: '',
    backwardDepartTime: '',
    noOfReservation: ''
}



export default function BusRegisterFunc() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);
    
    return (
            <Form>
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
                      label="Start Point"
                      name="startPoint"
                      value={values.startPoint}
                      onChange={handleInputChange}
                    />
                    <TextField
                      variant="outlined"
                      label="End Point"
                      name="endPoint"
                      value={values.endPoint}
                      onChange={handleInputChange}
                    />
                    <TextField
                      variant="outlined"
                      label="Bus Capacity"
                      name="busCapacity"
                      value={values.busCapacity}
                      onChange={handleInputChange}
                    />
                    <TextField           // CheckBox
                      variant="outlined"   
                      label="Bus Capacity"
                      name="isReserveEnable"
                      value={values.isReserveEnable}
                      onChange={handleInputChange}
                    />
                    
                </Grid>
                
                  {/* <FormControl>
                    <FormLabel>Maximum number of reservations</FormLabel>
                    
                    <FormHelperText></FormHelperText>
                  </FormControl> */}
                <div>
                    <TextField
                        variant="outlined"
                        label="Start Point"
                        name="forwardStartPoint"
                        value={values.forwardStartPoint}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Departure Time"
                        name="forwardDepartTime"
                        value={values.forwardDepartTime}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        label="Start Point"
                        name="backwardStartPoint"
                        value={values.backwardStartPoint}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Departure Time"
                        name="backwardDepartTime"
                        value={values.backwardDepartTime}
                        onChange={handleInputChange}
                    />

                </div>
              
            </Grid>
            </Form>
    )
}



