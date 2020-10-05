import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';



export default class UpdateBusForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, setOpen:false};

        this.onChangeBusNumber = this.onChangeBusNumber.bind(this);
        this.onChangeBusRoute = this.onChangeBusRoute.bind(this);
        this.onChangeBusCapacity = this.onChangeBusCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state= {
            busNo: "",
            busRoute: "",
            busCapacity: "",
        }
    }

    componentDidMount() {

        // +this.props.match.params.id
        axios.get('http://localhost:4000/api/bus/')
            .then(response => {
                this.setState({
                    busNo: response.data.busNo,
                    busRoute: response.data.busRoute,
                    busCapacity: response.data.busCapacity,
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }


    handleClose = () => this.setState({open: false});

    handleClickOpen = () => this.setState({open: true});

    onChangeBusNumber(e) {
        this.setState({
            busNo:e.target.value
        });
        console.log(e.target.value)
    }
    onChangeBusRoute(e) {
        this.setState({
            busRoute:e.target.value
        });
    }
    onChangeBusCapacity(e) {
        this.setState({
            busCapacity:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            // id: 
            busNo: this.state.busNo,
            busRoute: this.state.busRoute,
            busCapacity: this.state.busCapacity,
        };
        axios.post('http://localhost:4000/api/bus/update/', obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    render() { 
        return(
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Bus Details</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    
                    </DialogContentText>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busNo"
                            label="Bus Number"
                            name="busNo"
                            autoComplete="BusNo"
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
                    </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                    Update
                </Button>
                </DialogActions>
            </Dialog>
        )
    }

}
