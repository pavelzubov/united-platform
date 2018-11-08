import { ResponsiveContainer, LineChart, Line } from "recharts";
import React from "react";

const PSProfitChart = ({ data }) => {
  return (
    data.length > 0 && (
      <ResponsiveContainer height={100}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="totalProfit"
            stroke="#03bdaf"
            isAnimationActive={false}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  );
};

export default PSProfitChart;
