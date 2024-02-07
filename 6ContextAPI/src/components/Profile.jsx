import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className=" text-2xl font-semibold flex justify-center items-center my-4 p4">
        Please login
      </div>
    );
  return (
    <div className="text-2xl font-semibold flex justify-center items-center my-4 p-4">
      Welcome {user.username}
    </div>
  );
};
export default Profile;
