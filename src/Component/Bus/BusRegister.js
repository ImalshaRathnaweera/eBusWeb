import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ResponsiveDrawer from './../sidebar/siebardup'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#d7a8df',
    // backgroundColor: '#a503fc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '99vw',
    height: '125vh',
    spacing: 0,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',
    
    
  },
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome:{
    fontFamily:'Roboto',
    textAlign: 'center',
    fontSize:'1.8rem' 
      
  },
  ebus:{
    fontFamily:'Roboto',
    textAlign: 'center',
    color:'white',
    fontSize:'2.5rem'  
  },
  
  button:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'black',
    height: 48,
    width: "30%",
    padding: '20px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  image:{
    height:'100px',
    width:'150px',
    paddingTop: '10%'
    
  },
  card: {
    maxWidth: '180px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  avatar: {
    backgroundColor: 'black',
  },
}));

export default function BusRegister() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
        <ResponsiveDrawer/>
        <Grid item xs={12} sm={6} >
        
            
            <Paper style={
              {
                padding: '20px 50px',
                margin: 50,
                textAlign: 'center',
            }}>

            <form>
              
            <Typography component="h2" variant="" className={classes.welcome}>
               Bus Registration
            </Typography>

            
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="busNumber"
                    label="Bus Number"
                    name="busNumber"
                    autoComplete="Bus Number"
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
                
                 
                <div>
                <Button className={clsx(classes.button)} 
                type="submit"
                variant="contained">
                 {'Register'}
                </Button>
                </div>
                <br></br>               
            </form>
         </Paper>
        </Grid>
    </Grid>
  );
}