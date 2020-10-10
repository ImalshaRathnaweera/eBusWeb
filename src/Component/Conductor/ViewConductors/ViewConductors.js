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
import ResponsiveDrawer from './../../sidebar/siebardup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
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
  avatar: {
    backgroundColor: 'black',
  },
  form: {
    marginTop: 10,
    paddingTop: '1%'
  }
}));

export default function ViewConductor() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [passdata, passData] = useState([]);

  //try
  const handleClickOpenTest = (_id) => {
    console.log(_id);
    passData(_id);
    setOpen(true);
  };

  const passesData = (_id) => {
    console.log("Check Plz")
    console.log(_id)
    passdata = _id
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const UpdateConductor = (_id) => {
    history.push('/UpdateConductors/' + _id);

  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/api/conductor',
      );

      setData(result.data);
    };
    fetchData();
  }, []);

  let counter = 1
  let history = useHistory();
  const handleDelete = (_id) => {
    console.log(_id)
    let obj = {
      id: _id
    }
    console.log(obj)
    axios.post('http://localhost:3000/api/conductor/delete', obj)
      .then(res => console.log(res.data));
    console.log("item deleted");
    history.push("/viewConductor");
  }

  return (
    <Grid container className={classes.root}>
      <ResponsiveDrawer />
      <Grid item xs={12} sm={10} >


        <Typography component="h2" variant="" className={classes.welcome}>
          Conductor Details
            </Typography>

        <Button variant="contained" color="primary" href="/addconductor">
          Add New Conductor
              </Button>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">NIC</StyledTableCell>
                <StyledTableCell align="right">Conductor License No</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Contact No</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {data.map(item => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center" >{counter++}</StyledTableCell>
                  <StyledTableCell align="center" >{item.name}</StyledTableCell>
                  <StyledTableCell align="center" >{item.email}</StyledTableCell>
                  <StyledTableCell align="center">{item.nic}</StyledTableCell>
                  <StyledTableCell align="center">{item.conductorNumber}</StyledTableCell>
                  <StyledTableCell align="center">{item.address}</StyledTableCell>
                  <StyledTableCell align="center">{item.contact}</StyledTableCell>
                  <StyledTableCell align="center">

                    <Button

                      variant="contained"
                      onClick={() => handleDelete(item._id)}
                    >
                      {'Delete'}

                    </Button>
                    {/* 
                    <Link to={`/UpdateConductors/${item._id}`}>
                      <button>View</button>
                    </Link> */}
                    <button onClick={() => UpdateConductor(item._id)}>View</button>

                    {/* This is the working one */}
                    {/* <Button variant="outlined" color="primary" onClick={() => handleClickOpenTest(item._id)}>
                      Open form dialog
                    </Button>


                    <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          To subscribe to this website, please enter your email address here. We will send updates
                          occasionally.
                        </DialogContentText>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          label="Name"
                          name="name"
                          defaultValue={item.name}
                          //onChange={e => setBusNo(e.target.value)}
                          autoFocus
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                          </Button>
                        <Button onClick={handleClose} color="primary">
                          Subscribe
                          </Button>
                      </DialogActions>
                    </Dialog> */}


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