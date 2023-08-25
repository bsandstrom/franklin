import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const bondBreakdown = [
	{
		name: "City Hall",
		value: 5,
	},
	{
		name: "Roads",
		value: 9,
	},
	{
		name: "Trestle Bridge",
		value: 3.5,
	},
	{
		name: "White Water Park",
		value: 2.5,
	},
];

const doughnutData = {
	labels: bondBreakdown.map((b) => b.name),
	datasets: [
		{
			label: "Proposed Cost",
			data: bondBreakdown.map((b) => b.value),
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
			<Doughnut width={500} height={500} data={doughnutData} />
		</div>
	);
}
