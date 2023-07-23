"use client";

import React from "react";
import "@styles/chartBox.scss";
import Image from "next/image";
import Link from "next/link";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="chartBox__info">
        <div className="chartBox__info--title">
          <Image src={props.icon} width={30} height={30} alt="user-icon" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link href="" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartBox__chart">
        <div className="chartBox__chart--chartInfo">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartBox__chart--text">
          <span
            className="chartBox__chart--percentage"
            style={{ color: props.percentage < 1 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="chartBox__chart--duration">2 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
