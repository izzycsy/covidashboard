import React, { useState } from 'react';
import { Container, Grid, } from "@material-ui/core";
import InfectedCountryCard from "./InfectedCountryCard";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CovidGraph from './CovidGraph';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function InfectedCountryList({ infectedCountries, updatedAt }) {

  console.log(infectedCountries);

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

  return (
    <Container>
      <p style={{ marginBottom: "0" }} className="title">Covid-19 Dashboard</p>
      <p style={{ marginTop: "0" }} className="subtitle">updated: {updatedAt}</p>
      
      <Grid spacing={1} container>
        {infectedCountries.map(country => (
          <Grid key={country.country_name} lg={6} xs={12} sm={12} item>

            {/* <button onClick={handleOpen} className="countryButton"> */}
              <InfectedCountryCard {...country} />
            {/* </button> */}

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              
            <div style={modalStyle} className={classes.paper}>
              <CovidGraph />
            </div>

            </Modal>
            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}