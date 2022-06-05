import React from "react";
import { PERCENT_MAX_DEFAULT } from "../barsChart";
import { CommonChartProps } from "../Chart";

export function LineChart({ data, color }: CommonChartProps) {
  const points = React.useMemo(() => {
    const maxValue = Math.max(...data);
    if (!maxValue) {
      return "";
    }
    const length = data?.length;
    const widthUnit = PERCENT_MAX_DEFAULT / length;
    const heightUnit = PERCENT_MAX_DEFAULT / maxValue;

    const points = data
      .map((item, index) => {
        const x = widthUnit * index;
        const y = heightUnit * (maxValue - item);
        return `${x}, ${y}`;
      })
      .join(" ");

    return `0,${heightUnit * maxValue} ${points} ${
      widthUnit * (length - 1) + widthUnit
    }, ${heightUnit * maxValue}`;
  }, [data]);

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polyline fillOpacity="0.1" points={points} fill={color} stroke={color} />
    </svg>
  );
}
