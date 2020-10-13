import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Typography, Avatar} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ResponsiveDrawer from './../sidebar/siebardup';
import { withStyles } from '@material-ui/core/styles';
import {Table,TableBody, TableCell, TableContainer,TableHead, TableRow} from '@material-ui/core';
import axios from 'axios'
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
        borderRadius: 8,
        border: 0,
        color: 'black',
        height: 48,
        width: "50%",
        padding: '20px 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        alignItems: 'center',
        fontSize: '20px'
    },

}));

export default function BusProfile(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/api/bus/viewbuses',
      );

      setData(result.data);
    };

    fetchData();
    }, []);


    let counter = 1
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
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardActionArea>
                               <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Bus Details
                                </Typography>
                                <TableContainer component={Paper}>
                                  <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                      <TableRow>
                                        <StyledTableCell align="center">Id</StyledTableCell>
                                        <StyledTableCell align="center">Bus No</StyledTableCell>
                                        <StyledTableCell align="center">Bus Route</StyledTableCell>
                                        <StyledTableCell align="center">BusCapacity</StyledTableCell>
                                        <StyledTableCell align="center">BusCapacity</StyledTableCell>
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
                           
                                          {/* <StyledTableCell align="right">{item.busRoute}</StyledTableCell> */}
                                          <StyledTableCell align="center">
                                            <Link to={`/busProfile/${item._id}`}>
                                              <button>View</button>
                                            </Link>
                                          </StyledTableCell>
                                        </StyledTableRow>
                                      ))}

                                    </TableBody>
                                  </Table>
                                </TableContainer>
                                
                                
                                </CardContent>
                            </CardActionArea>
                            
                            {/* </CardActions> */}
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className="paper">
                            <Grid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Avatar className = "image">
                                </Avatar>
                                {/* <input type="file" id="input" accept="image/*" onChange={this.imageHandler}
                                    style={{
                                        display: 'none'
                                    }}>
                                </input> */}
                               
                            </Grid>
                            <form  >
                                <Typography style={{ textAlign: 'center', fontSize: '20px' }}>
                                <div>
                                    <p><b>Name:</b>&nbsp;Nilanka De Silva</p>
                                    <p><b>Email:</b>&nbsp; nilanka@gmail.com</p>
                                    <p><b>Address:</b>&nbsp;12/34, Galle</p>
                                    <p><b>NIC:</b>&nbsp;985412451V</p>
                                    <p><b>Contact:</b>&nbsp;0914512456</p>
                                </div>
                                </Typography>
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    
                                </Grid>
                            </form>
                        </Paper>
                        
                    </Grid>

                </Grid>
            </Container>

        </div>

    )
}


