import React, {useState, useEffect} from 'react'
import { Grid, } from '@material-ui/core'
//import Input from '@material-ui/core/TextField';
import Input from './../Bus_Form/Input';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import { useForm, Form } from './../Bus_Form/useForm';
import Checkbox from './../Bus_Form/Checkbox';
import { FormControl, FormLabel, FormControlLabel,Checkbox as MuiCheckbox } from '@material-ui/core';


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

    const validate = (fieldValues = values) => {
      let temp = {}
      temp.busNo = values.busNo ? "" : "This field is required."
      temp.routeNo = values.routeNo ? "" : "This field is required."
      temp.startPoint = values.startPoint ? "" : "This field is required."
      temp.endPoint = values.endPoint ? "" : "This field is required."
      temp.busCapacity = values.busCapacity.length < 2 ? "" : "This field is required."
      setErrors({
        ...temp
      })
      return Object.values(temp).every(x => x=="")
    }

    const handleSubmit = e => {
      e.preventDefault()
      if (validate())
        window.alert('testing..')
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true,validate);
    
    return (
            <Form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Input
                      variant="outlined"
                      label="Bus Number"
                      name="busNo"
                      value={values.busNo}
                      onChange={handleInputChange}
                      error = {errors.busNo}
                    />
                    <Input
                      variant="outlined"
                      label="Route Number"
                      name="routeNo"
                      value={values.routeNo}
                      onChange={handleInputChange}
                      error = {errors.routeNo} 
                      
                    />
                    <Input
                      variant="outlined"
                      label="Start Point"
                      name="startPoint"
                      value={values.startPoint}
                      onChange={handleInputChange}
                      error = {errors.startPoint}
                      
                    />
                    <Input
                      variant="outlined"
                      label="End Point"
                      name="endPoint"
                      value={values.endPoint}
                      onChange={handleInputChange}
                      error = {errors.endPoint}
                      
                    />
                    <Input
                      variant="outlined"
                      label="Bus Capacity"
                      name="busCapacity"
                      value={values.busCapacity}
                      onChange={handleInputChange}
                      error = {errors.busCapacity}
                      
                    />
                    {/* <Checkbox
                        name="isReserveEnable"
                        label="Reservation Enable"
                        lablePlacement = "start"
                        value={values.isReserveEnable}
                        onChange={handleInputChange}
                    /> */}
                    <FormControl>
                      <FormLabel>Maximum number of reservations 20</FormLabel>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            name="isReserveEnable"
                            label="Reservation Enable"
                            labelPlacement="start"
                            value={values.isReserveEnable}
                            onChange={handleInputChange}
                            error = {errors.isReserveEnable}
                            
                          />
                    </FormControl>
                    
                </Grid>
                
                <div>
                    <Input
                        variant="outlined"
                        label="Start Point"
                        name="forwardStartPoint"
                        value={values.forwardStartPoint}
                        onChange={handleInputChange}
                        error = {errors.forwardStartPoint}
                        
                    />
                    <Input
                        variant="outlined"
                        label="Departure Time"
                        name="forwardDepartTime"
                        value={values.forwardDepartTime}
                        onChange={handleInputChange}
                        error = {errors.forwardDepartTime}
                        
                    />
                </div>
                <div>
                    <Input
                        variant="outlined"
                        label="Start Point"
                        name="backwardStartPoint"
                        value={values.backwardStartPoint}
                        onChange={handleInputChange}
                        error 
                    />
                    <Input
                        variant="outlined"
                        label="Departure Time"
                        name="backwardDepartTime"
                        value={values.backwardDepartTime}
                        onChange={handleInputChange}
                        error
                        
                    />
                  
                   <div>
                      <Button className="button" color="primary" 
                          type="submit"
                          variant="contained">
                          {'Register'}
                          <Link to="/viewBuses"></Link>
                      </Button>
                  </div>
                    

                </div>
              
            </Grid>
            </Form>
    )
}



