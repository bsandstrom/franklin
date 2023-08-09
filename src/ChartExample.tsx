import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const bondBreakdown = [
  {
    label: 'City Hall',
    cost: 5,
  },
  {
    label: 'Roads',
    cost: 9,
  },
  {
    label: 'Trestle Bridge',
    cost: 3.5,
  },
  {
    label: 'White Water Park',
    cost: 2.5,
  },

]

const doughnutData = {
  labels: bondBreakdown.map(b => b.label),
  datasets: [
    {
      label: 'Proposed Cost',
      data: bondBreakdown.map(b => b.cost),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      // ],
      borderWidth: 1,
    },
  ],
};

export function ChartExample() {
  return (<div className="Chart-container">

<table>
          
            {
              bondBreakdown.map(b => (<tr><td>{b.label}</td><td>{b.cost} Million</td></tr>))
            }
        </table>
  <Doughnut width={500} height={500} data={doughnutData} />
  </div>);
}
