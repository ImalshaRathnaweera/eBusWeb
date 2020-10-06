import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ResponsiveDrawer from './../sidebar/siebardup';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import axios from 'axios';
import { Link } from "react-router-dom";

// const Bus = props => (
//   <tr>
//       <td>{props.bus.busNo}</td>
//       <td>{props.bus.busRoute}</td>
//       <td>{props.bus.busCapacity}</td>
//       <td>
//           <Link to={"/edit/"+props.bus._id}>View</Link>
//       </td>
//   </tr>
// )




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


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },

  root: {
    flexGrow: 1,
    backgroundColor: '#cfd8dc',
    alignItems: 'top',
    // justifyContent: 'center',
    width: '99vw',
    height: '125vh',
    spacing: 0,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',
    paddingTop: '5%'
    // This determines distance from top

  },
  paper: {
    marginTop: 20,
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

}));

export default function ViewUsers() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/api/bus',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  let counter = 1
  return (
    <Grid container className={classes.root}>
      <ResponsiveDrawer />
      <Grid item xs={12} sm={10} >


        <Typography component="h2" variant="" className={classes.welcome}>
          User Details
            </Typography>

        <br></br>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">NIC</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {data.map(item => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center" >{counter++}</StyledTableCell>
                  <StyledTableCell align="center" >{item.busNo}</StyledTableCell>
                  <StyledTableCell align="center">{item.busRoute}</StyledTableCell>
                  <StyledTableCell align="center">{item.busCapacity}</StyledTableCell>
                  <StyledTableCell align="center">{item.busCapacity}</StyledTableCell>
                  <StyledTableCell align="center">{item.busCapacity}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to={`/busProfile/${item._id}`}>
                      <button>View</button>
                    </Link>
                    <Link to={`/busProfile/${item._id}`}>
                      {/* <button>Delete</button> */}
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
        <div>

        </div>
        <br></br>


      </Grid>
    </Grid>
  );
}