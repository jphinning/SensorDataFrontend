import React from "react";
import { CustomRoute } from "../components/CustomRoute";
import { SidebarWithHeader } from "../components/dashboard/SidebarWithHeader";
import { LandingPage } from "../components/LandingPage";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <SidebarWithHeader>
      <CustomRoute isPrivate={true} Component={LandingPage} />
    </SidebarWithHeader>
  );
};

export default index;
