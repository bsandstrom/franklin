import { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, PieLabelRenderProps } from "recharts";
import { bondBreakdown } from "./ChartExample";

const colors = [
	"rgba(255, 99, 132, .75)",
	"rgba(54, 162, 235, .75)",
	"rgba(255, 206, 86, .75)",
	"rgba(75, 192, 192, .75)",
];

const renderCustomizedLabel = ({ x, y, cx, index }: PieLabelRenderProps) => {
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
			<PieChart width={800} height={500}>
				<Pie
					dataKey="value"
					isAnimationActive
					data={bondBreakdown}
					cx="50%"
					cy="50%"
					outerRadius={200}
					innerRadius={100}
					legendType="circle"
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
