import { SensorView } from "../components/SensorView";
import { CustomRoute } from "../components/CustomRoute";

const Sensors: React.FC = ({}) => {
  return <CustomRoute isPrivate={true} Component={SensorView} />;
};

export default Sensors;
