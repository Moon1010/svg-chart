import React from "react";
import { MAX_PERCENT_DEFAULT } from "../../../../constants";
import { CommonChartProps } from "../../Chart";

export type BarsChartProps = CommonChartProps;

export function BarsChart({ data, color }: BarsChartProps) {
  const rectangles = React.useMemo(() => {
    const maxValue = Math.max(...data);

    if (!maxValue) {
      return null;
    }

    const widthPercentUnit = MAX_PERCENT_DEFAULT / data.length;
    const heightPercentUnit = MAX_PERCENT_DEFAULT / maxValue;

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
