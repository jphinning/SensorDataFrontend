import React from "react";

import { CustomRoute } from "../components/CustomRoute";
import { LineChart } from "../components/LineChart";

const dataChart: React.FC = ({}) => {
  return <CustomRoute isPrivate={true} Component={LineChart} />;
};

export default dataChart;
