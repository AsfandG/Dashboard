"use client";

import React from "react";
import "@styles/chartBox.scss";
import Image from "next/image";
import Link from "next/link";
import { ResponsiveContainer, LineChart, Line } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartBox = () => {
  return (
    <div className="chartBox">
      <div className="chartBox__info">
        <div className="chartBox__info--title">
          <Image
            src="/images/user.svg"
            width={30}
            height={30}
            alt="user-icon"
          />
          <span>Total Users</span>
        </div>
        <h1>11.426</h1>
        <Link href="">View all</Link>
      </div>
      <div className="chartBox__chart">
        <div className="chartBox__chart--chartInfo">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartBox__chart--text">
          <span className="chartBox__chart--percentage">52%</span>
          <span className="chartBox__chart--duration">2 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;