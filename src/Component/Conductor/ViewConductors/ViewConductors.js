import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PermanentDrawerLeft from './../../sidebar/sidebar';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ResponsiveDrawer from './../../sidebar/siebardup'
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from "react-router-dom";

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

function createData(name, email, address, nic, conductorno,contactno,busno) {
  return { name, email, address, nic, conductorno,contactno,busno };
}

const rows = [
  createData('Niamal Samantha', 'nimal@gmail.com', 'No.22,Poddala,Galle', '667894138V', '789456123','0711237895','Nc-6688'),
  createData('Kaveesha Kalhara', 'kaveesha@gmail.com', 'Kaveesha,Cross Street,Karapitiya', '789456123V', '667894138','0778945648','FH-4456'),
  createData('Nuwan Dhanushka', '-', 'No.6,Cinnamon Gardens,Colombo 7', '967845122V', '874569254','0754786324','PO-7755'),
  createData('Dumindu Chamal', 'dumindu@gmail.com', '63/5,baddegama,Galle', '874596123V', '54689256','0761421421','UY-2256'),
  createData('Shakthi Sachintha', 'shakthi@gmail.com', 'No.6,Sunside Gardens,Colombo 6', '874569254V', '789236489','0774567891','FG-5687'),
  createData('Udara Deshan', '-', 'No.55,Ambalangoda,Galle', '801457896V', '789456123','0714545457','SD-4496')
];


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },

  root: {
    flexGrow: 1,
    backgroundColor: 'white',
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
    paddingTop:'5%'
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
  ebus: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'white',
    fontSize: '2.5rem'
  },

  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'black',
    height: 48,
    padding: '20px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  image: {
    height: '100px',
    width: '150px',
    paddingTop: '10%'

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
  
}));

export default function ViewConductor() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ResponsiveDrawer />
      <Grid item xs={12} sm={10} >




        <form className={classes.form}>
          <Typography component="h2" variant="" className={classes.welcome}>
            Conductors
            </Typography>


          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">NIC</StyledTableCell>
                  <StyledTableCell align="right">Conductor License No</StyledTableCell>
                  <StyledTableCell align="right">Contact No</StyledTableCell>
                  <StyledTableCell align="right">Bus No</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.address}</StyledTableCell>
                    <StyledTableCell align="right">{row.nic}</StyledTableCell>
                    <StyledTableCell align="right">{row.conductorno}</StyledTableCell>
                    <StyledTableCell align="right">{row.contactno}</StyledTableCell>
                    <StyledTableCell align="right">{row.busno}</StyledTableCell>
                    <StyledTableCell align="right"><Link to={'/viewsingleconductor'}>
          <button>View</button>
        </Link></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>

          </div>
          <br></br>
        </form>

      </Grid>
    </Grid>
  );
}