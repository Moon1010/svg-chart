import { BarsChart } from "./barsChart";
import { LineChart } from "./lineChart";
import { withArrayData } from "./withArrayData";

type Mode = "bars" | "line";

export type CommonChartProps = {
  data: number[];
  color: string;
};

export type ChartProps = {
  mode: Mode;
} & CommonChartProps;

function Chart({ mode, data, color }: ChartProps) {
  if (!data.length) {
    return <div>Please input data</div>;
  }

  if (mode == "line") {
    return <LineChart data={data} color={color} />;
  }
  return <BarsChart data={data} color={color} />;
}

export default withArrayData(Chart);
