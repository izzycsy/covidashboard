import React from 'react';
import { Container, Grid, } from "@material-ui/core";

import InfectedCountryCard from "./InfectedCountryCard";

export default function InfectedCountryList({ infectedCountries, updatedAt }) {
  console.log(infectedCountries);
  return (
    <Container>
      <h1 style={{ marginBottom: "0" }}>Infected Countries</h1>
      <p style={{ color: "#CB997E", marginTop: "0" }}>updated to {updatedAt}</p>
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