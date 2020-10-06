import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import G3 from  "../images/G3.png";
import axios from 'axios';


class SignUp extends React.Component{
  constructor(props){
    super(props);
        
    console.log("Check")
      this.state={
        name :"",
        email :"",
        address :"",
        nic: "",
        contact: "",
        password:"",  
        confirmpassword: "",
  }
        this.namehandler = this.namehandler.bind(this);
        this.emailhandler = this.emailhandler.bind(this);
        this.addresshandler = this.addresshandler.bind(this);
        this.nichandler = this.nichandler.bind(this);
        this.contacthandler = this.contacthandler.bind(this);
        this.passwordhandler = this.passwordhandler.bind(this);
        this.confirmpasswordhandler = this.confirmpasswordhandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
}
    namehandler =(event)=>{
      this.setState({
        name:event.target.value
      })
      console.log(event.target.value)
    }
    emailhandler =(event) =>{
      this.setState({
        email:event.target.value
      })
      console.log(event.target.value)
    }
    addresshandler =(event) =>{
      this.setState({
        address:event.target.value
      })
      console.log(event.target.value)
    }
    nichandler =(event) =>{
      this.setState({
        nic:event.target.value
      })
      console.log(event.target.value)
    }
    contacthandler =(event) =>{
      this.setState({
        contact:event.target.value
      })
      console.log(event.target.value)
    }
    passwordhandler =(event) =>{
      this.setState({
        password:event.target.value
      })
      console.log(event.target.value)
    }
    confirmpasswordhandler =(event) =>{
      this.setState({
        confirmpassword:event.target.value
      })
      console.log(event.target.value)
    }

    handleSubmit =(event) =>{
      alert(`${this.state.address} ${this.state.contact}Success`)
      this.props.history.push('/dashboard');
      console.log("${this.state.email}");
      event.preventDefault()
    }

  render(){
    return (
    
     <Grid container style={{
          flexGrow: 1,
          backgroundColor: '#a503fc',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '150vh',
          spacing: 0,

      }}>
        <Grid item xs={12} sm={6} >
            <Typography component="h1" variant="" style={{
              textAlign: 'center',
              color:'white',
              fontSize:'2.5rem',
            }}>
              eBus
            </Typography>
            <Card style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              marginTop: 20,
              height:'150px',
              width:'200px',
              position:'fixed',
  

            }}>
            </Card>
            
            <Paper style={{
                padding: '20px 20px',
                margin: 50,
                textAlign: 'center',
                borderRadius:15,
                
            }}>
              
            <form onSubmit ={this.handleSubmit}>
                <Typography variant={'h5'}>
                <h3> Sign In </h3>
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
              autoFocus
              value={this.state.name}
              onChange ={this.namehandler}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={this.state.email}
              onChange ={this.emailhandler}
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
              value={this.state.address}
              onChange ={this.addresshandler}
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
              value={this.state.nic}
              onChange ={this.nichandler}
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
              value={this.state.contact}
              onChange ={this.contacthandler}
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
              value={this.state.password}
              onChange ={this.passwordhandler}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              value={this.state.confirmpassword}
              onChange ={this.confirmpasswordhandler}
            />

                <Grid item>
                </Grid>
                {/* <Link href="/sidebardup" variant="body2" underline="none"> */}
                <Button style={{
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  borderRadius: 8,
                  border: 0,
                  color: 'white',
                  height: 48,
                  width: "50%",
                  padding: '10px 30px',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  marginBottom:'10px',
                }} 
                type="submit"
                variant="contained">
                 {'Sign Up'}
               </Button>
               {/* </Link> */}
                <br></br>
                <Grid item >
                   Do you have an account?
                    <Link href="/signup" variant="body2">
                     {"Sign In"}
                    </Link>
                </Grid>    
            </form>
         </Paper>
        </Grid>
    </Grid>
  );
}
}
export default SignUp;