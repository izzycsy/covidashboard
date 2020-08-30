import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import InfectedCountryList from "./components/InfectedCountryList";
import InfectedCountryMap from "./components/InfectedCountryMap";
import covidData from "./covidData";

require("dotenv").config();

function App() {
  let [infectedCountries, setinfectedCountries] = useState([]);
  let [updatedAt, setUpdatedAt] = useState();

  useEffect(() => {
    // console.log(covidData);
    // console.log(process.env.REACT_APP_COVIDKEY)
    
    setinfectedCountries(covidData.data); //checking fetch data from js

    /*
    const fetchData = async () => {
      let infectedCountriesResponse = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", 
      {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_COVIDKEY
        }
        },
      );
      
      //RESTful API
      let allCountriesResponse = await fetch("https://restcountries.eu/rest/v2/all");

      let allCountries = [];
      if (allCountriesResponse.ok) {
        allCountries = await allCountriesResponse.json();
      }

      if (infectedCountriesResponse.ok) {
        let { countries_stat, statistic_taken_at } = await infectedCountriesResponse.json();
        console.log("countries_stat", JSON.stringify(countries_stat));
        console.log("statistic_taken_at", statistic_taken_at);

        setinfectedCountries(
          countries_stat.map(stat => {
            let countryFound = allCountries.find(
              country =>
                country.name.toUpperCase().indexOf(stat.country_name.toUpperCase()) !== -1 ||
                country.altSpellings.findIndex(
                  alt => alt.toUpperCase().indexOf(stat.country_name.toUpperCase()) !== -1,
                ) !== -1,
            );
            if (!countryFound) countryFound = {};

            return {
              ...stat,
              urlFlag: countryFound.flag,
              latlng: countryFound.latlng,
            };
          }),
        );

        setUpdatedAt(statistic_taken_at);
      }
    };

    fetchData(); */
  }, []);


  return (
    <Grid container>
      <Grid style={{ height: "100vh", overflowY: "auto" }} lg={6} sm={12} item>
        {infectedCountries && <InfectedCountryList infectedCountries={infectedCountries} updatedAt={updatedAt} />}
      </Grid>
      <Grid style={{ height: "100vh" }} lg={6} sm={12} item>
      {/* {infectedCountries && <InfectedCountryMap infectedCountries={infectedCountries} />} */}
      </Grid>
    </Grid>
  );
}

export default App;