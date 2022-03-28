import { CustomRoute } from "../components/CustomRoute";
import { ProfilePage } from "../components/ProfilePage";

const userProfile: React.FC = ({}) => {
  return (
    <>
      <CustomRoute isPrivate={true} Component={ProfilePage} />
    </>
  );
};

export default userProfile;
