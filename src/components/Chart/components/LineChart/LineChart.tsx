import React from "react";
import { MAX_PERCENT_DEFAULT } from "../../../../constants";
import { CommonChartProps } from "../../Chart";

export type LineChartProps = CommonChartProps;

export function LineChart({ data, color }: LineChartProps) {
  const points = React.useMemo(() => {
    const maxValue = Math.max(...data);

    if (!maxValue) {
      return "";
    }

    const length = data.length;
    const widthUnit = MAX_PERCENT_DEFAULT / length;
    const heightUnit = MAX_PERCENT_DEFAULT / maxValue;

    const points = data
      .map((item, index) => {
        const x = widthUnit * index;
        const y = heightUnit * (maxValue - item);
        return `${x}, ${y}`;
      })
      .join(" ");

    return `0,${MAX_PERCENT_DEFAULT} ${points} ${
      widthUnit * (length - 1) + widthUnit
    }, ${MAX_PERCENT_DEFAULT}`;
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
