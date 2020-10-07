import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ResponsiveDrawer from './../sidebar/siebardup';
import Dialog from '@material-ui/core/Dialog';
import {DialogActions, DialogContent,DialogContentText, DialogTitle} from '@material-ui/core';

import axios from 'axios'
import { useHistory } from "react-router-dom";
import ConfirmDialog from './../Notification/ConfirmDialog';
import Success from './../Notification/Success';

const useStyles = makeStyles((theme) =>({
    appBar: {
        backgroundColor: "#aa00ff"
    }, 
    // body:{
    //     backgroundColor: '#d7a8df',
    //     paddingBottom: theme.spacing(10)
    // },
    buses: {
        backgroundImage: 'https://unsplash.com/photos/y2b2nPmy_LY',
        height: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        // color: "#fff",
        fontSize: "4rem",
    },
    exampleContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(10)
    },
    dashBody: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
        
    },
    media: {
        height: 240,
        component:"img",
        alt:"eBus image"
    },
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'black',
        height: 48,
        width: "50%",
        padding: '20px 20px',
        alignItems: 'center',
        fontSize: '20px'
    },
    updateButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        //backgroung:'#d500f9',
        color: 'black',
        height: 48,
        width: "100%",
        padding: '20px 80px',
        fontSize: '20px',
        marginRight: theme.spacing(8)
    },
    reportButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'black',
        height: 48,
        width: "100%",
        padding: '20px 30px',
        fontSize: '20px'
    }

}));

export default function BusProfile(props) {
    const classes = useStyles();
    
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    

    console.log("one")
    console.log(props.match.params.id)
//     useEffect(() => {
//         const fetchData = async () => {
//         const result = 
//         // await axios.post(
//         //     // `http://localhost:4000/api/bus/${props.match.params.id}`
//         //     "http://localhost:4000/api/bus-profile", 
//         //     {
//         //         id: props.match.params.id
//         //     }
//         // );
//         console.log(result)
//         console.log(result.data)
//       setData(result.data);
//     };

//     fetchData();
//   }, []);
useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: props.match.params.id })
    };
    fetch('http://localhost:4000/api/bus/bus-profile', requestOptions)
        .then(response => response.json())
        .then(data => setData(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // update state
    const [busNo, setBusNo] = useState("");
    const [busRoute, setBusRoute] = useState("");
    const [busCapacity, setBusCapacity] = useState("");

    const handleUpdate = () => {

        const newBus = {
            id: data._id,
            busNo: busNo ? busNo : data.busNo,
            busRoute: busRoute ? busRoute : data.busRoute,
            busCapacity: busCapacity ? busCapacity : data.busCapacity
        }
        console.log(newBus)

        axios.post('http://localhost:4000/api/bus/update', newBus)  
             .then(res => console.log(res.data));
    }

    let history = useHistory();
    const handleDelete = (_id) => {
        console.log(_id)
        axios.post('http://localhost:4000/api/bus/delete', _id)  
             .then(res => console.log(res.data));
        console.log("item deleted");
        history.push("/viewBuses");
    }



    console.log(props.match.params.id)


    return(
        <div>
            <ResponsiveDrawer/>
            <Box className={classes.buses}>
                {/* <Box>
                    <Typography variant="h6" className={classes.dashBody}>
                        Add image if Wanted 
                    </Typography> 
                </Box> */}
            </Box>
            <Container maxWidth="lg" className={classes.exampleContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardActionArea>
                               <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Bus Details
                                </Typography>
                                <Grid container spacing={3} direction="column">
                                      <Grid item xs>
                                        <TextField fullWidth
                                                id="outlined-read-only-input"
                                                label="Bus Number"
                                                value={data.busNo}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                variant="outlined"
                                                />
                                        </Grid>
                                       <Grid item xs>
                                        <TextField fullWidth
                                            id="outlined-read-only-input"
                                            label="Bus Route"
                                            value={data.busRoute}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            variant="outlined"
                                            />
                                            </Grid>
                                       <Grid item xs>
                                        <TextField fullWidth
                                            id="outlined-read-only-input"
                                            label="Bus capacity"
                                            value={data.busCapacity}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            variant="outlined"
                                            />
                                        </Grid>
                                   </Grid>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div>
                                    <Button className={clsx(classes.updateButton)}
                                        variant="contained" 
                                        onClick={handleClickOpen}>
                                        {'Update Details'}
                                    </Button>

                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <form 
                                            onSubmit={handleUpdate}
                                        >
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
                                                    defaultValue={data.busNo}
                                                    // value={data.busNo}
                                                    onChange={e => setBusNo(e.target.value)}
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
                                                    defaultValue={data.busRoute}   
                                                    onChange={e => setBusRoute(e.target.value)}
                                                />
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="busCapacity"
                                                    label="Bus Capacity"
                                                    name="busCapacity"
                                                    defaultValue={data.busCapacity}
                                                    onChange={e => setBusCapacity(e.target.value)}
                                                />
                                            </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit"
                                            color="primary"
                                            // onClick={handleUpdate}
                                        >
                                            Update
                                        </Button>
                                        </DialogActions>
                                        </form>
                                    </Dialog>
                                    <Success />
                                </div>
                                <Button className={clsx(classes.button)} 
                    
                                    variant="contained"
                                    onClick={() => setConfirmOpen(true) }
                                    //onClick = {()=>handleDelete(data._id)}
                                    >
                                    {'Delete Details'}
                                    <ConfirmDialog
                                        title="Delete User"
                                        open={confirmOpen}
                                        setOpen={setConfirmOpen}
                                        onConfirm={handleDelete(data._id)}
                                    >
                                        Are you sure you want to delete this user?
                                    </ConfirmDialog>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        Weekly Income
                                    </Typography>

                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Weekly income"
                                        defaultValue="Rs 10,000"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"

                                        />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                
                                <Button className={clsx(classes.reportButton)} 
                                    
                                    variant="contained" href="/generateReport">
                                    {'Report Generation'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    


                </Grid>
            </Container>

        </div>

    )
}


