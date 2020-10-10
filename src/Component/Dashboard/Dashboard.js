import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Buses from "./../images/Buses.jpg";
import driver1 from "./../images/driver1.jpg";
import report1 from "./../images/report1.jpg";

const useStyles = makeStyles((theme) =>({
    appBar: {
        backgroundColor: "#aa00ff"
    }, 
    // body:{
    //     backgroundColor: '#d7a8df',
    //     paddingBottom: theme.spacing(10)
    // },
    buses: {
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
        paddingTop: theme.spacing(10),
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
        width: "100%",
        padding: '20px 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        alignItems: 'center'
    }

}));

export default function ExampleDash() {
//    componentDidMount= async() =>{



//    }

    const classes = useStyles();
    return(
        <div className={classes.body}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h4" className={classes.title}>
                    eBus | Dashboard
                </Typography>     
                </Toolbar>
            </AppBar>
            <Box className={classes.buses}>
                {/* <Box>
                    <Typography variant="h6" className={classes.dashBody}>
                        Add image if WAnted 
                    </Typography> 
                </Box> */}
            </Box>
            <Container maxWidth="lg" className={classes.exampleContainer}>
                {/* <Typography variant="h6" className={classes.dashBody}>
                    sjfbnks 
                </Typography>  */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Buses}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Buses
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Show Bus number, Bus Routeand Bus capacity details. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                
                                <Button className={clsx(classes.button)} 
                    
                                    variant="contained" href="/viewBuses">
                                    {'Bus Details'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={driver1}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Conductors
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Show conductor details. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className={clsx(classes.button)} 
                                    
                                    variant="contained" href="/viewconductor">
                                    {'Conductor Details'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={report1}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Summary Report
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    View summary report for a particular time period.  
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className={clsx(classes.button)} 
                                    
                                    variant="contained" href="/reportgeneration">
                                    {'Report'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Container>

        </div>

    )
}


