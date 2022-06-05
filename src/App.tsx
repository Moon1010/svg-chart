import Chart from "./components/Chart";

export function App() {
  const data: number[] | string = "1,9,3,5,8,1,7,12,4,20,6,7,8,14,1,17";
  return (
    <div
      style={{
        margin: "50px 20px",
      }}
    >
      <div style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        Chart
      </div>
      <div
        style={{
          margin: 50,
          display: "flex",
          flexDirection: "row",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>mode = bars</div>
          <div
            style={{
              height: 200,
              width: 400,
              padding: "16px 8px 0 8px",
              border: "4px solid black",
            }}
          >
            <Chart data={data} mode="bars" color="#43C1F6" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>mode = line </div>
          <div
            style={{
              height: 200,
              width: 400,
              padding: "16px 0 0 0",
              border: "4px solid black",
            }}
          >
            <Chart data={data} mode="line" color="#43C1F6" />
          </div>
        </div>
      </div>
    </div>
  );
}
