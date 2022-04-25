import { SensorView } from "../components/SensorView";
import { CustomRoute } from "../components/CustomRoute";
import { SidebarWithHeader } from "../components/dashboard/SidebarWithHeader";

const DataTable: React.FC = ({}) => {
  return (
    <SidebarWithHeader>
      <CustomRoute isPrivate={true} Component={SensorView} />
    </SidebarWithHeader>
  );
};

export default DataTable;
