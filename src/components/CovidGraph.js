import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Cases',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#B21F00',
        '#C9DE00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#B21F00',
     '#C9DE00',
      ],
      data: [65, 59, 80, 81, 56, 12, 12]
    }
  ]
}

export default class CovidGraph extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data = {state}
          options = {
            {
            // responsive: true, 
            // maintainAspectRatio: true,
            title:{
              display: true,
              text: 'Average Cases per month',
              fontSize: 24
                },
            legend:{
              display: true,
              position: 'top'
                }
            }
            }
        />
      </div>
    );
  }
}