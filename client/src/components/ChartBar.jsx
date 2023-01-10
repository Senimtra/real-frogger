import React from "react";
import { Bar } from "react-chartjs-2";

function ChartBar(props) {
  return (
    <div className="chart">
      <Bar
        data={props.chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default ChartBar;
