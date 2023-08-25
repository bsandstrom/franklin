import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const bondBreakdown = [
	{
		label: "City Hall",
		cost: 5,
	},
	{
		label: "Roads",
		cost: 9,
	},
	{
		label: "Trestle Bridge",
		cost: 3.5,
	},
	{
		label: "White Water Park",
		cost: 2.5,
	},
];

const doughnutData = {
	labels: bondBreakdown.map((b) => b.label),
	datasets: [
		{
			label: "Proposed Cost",
			data: bondBreakdown.map((b) => b.cost),
			backgroundColor: [
				"rgba(255, 99, 132, .75)",
				"rgba(54, 162, 235, .75)",
				"rgba(255, 206, 86, .75)",
				"rgba(75, 192, 192, .75)",
			],
			color: "white",
			borderWidth: 1,
		},
	],
};

export function ChartExample() {
	return (
		<div className="Chart-container">
			<table>
				{bondBreakdown.map((b) => (
					<tr>
						<td>{b.label}</td>
						<td>${b.cost} Million</td>
					</tr>
				))}
				<tr>
					<td>Total:</td>
					<td>${bondBreakdown.reduce((a, b) => a + b.cost, 0)} Million</td>
				</tr>
			</table>
			<Doughnut width={500} height={500} data={doughnutData} />
		</div>
	);
}
