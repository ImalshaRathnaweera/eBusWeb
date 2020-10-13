import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ResponsiveDrawer from './../sidebar/siebardup'
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
//import TimePicker from 'react-time-picker';

// sending requests
import axios from 'axios';


export default class BusRegister extends React.Component {

    constructor(props) {
        super(props);

         // Setting up functions
        this.onChangeBusNumber = this.onChangeBusNumber.bind(this);
        this.onChangeRouteNumber = this.onChangeRouteNumber.bind(this);
        this.onChangeStartPoint = this.onChangeStartPoint.bind(this);
        this.onChangeEndPoint = this.onChangeEndPoint.bind(this);
        this.onChangeBusCapacity = this.onChangeBusCapacity.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onChangeForwardStartPoint = this.onChangeForwardStartPoint.bind(this);
        this.onChangeForwardDepartTime = this.onChangeForwardDepartTime.bind(this);
        this.onChangeBackwardStartPoint = this.onChangeBackwardStartPoint.bind(this);
        this.onChangeBackwardDepartTime = this.onChangeBackwardDepartTime.bind(this);
        this.onChangeNoOfReservation = this.onChangeNoOfReservation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

         // Setting up state
        this.state= {
            busNo: "",
            routeNo: "",
            startPoint:"",
            endPoint: "",
            busCapacity: "", 
            isReserveEnable: false,
            forwardStartPoint: "",
            forwardDepartTime: "00:00",
            backwardStartPoint: "",
            backwardDepartTime: "00:00",
            noOfReservation: 0 
        }
    }

    onChangeBusNumber(e) {
        this.setState({
            busNo:e.target.value
        });
        console.log(e.target.value)
    }
    onChangeRouteNumber(e) {
        this.setState({
            routeNo:e.target.value
        });
    }
    onChangeStartPoint(e) {
        this.setState({
            startPoint:e.target.value
        });
    }
    onChangeEndPoint(e) {
        this.setState({
            endPoint:e.target.value
        });
    }
    onChangeBusCapacity(e) {
        this.setState({
            busCapacity:e.target.value
        });
    }
    //new Form 

    onChangeForwardStartPoint(e) {
        this.setState({
            forwardStartPoint:e.target.value
        });
    }
    onChangeForwardDepartTime(e) {
        this.setState({
            forwardDepartTime:e.target.value
        });
    }
    onChangeBackwardStartPoint(e) {
        this.setState({
            backwardStartPoint:e.target.value
        });
    }
    onChangeBackwardDepartTime(e) {
        this.setState({
            backwardDepartTime:e.target.value
        });
    }
    onChangeNoOfReservation(e) {
        this.setState({
            noOfReservation:e.target.value
        });
    }
    

