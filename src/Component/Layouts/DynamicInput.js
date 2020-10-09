import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },  
    },
    button: {
      margin: theme.spacing(1),
    }
}))

function DynamicInput() {
    
    const classes = useStyles();
    const [inputFields, setInputFields] = useState([
        {cityInbetween:''} 
    ]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("InputFields", inputFields);
    }; 

    const handleAddFields = () => {
      setInputFields([...inputFields, {cityInbetween:''}])
    }
    
    const handleRemoveFields = (index) => {
      const values  = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    }

    const handleChangeInput = (index, event) => {
      //console.log(index, event.target.name)
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
    }

    return ( 
        <Container>
          <h1>Welcome</h1>
          <form className={classes.root} onSubmit={handleSubmit}>
            { inputFields.map((inputField, index) => (
                <div key={index}> 
                   <TextField
                     name="cityInbetween"
                     label="Booking Enabled City"
                     variant="filled"
                     value={inputField.cityInbetween}
                     onChange={event => handleChangeInput(index, event)}  
                   />
                   <IconButton 
                      onClick = {() =>handleRemoveFields(index)}
                   >
                     <RemoveIcon />
                   </IconButton>
                   <IconButton
                      onClick={() => handleAddFields()}
                   >
                     <AddIcon />
                   </IconButton>
                </div>
            ))}
            <Button
              className={classes.button}
              variant="contained" 
              color="primary" 
              type="submit" 
              onClick={handleSubmit}
             >Submit</Button>
          </form>
          
        </Container>
    )
}

export default DynamicInput;
