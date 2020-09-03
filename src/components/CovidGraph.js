import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// const state = {
//   type: 'doughnut',
//   labels: [
//     'Total Recovered', 
//     'Active Cases', 
//     'Critical',
//     'Tested', 
//     'New Cases',
//     ],
//   datasets: [
//     {
//       data: [ 
//         this.props.total_recovered, 
//         this.props.active_cases, 
//         this.props.serious_critical,
//         this.props.total_tests, 
//         this.props.new_cases,
//       ],
//       label: 'Cases',
//       backgroundColor: [
//         '#FF9747',
//         '#FF5C6F',
//         '#793285',
//         '#4626A6',
//         '#365E81',
//       ],
//       hoverBackgroundColor: [
//       '#FFD1AD',
//       '#FFADB6',
//       '#EAD2EE',
//       '#D9B8F5',
//       '#C5D7E7',
//       ],
//     }
//   ]
// }

export default class CovidGraph extends React.Component {
  state = {
    type: 'doughnut',
    labels: [
      'Total Recovered', 
      'Active Cases', 
      'Critical',
      'Tested', 
      'New Cases',
      ],
    datasets: [
      {
        data: [ 
          this.props.total_recovered, 
          this.props.active_cases, 
          this.props.serious_critical,
          this.props.total_tests, 
          this.props.new_cases,
        ],
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
  // state = {
  //   data: [
  //     this.props.total_recovered, 
  //     this.props.active_cases, 
  //     this.props.serious_critical,
  //     this.props.total_tests, 
  //     this.props.new_cases 
  // ]
  // }
  

  render() {
    console.log(this.props.data);
    return (
      <div>
        <Doughnut
          data = {this.state.datasets[0].data}
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
            style={{ position: "relative", height: 600, width: 800 }}
        />
      </div>
    );
  }
}