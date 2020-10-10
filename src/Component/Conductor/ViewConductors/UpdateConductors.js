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
    const [data, setData] = useState([]);

    console.log(props.match.params.id)
    useEffect(() => {
        let updateData = {
            id: props.match.params.id,
            name: "Malshaaaaa"
        }

        console.log(updateData)
        axios.post('http://localhost:3000/api/conductor/update', updateData)
            .then(res => console.log(res.data));
        console.log("item updated");
    }, []);


    return (
        <div>
            <ResponsiveDrawer />
            
        </div>
        
    )
}