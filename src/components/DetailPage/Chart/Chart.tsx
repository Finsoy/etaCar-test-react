import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { historyOfCurrencyDataType } from '../../../types/historyOfCurrencyDataType';
import { COLOR } from '../../../style/_colors';

interface ChartProps {
  historyData: historyOfCurrencyDataType;
}

const Chart: React.FC<ChartProps> = ({ historyData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'History of price',
      },
    },
  };

  const labels = historyData.map((item) => item.time);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Price USD',
        data: historyData.map((item) => item.priceUsd),
        borderColor: COLOR.DARK_BLUE,
        backgroundColor: COLOR.WHITE,
      },
    ],
  };

  return (
    <div>
      Chart
      <Line options={options} data={data} />;
    </div>
  );
};

export default Chart;
