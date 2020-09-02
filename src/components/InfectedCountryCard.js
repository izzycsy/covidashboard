import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Grid, Container } from "@material-ui/core";
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

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
      
      <div>
        <CardHeader
        avatar={<Avatar src={urlFlag} />}
        title={country_name} className="headerCountry"
        />
      </div>
      

      {/* <div>
      <FavoriteBorderOutlinedIcon style={{ textAlign: "right" }} className="heartIcon" />
      </div> */}
      
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