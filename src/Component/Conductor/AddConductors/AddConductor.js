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
import axios from 'axios';
import ResponsiveDrawer from './../../sidebar/siebardup'

class AddConductor extends React.Component{
  constructor(props){
    super(props);
      this.state={
        name :"",
        email :"",
        address: "",
        password:"",    
  }
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
    conductornumberhandler =(event) =>{
      this.setState({
        conductornumber:event.target.value
      })
      console.log(event.target.value)
    }
    passwordhandler =(event) =>{
      this.setState({
        password:event.target.value
      })
      console.log(event.target.value)
    }



    handleSubmit =(event) =>{
      alert(`${this.state.email} ${this.state.password} Success`)
      const newConductor = {
        name: this.state.name,
        email: this.state.email,
        nic: this.state.nic,
        conductorNumber: this.state.conductornumber,
        address: this.state.address,
        contact: this.state.contact,
        password: this.state.password
    }

      axios.post('http://localhost:3000/api/conductor/register', newConductor)
         .then(res => console.log(res.data));
      

      this.props.history.push('/viewconductor');
      event.preventDefault()
    }

  render(){
    return (
    
     <Grid container style={{
          flexGrow: 1,
          backgroundColor: '	#8A2BE2',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '150vh',
          spacing: 0,

      }}>
        <ResponsiveDrawer />
        <Grid item xs={12} sm={6} >
            
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
            }}>
              
            <form onSubmit ={this.handleSubmit}>
            <Typography component="h2" variant="">
              Conductor Registation
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
              name="conductornumber"
              label="conductor Number"
              id="conductornumber"
              value={this.state.conductornumber}
              onChange ={this.conductornumberhandler}
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
              id="password"
              label="Password (For the first time owner should generate)"
              name="password"
              autoComplete="password"
              value={this.state.password}
              onChange ={this.passwordhandler}
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
                 {'Register'}
               </Button>
               {/* </Link> */}
                <br></br>
            </form>
         </Paper>
        </Grid>
    </Grid>
  );
}
}
export default AddConductor;