import React, { Component } from 'react';
import { Button, Grid, Paper, TextField, Typography, Avatar, Icon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Success from '../Notification/Success';
import '../../Css/Profile.scss';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
            profileIma: 'https://i.ya-webdesign.com/images/profile-photo-png.png',
            snackbaropen: false,
            snackbarmsg: '',
            snackbarcolor: '',
            name: "",
            email: "",
            address: "",
            contactNo: "",


        }
        this.onSubmit = this.onSubmit.bind(this);
        this.namehandler = this.namehandler.bind(this);
        this.emailhandler = this.emailhandler.bind(this);
        this.addresshandler = this.addresshandler.bind(this);
        this.contacthandler = this.contacthandler.bind(this);
    }
    toggleHandler = (e) => {
        e.preventDefault();
        const currentStatus = this.state.display;
        this.setState({
            display: !currentStatus
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.setState({
        //     snackbaropen: true,
        //     snackbarmsg: "successful",
        //     snackbarcolor: 'success',
        // });
        const data = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            contact: this.state.contact,

        }
        axios.post('http://localhost:3000/api/user/owner/update', data)
            .then(res => {

                this.setState({
                    snackbaropen: true,
                    snackbarmsg: "successful",
                    snackbarcolor: 'success',
                });
            }).catch(err => {
                console.log(err);

            })

    };
    namehandler = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    emailhandler = (e) => {
        this.setState({
            email: e.target.value
        });
    };
    addresshandler = (e) => {
        this.setState({
            address: e.target.value
        });
    };
    contacthandler = (e) => {
        this.setState({
            contact: e.target.value
        })

    };


    closeAlert = () => {
        this.setState({ snackbaropen: false });
    };

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileIma: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    handlePasswordChange = (e) => {
        e.preventDefault();

    };
    render() {
        const { profileIma } = this.state;
        let content = null;
        if (this.state.display) {
            content = <Paper className="paper" >
                <form onSubmit={this.onSubmit}>
                    <Typography className="topic1">
                        Update Profile Details
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="UserName"
                        name="name"
                        onChange={this.namehandler}
                    // autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address or UserName"
                        name="email"
                        onChange={this.emailhandler}
                    // autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        onChange={this.addresshandler}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="contact"
                        label="Contact No"
                        name="contact"
                        onChange={this.contacthandler}

                    />

                    <Button className="btn"
                        variant="contained"
                        type="submit"
                    >
                        Save</Button>

                </form>
            </Paper>

        }
        return (
            <div>
                <Grid container className="container">
                    <Success
                        msg={this.state.snackbarmsg}
                        color={this.state.snackbarcolor}
                        time={3000}
                        status={this.state.snackbaropen}
                        closeAlert={this.closeAlert}
                    />
                    <AppBar position="static" className="app-bar">
                        <Toolbar>
                            <Typography className="title">
                                eBus| User Profile
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid item xs={12} sm={6}>

                        <Paper className="paper">
                            <Grid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Avatar src={profileIma} className="image">
                                </Avatar>
                                <input type="file" id="input" accept="image/*" onChange={this.imageHandler}
                                    style={{
                                        display: 'none'
                                    }}>
                                </input>
                                <Grid>
                                    <label htmlFor="input">
                                        <Icon style={{
                                            fontSize: 15,
                                            backgroundColor: 'black',
                                            color: 'white',
                                            cursor: 'pointer'
                                        }}>+Upload</Icon>
                                    </label>
                                </Grid>
                            </Grid>
                            <form onSubmit={this.toggleHandler}>
                                <Typography style={{ textAlign: 'center', fontSize: '20px' }}>
                                    <div>
                                        <p><b>Name:</b>&nbsp; John Steewan</p>
                                        <p><b>Email:</b>&nbsp; johnsteewan1984@gmail.com</p>
                                        <p><b>Address:</b>&nbsp;No.10 ,Reid Avenue, Colombo 07</p>
                                        <p><b>Contact:</b>&nbsp;0776789632</p>
                                    </div>
                                </Typography>
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Button className="btn"
                                        type="submit"
                                        variant="contained"
                                    >Update</Button>
                                </Grid>
                            </form>
                        </Paper>
                        {content}
                    </Grid>
                    <Grid item item xs={12} sm={6}>
                        <Paper className="paper">
                            <form onSubmit={this.handlePasswordChange}>
                                <Typography className="topic2">
                                    Change Your Password
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="currentpassword"
                                    type="password"
                                    label="Current Password"
                                    name="password"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="newpassword"
                                    type="password"
                                    label="New Password"
                                    name="newpassword"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="confirmpassword"
                                    type="password"
                                    label="Confirm Password"
                                    name="confirmpassword"
                                />

                                <Button className="btn"
                                    type="submit"
                                    variant="contained">Password Change</Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Profile;
