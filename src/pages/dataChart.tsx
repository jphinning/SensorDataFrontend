import React from "react";

import { CustomRoute } from "../components/CustomRoute";
import { SidebarWithHeader } from "../components/dashboard/SidebarWithHeader";
import { LineChart } from "../components/LineChart";

const dataChart: React.FC = ({}) => {
  return (
    <SidebarWithHeader>
      <CustomRoute isPrivate={true} Component={LineChart} />
    </SidebarWithHeader>
  );
};

export default dataChart;
