import React from 'react';
import InfectedCountryCard from "./InfectedCountryCard";
// import CovidGraph from './CovidGraph';

import { Container, Grid } from "@material-ui/core";

export default function InfectedCountryList({ infectedCountries, updatedAt }) {

  console.log(infectedCountries);

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
  
      </Grid>
    </Container>
  );
}