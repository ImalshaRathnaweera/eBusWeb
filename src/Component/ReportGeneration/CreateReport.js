import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

import { saveAs } from 'file-saver';
import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1', 455, 6.0, 24, 4.0),
    createData('2', 237, 9.0, 37, 4.3),
    createData('3', 262, 16.0, 24, 6.0),
    createData('4', 305, 3.7, 67, 4.3),
    createData('5', 356, 16.0, 49, 3.9),
];


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 1000,
    },

    root: {
        flexGrow: 1,
        backgroundColor: '#cfd8dc',
        alignItems: 'top',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        spacing: 0,
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        border: '1px solid',
        lineHeight: 1.5,
        borderColor: '#0063cc',
        paddingTop: '3%'
        // This determines distance from top

    },
    paper: {
        //   marginTop: 20,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        opacity: 0.5
    },
    welcome: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: '1.8rem',
        marginTop: 10,
        marginBottom: 10

    },

    card: {
        maxWidth: '180px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    avatar: {
        backgroundColor: 'black',
    },
    form: {
        marginTop: 10,
        paddingTop: '1%'
    },
    button:{
      marginTop:'2%',
      color:'black'
    }

}));

function CreatReport() {
    
    const classes = useStyles();

   const handleDownload = () =>{
       axios.post('/create-pdf')

    }
    return (

        <Grid container className={classes.root}>
            <Grid item xs={12} sm={10}>
                <Typography component="h2" variant="" className={classes.welcome}>
                    Summary Report Genaration
                </Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Id</StyledTableCell>
                                <StyledTableCell align="center">Bus No</StyledTableCell>
                                <StyledTableCell align="center">Bus Route</StyledTableCell>
                                <StyledTableCell align="center">income</StyledTableCell>
                                <StyledTableCell align="center">total</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell align="center">001</StyledTableCell>
                                <StyledTableCell align="center">22</StyledTableCell>
                                <StyledTableCell align="center">galle</StyledTableCell>
                                <StyledTableCell align="center">1000</StyledTableCell>
                                <StyledTableCell align="center">5000</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell align="center">001</StyledTableCell>
                                <StyledTableCell align="center">22</StyledTableCell>
                                <StyledTableCell align="center">galle</StyledTableCell>
                                <StyledTableCell align="center">1000</StyledTableCell>
                                <StyledTableCell align="center">5000</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell align="center">001</StyledTableCell>
                                <StyledTableCell align="center">22</StyledTableCell>
                                <StyledTableCell align="center">galle</StyledTableCell>
                                <StyledTableCell align="center">1000</StyledTableCell>
                                <StyledTableCell align="center">5000</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Button className={clsx(classes.button)}
                    type="submit"
                    variant="contained"
                    onClick={handleDownload}>
                   {'Download PDF'}
                </Button>

            </Grid>
        </Grid>


    );
}


export default CreatReport;