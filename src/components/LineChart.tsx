import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { formatDate } from "./SensorView";
import { Wrapper } from "./Wrapper";
import { useSensorData } from "../context/hooks/useSensorData";
import { Flex, Text } from "@chakra-ui/react";
import { PageHeader } from "./dashboard/PageHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {}

export const LineChart: React.FC<LineChartProps> = ({}) => {
  const { sensorData } = useSensorData({ limit: "all", order: "ASC" });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sensor Data",
      },
    },
  };

  const labels = sensorData.map(({ createDateColumn }) =>
    formatDate(createDateColumn)
  );

  const allData = sensorData.map(({ data }) => data);

  const data = {
    labels: labels.slice(-10),
    datasets: [
      {
        label: "DataBase readings",
        data: allData.slice(-10),
        borderColor: "#385898",
        backgroundColor: "#2c7a7b",
      },
    ],
  };

  return (
    <>
      {/* Header */}
      <PageHeader title="DATA CHART" route="DataChart" />

      <Wrapper>
        <Line options={options} data={data} />
      </Wrapper>
    </>
  );
};
