import React, {  } from 'react';
import InfectedCountryCard from "./InfectedCountryCard";
import CovidGraph from './CovidGraph';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function InfectedCountryList({ infectedCountries, updatedAt }) {

  console.log(infectedCountries);

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

  return (
    <Container>
      <p style={{ marginBottom: "0" }} className="title">Covid-19 Dashboard</p>
      <p style={{ marginTop: "0" }} className="subtitle">updated: {updatedAt}</p>
     
      <Grid spacing={1} container>
          {infectedCountries.map(country => (
            <Grid key={country.country_name} lg={6} xs={12} sm={12} item>        
            <InfectedCountryCard {...country} />
            </Grid>
          ))}

            <div className={classes.root}>
              <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />} label="Show" />

              <div className={classes.container}>
                  {/* Conditionally applies the timeout prop to change the entry speed. */}

                <Grow in={checked}
                      style={{ transformOrigin: '0 0 0' }}
                      {...(checked ? { timeout: 1000 } : {})}
                >
                  <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                        <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                        <CovidGraph />
                      </svg>
                    </Paper>
                  </Grow>
                </div>
            </div>
  
      </Grid>
    </Container>
  );
}