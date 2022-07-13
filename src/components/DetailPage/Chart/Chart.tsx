import React, { useLayoutEffect, useMemo } from 'react';

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
import moment from 'moment';

interface ChartProps {
  historyData: historyOfCurrencyDataType;
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'History of price (1 Year)',
    },
  },
};

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

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 800) {
        options.aspectRatio = 2;
      } else {
        options.aspectRatio = 1;
      }
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const labels = useMemo(
    () => historyData.map((item) => moment(item.time).format('MMM YY')),
    [historyData],
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          fill: true,
          label: 'Price USD',
          data: historyData.map((item) => item.priceUsd),
          borderColor: COLOR.WHITE,
          backgroundColor: COLOR.GRAY_DARK_BLUE,
          borderWidth: 2,
        },
      ],
    }),
    [labels, historyData],
  );

  return <Line options={options} data={data} />;
};

export default React.memo(Chart);
