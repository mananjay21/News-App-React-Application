import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import button from '@material-ui/core/button';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Box, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    color: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: "5px"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "gray"
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

}));

const Responsive = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>

          <h1>CG NEWS</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Grid container justify="flex-end">
            <Link className="nav-link" aria-current="page" to="/"><Button className="nav-item">Home</Button></Link>
          </Grid>
          <Grid container justify="flex-end">
            <Link className="nav-link" to="/sports"><Button className="nav-item">sports</Button></Link>
          </Grid>
          <Grid container justify="flex-end">
            <Link className="nav-link" to="/health"><Button className="nav-item">Health</Button></Link>
          </Grid>

          <Grid container justify="flex-end">
            <Link className="nav-link" to="/business"><Button className="nav-item">Business</Button></Link>
          </Grid>
          <Grid container justify="flex-end">
            <Link className="nav-link" to="/entertainment"><Button className="nav-item">Entertainment</Button></Link>
          </Grid>
          <Grid container justify="flex-end">
            <Link className="nav-link" to="/technology"><Button className="nav-item">Technology</Button></Link>
          </Grid>
        </Toolbar>
      </AppBar>


    </div>
  )
}

export default Responsive