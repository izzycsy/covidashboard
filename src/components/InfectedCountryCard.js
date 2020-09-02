import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Grid, Container } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

export default function InfectedCountryCard({
  urlFlag,
  country_name,
  cases,
  deaths,
  total_recovered,
}) {
  return (
    <Card>
      
      <Container className="oneHorizontalCard">
      
      {/* <button className="countryButton"> */}
      
      <Grid container>
        <Grid item xs={3} style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                }}>
          <CardHeader
          avatar={<Avatar src={urlFlag} />}
          title={country_name} className="headerCountry"
          />
        </Grid>

        <Grid item xs={8}></Grid>
        <Grid item xs={1}>
        <FavoriteBorderOutlinedIcon className="heartIcon" />
        
        </Grid>

      </Grid>
      
      <CardContent>

        <Grid style={{ textAlign: "center" }} container>

          <Grid item sm={4} xs={4} lg={4}  className="cardDivider">
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

          <Grid item sm={4} xs={4} lg={4} className="cardDivider">
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

          <Grid item sm={4} xs={4} lg={4}>
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

      {/* </button> */}

      </Container>
    </Card>
    
  );
}