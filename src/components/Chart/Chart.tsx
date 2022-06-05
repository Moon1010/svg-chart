import BarsChart from "./components/BarsChart";
import LineChart from "./components/LineChart";

type Mode = "bars" | "line";

export type CommonChartProps = {
  data: number[];
  color: string;
};

export type ChartProps = {
  mode: Mode;
} & CommonChartProps;

export function Chart({ mode, data, color }: ChartProps) {
  if (!data.length) {
    return <div>No data</div>;
  }

  if (mode == "line") {
    return <LineChart data={data} color={color} />;
  }
  return <BarsChart data={data} color={color} />;
}
