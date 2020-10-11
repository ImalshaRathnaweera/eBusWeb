import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core'
//import Input from '@material-ui/core/TextField';
import Input from './../Conductor/Input';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { UseForm, Form } from './UseForm'
import { FormControl, FormLabel, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import ResponsiveDrawer from './../sidebar/siebardup'

const initialFValues = {
  name: '',
  email: '',
  nic: '',
  address: '',
  contact: '',
  conductornumber: '',
  password: '',
}

export default function ConductorForm() {
  const [name, setName] = useState("");

  const validate = () => {
    let temp = {}
    temp.name = values.name ? "" : "This field is required."
    temp.email = (/$|.+@.+..+/).test(values.email) ? "" : "This field is required."
    temp.nic = values.nic ? "" : "This field is required."
    temp.address = values.address ? "" : "This field is required."
    temp.contact = values.contact.length != 0 ? "" : "Minimum 10 numbers required."
    temp.conductornumber = values.conductornumber.length != 5 ? "" : "Minimum 5 numbers required."
    temp.password = values.password.length > 6 ? "" : "Minimum 6 numbers required."
    setErrors({
      ...temp
    })
    return Object.values(temp).every(x => x == "")
  }

  

  const handleSubmit = e => {
    let updateData = {
      name: values.name,
    }
    console.log(updateData)
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
  } = UseForm(initialFValues);

  return (
    
    <Form onSubmit={handleSubmit}>
      <ResponsiveDrawer />

      <Grid container style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '150vh',
          spacing: 0,

      }}>
        <Grid item xs={12} sm={6} >
          <Input
            variant="outlined"
            label="Name"
            name="name"
            defaultValue={values.name}
            onChange={e => setName(e.target.value)}
            //value={values.name}
            error={errors.name}
            focus
          />
          <Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}

          />

          <Input
            variant="outlined"
            label="NIC"
            name="nic"
            value={values.nic}
            onChange={handleInputChange}
            error={errors.nic}
          />
          <Input
            variant="outlined"
            label="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}

          />

           <Input
            variant="outlined"
            label="Contact"
            name="contact"
            value={values.contact}
            onChange={handleInputChange}
            error={errors.contact}

          />
          <Input
            variant="outlined"
            label="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}

          />
          <div>
            <Button className="button" color="primary"
              type="submit"
              variant="contained">
              {'Register'}
              <Link to="/viewConductors"></Link>
            </Button>
            <Button className="button" color="primary"
              variant="contained" onClick={resetForm}>
              {'Reset'}
            </Button>
          </div>


        </Grid>

        


          

 

      </Grid>
    </Form>
  )
}