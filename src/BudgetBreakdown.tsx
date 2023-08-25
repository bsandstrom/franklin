import React, { PureComponent, SVGProps, useState } from "react";
import {
	PieChart,
	Pie,
	Legend,
	Tooltip,
	ResponsiveContainer,
	Cell,
	PieLabelRenderProps,
	Label,
} from "recharts";
import { bondBreakdown } from "./ChartExample";

const colors = [
	"rgba(255, 99, 132, .75)",
	"rgba(54, 162, 235, .75)",
	"rgba(255, 206, 86, .75)",
	"rgba(75, 192, 192, .75)",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	x,
	y,
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}: PieLabelRenderProps) => {
	const radius =
		Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
	// const x = Number(cx) + Number(radius) * Math.cos(-Number(midAngle) * RADIAN);
	// const y = Number(cy) + Number(radius) * Math.sin(-Number(midAngle) * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > Number(cx) ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${bondBreakdown[index ?? 0].name}`}
		</text>
		// <Label position="outside">{`${bondBreakdown[index ?? 0].name}`}</Label>
	);
};

export default function BudgetBreakdown() {
	const [highlightedIndex, setHighlightedIndex] = useState<Number | null>(null);

	return (
		<>
			<h1>Proposed Bond Budget Breakdown</h1>
			<table>
				{bondBreakdown.map((b, index) => {
					const props =
						index === highlightedIndex ? { className: "highlighted" } : {};
					return (
						<tr {...props}>
							<td>{b.name}</td>
							<td>${b.value} Million</td>
						</tr>
					);
				})}
				{/* <hr /> */}
				<tr>
					<td>
						<strong>Total:</strong>
					</td>
					<td>
						<strong>
							${bondBreakdown.reduce((a, b) => a + b.value, 0)} Million
						</strong>
					</td>
				</tr>
			</table>
			<PieChart width={800} height={600}>
				<Pie
					dataKey="value"
					isAnimationActive
					data={bondBreakdown}
					cx="50%"
					cy="50%"
					outerRadius={250}
					innerRadius={150}
					legendType="circle"
					// label
					// label={(props) => {
					// 	console.log(props);
					// 	return <>label!</>;
					// }}
					onMouseEnter={(data, index) => setHighlightedIndex(index)}
					onMouseLeave={() => setHighlightedIndex(null)}
					label={renderCustomizedLabel}
				>
					{bondBreakdown.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				<Tooltip />
			</PieChart>
		</>
	);
}
