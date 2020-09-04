import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import InfectedCountryList from "./components/InfectedCountryList";
import covidData from "./covidData";

// require("dotenv").config();

function App() {
  let [infectedCountries, setinfectedCountries] = useState([]); //render nothing [], then something []
  let [updatedAt, setUpdatedAt] = useState();

  useEffect(() => {
    // console.log(covidData);
    // console.log(process.env.REACT_APP_COVIDKEY)
    
    //setInfectedCountries data
    setinfectedCountries(covidData.data); //checking fetch data from js

    const today = new Date();
    const formattedDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-"+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setUpdatedAt(formattedDate);

    
    //RapidAPI
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

      //add latlng into covidData
      if (infectedCountriesResponse.ok) {
        let { countries_stat, statistic_taken_at } = await infectedCountriesResponse.json();
        
        const newData = countries_stat.map(stat => {
          let countryFound = allCountries.find(
            country =>
              country.name.toUpperCase().indexOf(stat.country_name.toUpperCase()) !== -1 ||
              country.altSpellings.findIndex(
                alt => alt.toUpperCase().indexOf(stat.country_name.toUpperCase()) !== -1,
              ) !== -1,
          );
          if (!countryFound) countryFound = {}; //return empty obj, latlng undefine

          return {
            ...stat, //adding lat * lng to the covidData.js
            urlFlag: countryFound.flag,
            latlng: countryFound.latlng,
          };
        })
        setinfectedCountries(newData);

        // console.log("countries_stat", JSON.stringify(newData));
        setUpdatedAt(statistic_taken_at);
      } else { 
        setinfectedCountries(covidData.data); //else use covidData.js

        const today = new Date();
        const formattedDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-"+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        setUpdatedAt(formattedDate);
      }
    };

    fetchData(); //end comment here
  }, []);

  
  return (
    <div>
      <Grid container>
        
        <Grid style={{ height: "100vh", overflowY: "auto" }} lg={12} sm={12} item>
          {infectedCountries && <InfectedCountryList infectedCountries={infectedCountries} updatedAt={updatedAt} />}
        </Grid>
        
      </Grid>
    </div>
  );
}

export default App;