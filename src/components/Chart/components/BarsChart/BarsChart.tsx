import React from "react";
import { PERCENT_MAX_DEFAULT } from "../../../../constants";
import { CommonChartProps } from "../../Chart";

export function BarsChart({ data, color }: CommonChartProps) {
  const rectangles = React.useMemo(() => {
    const maxValue = Math.max(...data);
    if (!maxValue) {
      return null;
    }
    const widthPercentUnit = PERCENT_MAX_DEFAULT / data.length;
    const heightPercentUnit = PERCENT_MAX_DEFAULT / Math.max(...data);

    return (
      <g>
        {data.map((value, index) => {
          return (
            <rect
              key={index}
              fill={color}
              x={`${widthPercentUnit * index}%`}
              y={`${heightPercentUnit * (maxValue - value)}%`}
              height={`${heightPercentUnit * value}%`}
              width={`${widthPercentUnit}%`}
            ></rect>
          );
        })}
      </g>
    );
  }, [color, data]);

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
    >
      {rectangles}
    </svg>
  );
}
