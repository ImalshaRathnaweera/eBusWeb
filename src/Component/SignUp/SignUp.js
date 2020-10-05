import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import G3 from "../images/G3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#aa00ff',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '98.93vw',
    height: '110vh',
    spacing: 0,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',
    paddingTop: '5%'

  },
  paper: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '1.8rem'

  },
  ebus: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'white',
    fontSize: '2.5rem'
  },

  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'white',
    height: 48,
    width: "30%",
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  image: {
    height: '100px',
    width: '150px',
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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} >
        <Typography component="h1" variant="" className={classes.ebus}>
          eBus
        </Typography>
        {/* <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="eBus image"
                  height="150px"
                  image={G3}
                  title="eBus image"
                />
        </Card> */}

        <Paper style={
          {
            padding: '20px 20px',
            // margin: 50,
            textAlign: 'center',
          }}>


          <form>
            {/* <Card className={classes.card}>
              
            <CardMedia
             component="img"
             alt="eBus image"
             height="150"
             image={G3}
             title="eBus image"
            />
            </Card> */}

            <Typography component="h2" variant="" className={classes.welcome}>
              User Registration
            </Typography>


            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="User Name"
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
<<<<<<< HEAD
           
=======
              //autoFocus
>>>>>>> 78e1530e3b77a9128c8f3fa238d1df5d81227805
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"

            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nic"
              label="NIC Number"
              name="nic"
              autoComplete="NIC"

            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact Number"
              name="contact"
              autoComplete="contact"
            />



            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"

            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="confirmpassword"
              id="confirmpassword"
            />


            <div>
              <Button className={clsx(classes.button)}
                type="submit"
                variant="contained">
                {'Sign Up'}
              </Button>
            </div>
            <br></br>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}