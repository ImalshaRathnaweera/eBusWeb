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
import ResponsiveDrawer from './../../sidebar/siebardup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#aa00ff"
    },
    buses: {
        backgroundImage: 'https://unsplash.com/photos/y2b2nPmy_LY',
        height: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
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
        component: "img",
        alt: "eBus image"
    },
    button: {
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


export default function UpdateConductors(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNIC] = useState("");
    const [conductorNumber, setConductorNo] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");


    console.log(props.match.params.id)
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.match.params.id })
        };
        fetch('http://localhost:3000/api/conductor/getOne', requestOptions)
            .then(response => response.json())
            .then(data => setData(data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    const handleUpdate = () => {

        let updateData = {
            id: props.match.params.id,
            name: name ? name : data.name,
            email: email ? email : data.email,
            nic: nic ? nic : data.nic,
            conductorNumber: conductorNumber ? conductorNumber : data.conductorNumber,
            address: address ? address : data.address,
            contact: contact ? contact : data.contact,
        }

        console.log(updateData)
        axios.post('http://localhost:3000/api/conductor/update', updateData)
            .then(res => console.log(res.data));
        console.log("item updated");
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <ResponsiveDrawer />
            <Container maxWidth="lg" className={classes.exampleContainer}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >

                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom component="h2" variant="">
                                        Conductor Details
                                </Typography>
                                    <Grid container spacing={3} direction="column">
                                        <Grid item xs>
                                            <TextField fullWidth
                                                id="outlined-read-only-input"
                                                label="Name"
                                                value={data.name}
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
                                                label="Email"
                                                value={data.email}
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
                                                label="NIC"
                                                value={data.nic}
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
                                                label="Conductor No"
                                                value={data.conductorNumber}
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
                                                label="Address"
                                                value={data.address}
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
                                                label="Contact No"
                                                value={data.contact
                                                }
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
                                            <DialogTitle id="form-dialog-title">Update Conductor Details</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                </DialogContentText>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="name"
                                                    label="Name"
                                                    name="name"
                                                    defaultValue={data.name}
                                                    onChange={e => setName(e.target.value)}
                                                    autoFocus
                                                />

                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email"
                                                    name="email"
                                                    defaultValue={data.email}
                                                    onChange={e => setEmail(e.target.value)}

                                                />

                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="nic"
                                                    label="NIC"
                                                    name="nic"
                                                    defaultValue={data.nic}
                                                    onChange={e => setNIC(e.target.value)}

                                                />
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="conductorNumber"
                                                    label="Conductor NO"
                                                    name="conductorNumber"
                                                    defaultValue={data.conductorNumber}
                                                    onChange={e => setConductorNo(e.target.value)}   
                                                />
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="address"
                                                    label="Address"
                                                    name="address"
                                                    defaultValue={data.address}
                                                    onChange={e => setAddress(e.target.value)}   
                                                />
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="contact"
                                                    label="Contact"
                                                    name="contact"
                                                    defaultValue={data.contact}
                                                    onChange={e => setContact(e.target.value)}   
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    Cancel
                                        </Button>
                                                <Button 
                                            type="submit"
                                            color="primary"
                                            onClick={() => handleUpdate(data._id)}
                                        >
                                            Update
                                        </Button>
                                            </DialogActions>
                                        </form>
                                    </Dialog>
                                </div>
                                {/* <Button className={clsx(classes.button)}

                                    variant="contained"
                                    onClick={() => handleUpdate(data._id)}
                                >
                                    {'Update Details'}

                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>




                </Grid>
            </Container>
        </div>

    )
}