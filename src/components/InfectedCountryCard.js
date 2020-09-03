import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Grid, Container } from "@material-ui/core";
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CovidGraph from './CovidGraph';
// import GraphModal from './GraphModal';

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
    width: 600,
    height: 400,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

// const theme = createMuiTheme({
//   overrides: {
//     // Style sheet name ⚛️
//     MuiPaper: {
//       // Name of the rule
//       text: {
//         // Some CSS
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 400,
//         width: 500,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       },
//     },
//   },
// });


export default function InfectedCountryCard({
  urlFlag,
  country_name,
  cases,
  deaths,
  total_recovered,
}) {


  const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };


  return (
    <Card>
      
      <Container className="oneHorizontalCard">
      
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
          {/* <FavoriteBorderOutlinedIcon className="heartIcon" /> */}

          {/* <ThemeProvider theme={theme}> */}
            <div className={classes.root}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />} label="" className="heartIcon" />

              <div className={classes.container}>
                  {/* Conditionally applies the timeout prop to change the entry speed. */}

                <Grow in={checked}
                   style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}
                  >
                    <Paper elevation={4} className={classes.paper}>
                      <svg className={classes.svg}>
                          {/* <polygon points="0,100 50,00, 100,100" className={classes.polygon} /> */}
                          <CovidGraph />
                          {/* <GraphModal /> */}
                      </svg>
                    </Paper>
                </Grow>
              </div>
            </div>
            
            {/* </ThemeProvider> */}
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
      </Container>
    </Card>
    
  );
}