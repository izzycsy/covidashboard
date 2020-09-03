import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import CovidGraph from "./CovidGraph";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 2, 5, 2),
    height: 450,
    width: 800,
  },
}));

export default function InfectedCountryCard({
  urlFlag,
  country_name,
  cases,
  deaths,
  total_recovered, 
  active_cases, 
  serious_critical,
  total_tests, 
  new_cases 
})

{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

let data = {
  totalRecovered: total_recovered, 
  activeCases: active_cases, 
  seriousCritical: serious_critical,
  totalTests: total_tests, 
  newCases: new_cases,
}

  return (
    <Card>
      <Container className="oneHorizontalCard">
        <Grid container>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            <CardHeader
              avatar={<Avatar src={urlFlag} />}
              title={country_name}
              className="headerCountry"
            />
          </Grid>

          <Grid item xs={8}></Grid>

          <Grid item xs={1}>
            <div>

              <button type="button" onClick={handleOpen} className="buttonInsights">
                Insights
              </button>

              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 1000,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    {/* <h2 id="transition-modal-title">Transition modal</h2> */}
                    <CovidGraph data={data}
                    
                     />
                  </div>
                </Fade>

              </Modal>

            </div>
          </Grid>
        </Grid>

        <CardContent>
          <Grid style={{ textAlign: "center" }} container>
            <Grid item sm={4} xs={4} lg={4} className="cardDivider">
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
      </Container>
    </Card>
  );
}
