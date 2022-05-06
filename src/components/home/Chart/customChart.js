import React from "react";
import Chart from "chart.js";
import { dataSet } from "./data";
import { BiChevronDown, BiCalendar } from "react-icons/bi";
import useStyles from '../../styles/Chart';

const useChart = (nodeRef, options) => {
  React.useEffect(() => {
    new Chart(nodeRef.current, options);
    console.log("render");
  }, [nodeRef, options]);
  return {};
};

function Charts() {
  const canvasRef = React.useRef(null);
  useChart(canvasRef, {
    type: "line",
    data: {
      labels: Object.keys(dataSet).filter(key => dataSet[key].isVisible),
      datasets: [
        {
          label: "",
          data: Object.keys(dataSet)
            .filter(key => dataSet[key].isVisible)
            .map(key => dataSet[key].value),
          backgroundColor: '#ffdfdf',
          borderColor: '#fdfdff',
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: { fontColor: "#ff0000" }
      },
      scales: {
        yAxes: [
          { display: false }
        ]
      }
    }
  });
  const classes = useStyles();

  return (
    <div className={classes.customChart}>
      <div className={classes.justifyContentBetween}>
        <div className={classes.dFlex}>
          <span className={classes.graphType}>Home</span>
          <BiChevronDown />
        </div>
        <div className={classes.calendarBg}>
          <BiCalendar />
          <span className={classes.calendarText}>Jan-Oct 21</span>
        </div>
      </div>
      <canvas className={classes.canvas} ref={canvasRef}  />
    </div>
  );
}

export default Charts;
