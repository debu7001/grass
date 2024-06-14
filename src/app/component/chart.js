import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Line } from "react-chartjs-2";

const formatDataForTooltip = (value) => {
  if (typeof value === 'number' && value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value;
};

const formatYAxisTicks = (value) => {
  if (typeof value === 'number' && value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value;
};

const RevenueLineChart = ({ height }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May","jun",],
    datasets: [
      {
        label: "Last 7 days",
        data: [10000,15000,23000,12000,8000,35000],
        borderColor: "#F7981D",
      },
      {
        label: "Prior wek",
        data: [5000, 15000, 15000,20000,30000],
        borderColor: "#237BFF",
      },
    
    ],
  };

  const options = {
    legend: {
      display: false, // Hide the legend
      onClick: () => {} 
    },
    tooltips: {
      callbacks: {
        label: function(context) {
          let label = '';
          if (context.parsed.y !== null) {
            label += formatDataForTooltip(context.parsed.y);
          }
          return label;
        }
      }
    },
    
    scales: {
      y: {
        ticks: {
          callback: function(value, index, values) {
            return formatYAxisTicks(value);
          }
        }
      }
    }
  };

  return <Line style={{ height:'345px' }} data={data} options={options} />;
};

export default RevenueLineChart;
