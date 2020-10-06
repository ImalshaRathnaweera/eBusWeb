import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#ede7f6',
      width: '100vw',
      height: '100vh',
      
    },
    appbar: {
      backgroundColor: '#aa00ff',
      height:'90px',
    },
    title: {
      flexGrow: 1,
      color:'white',
      marginTop:'25px',
      marginLeft:'60px',
      fontFamily:'Roboto',
      fontSize:'30px',
    },
    heading:{
      fontFamily:'Roboto',
      fontSize:'30px',
      textAlign:'center',
    },
    button:{
        background: '#aa00ff',
        borderRadius: 6,
        border: 0,
        color: 'white',
        height: 40,
        width: "40%",
        padding: '10px 30px',
        marginBottom:'10px',
        marginTop:'10px',
      }
  }));
export default function ForgotPassword(){
    const classes = useStyles();  

        return (
          <Grid className={classes.root}>
            <AppBar position="static" className ={classes.appbar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  eBus | Password Reset
                </Typography>
               
              </Toolbar>
            </AppBar>
            <Typography className={classes.heading}>
                <p>Change Password</p>
            </Typography>
            
            <Paper  style={{
                   padding: '20px 20px',
                   marginTop: '3%',
                   marginLeft:'30%',
                   marginRight:'30%',
                   textAlign: 'center',
                   borderRadius:10,
                   width:'35%',
                
            }}>
              
            <form >
                <Typography>
                  <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    
                  
                />
                 <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                   
                  
                />
                <Button className={clsx(classes.button)} 
                type="submit"
                variant="contained">
                 {'Change Password'}
               </Button>
                <br></br>             
                           
            </form>
         </Paper>
          </Grid>
        );
    
}