    onSubmit(e) {
        e.preventDefault();

        console.log(`form submited`);
        console.log(`Bus Number: ${this.state.busNo}`);
        console.log(`Route Number: ${this.state.routeNo}`);
        console.log(`Start Point: ${this.state.startPoint}`);
        console.log(`End Point: ${this.state.endPoint}`);
        console.log(`Bus Capacity: ${this.state.busCapacity}`);
        console.log(`Is reservable: ${this.state.isReserveEnable}`);
        console.log(`Forw Start: ${this.state.forwardStartPoint}`);
        console.log(`Forw daprt tim: ${this.state.forwardDepartTime}`);
        console.log(`back start tim: ${this.state.backwardStartPoint}`);
        console.log(`backward tim: ${this.state.backwardDepartTime}`);
        console.log(`No of reserva: ${this.state.noOfReservation}`);

        const newBus = {
            busNo: this.state.busNo,
            routeNo: this.state.routeNo,
            startPoint: this.state.startPoint,
            endPoint: this.state.endPoint,
            busCapacity: this.state.busCapacity,
            isReserveEnable: this.state.isReserveEnable,
            forwardStartPoint: this.state.forwardStartPoint,
            forwardDepartTime: this.state.forwardDepartTime,
            backwardStartPoint: this.state.backwardStartPoint,
            backwardDepartTime: this.state.backwardDepartTime,
            noOfReservation: this.state.noOfReservation
        }

        axios.post('http://localhost:3000/api/bus/register', newBus)
             .then(res => console.log(res.data));
        // this.props.history.push('/viewBuses');
        // toast.success("User Registration successfully");

        this.setState({
            busNo: '',
            routeNo: '',
            startPoint: '',
            endPoint: '',
            busCapacity: '',
            isReserveEnable: false,
            forwardStartPoint: '',
            forwardDepartTime: '00:00',
            backwardStartPoint: '',
            backwardDepartTime: '00:00',
            noOfReservation: 0

        })
        this.props.history.push('/viewBuses');
        toast.success("User Registration successfully");
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            isReserveEnable: value
        });
    }

    render() {
        return(
            <Grid container style={{marginTop: 100, 
                                    display:"flex",
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                <ResponsiveDrawer/>
                <Grid item xs={12} sm={6} >
                
                    
                    <Paper style={
                    {
                        padding: '20px 20px',
                        margin: 50,
                        textAlign: 'center',
                    }}>

                    <form onSubmit= {this.onSubmit}>
                    
                       <Typography component="h2" variant="">
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
                            value={this.state.busNo}
                            onChange={this.onChangeBusNumber}
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="routeNo"
                            label="Route Number"
                            name="routeNo"
                            value={this.state.routeNo}
                            onChange={this.onChangeRouteNumber} 
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="startPoint"
                            label="Start Point"
                            name="startPoint"
                            value={this.state.startPoint}
                            onChange={this.onChangeStartPoint}        
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="endPoint"
                            label="End Point"
                            name="endPoint"
                            value={this.state.endPoint}
                            onChange={this.onChangeEndPoint}        
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busCapacity"
                            label="Bus Capacity"
                            name="busCapacity"
                            value={this.state.busCapacity}
                            onChange={this.onChangeBusCapacity}        
                        />
                        
                        {/* <div className="form-group">
                            <input type="submit" value="Register Bus" className="btn btn-primary"></input>
                        
                        </div> */}
                        <Grid style={{textAlign:'left'}}>
                            Enable Reservation : 
                            <input
                                name="isGoing"
                                type="checkbox"
                                // name=""
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange} />
                        </Grid>

                        { this.state.isReserveEnable ? <div>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="forwardStartPoint"
                            label="Start Point"
                            name="forwardStartPoint"
                            value={this.state.forwardStartPoint}
                            onChange={this.onChangeForwardStartPoint} 
                        />
                        {/* <TimePicker
                            onChange={this.onChangeForwardDepartTime}
                            value={this.state.forwardDepartTime}
                        /> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="forwardDepartTime"
                            label="Forward Departure Time"
                            name="forwardDepartTime"
                            value={this.state.forwardDepartTime}
                            onChange={this.onChangeForwardDepartTime}        
                        />
                        
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="backwardStartPoint"
                            label="Backward Start Point"
                            name="backwardStartPoint"
                            value={this.state.backwardStartPoint}
                            onChange={this.onChangeBackwardStartPoint}        
                        />
                        {/* <TimePicker
                            onChange={this.onChangeBackwardDepartTime}
                            value={this.state.backwardDepartTime}
                        /> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="backwardDepartTime"
                            label="Departarture Time"
                            name="backwardDepartTime"
                            value={this.state.backwardDepartTime}
                            onChange={this.onChangeBackwardDepartTime}        
                        />
                        <h4>Maximum numner of reservations is 20</h4>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            
                            id="noOfReservation"
                            label="No of reservation"
                            name="noOfReservation"
                            value={this.state.noOfReservation}
                            onChange={this.onChangeNoOfReservation}        
                        />    
                        </div> : null }
                        <div>
                            <Button className="button" color="primary" 
                                type="submit"
                                variant="contained">
                                {'Register'}
                                <Link to="/viewBuses"></Link>
                            </Button>
                        </div>
                        <br></br>               
                    </form>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}