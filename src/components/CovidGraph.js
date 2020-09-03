import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import covidData from '../covidData';

const state = {
  labels: [
    'Total Recovered', 
    'Active Cases', 
    'Critical',
    'Tested', 
    'New Cases',
    ],
  datasets: [
    {
      label: 'Cases',
      backgroundColor: [
        '#FF9747',
        '#FF5C6F',
        '#793285',
        '#4626A6',
        '#365E81',
      ],
      hoverBackgroundColor: [
      '#FFD1AD',
      '#FFADB6',
      '#EAD2EE',
      '#D9B8F5',
      '#C5D7E7',
      ],
    }
  ]
}

export default class CovidGraph extends React.Component {
  state = {
    data: [
      this.props.total_recovered, 
      this.props.active_cases, 
      this.props.erious_critical,
      this.props.total_tests, 
      this.props.new_cases,
  ],
  }

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
              text: 'Insights to cases',
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