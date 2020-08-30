import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Grid } from "@material-ui/core";

export default function InfectedCountryCard({
  urlFlag,
  country_name,
  cases,
  deaths,
  total_recovered,
}) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={urlFlag} />}
        title={country_name}
      />
      <CardContent>
        <Grid style={{ textAlign: "center" }} container>
          <Grid style={{ borderRight: "solid #CB997E" }} sm={4} xs={4} lg={4} item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>{cases}</span>
              <span>cases</span>
            </div>
          </Grid>
          <Grid style={{ borderRight: "solid #CB997E" }} sm={4} xs={4} lg={4} item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>{deaths}</span>
              <span>deaths</span>
            </div>
          </Grid>
          <Grid sm={4} xs={4} lg={4} item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>{total_recovered}</span>
              <span>recovered</span>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}