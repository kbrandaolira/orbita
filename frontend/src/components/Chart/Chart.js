import React from "react";
import LineChart from "react-linechart";
import "../../../node_modules/react-linechart/dist/styles.css";

class Chart extends React.Component {
  render() {
    const data = [
      {
        color: "steelblue",
        points: [{ x: 2017, y: 100 }, { x: 2018, y: 150 }, { x: 2019, y: 200 }]
      }
    ];
    return (
      <div>
        <LineChart width={900} height={400} hideXLabel="true" hideYLabel="true" data={data} />
      </div>
    );
  }
}

export default Chart;
