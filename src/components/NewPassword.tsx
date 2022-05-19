import { useSelector } from "react-redux";
import { initState } from "../store";

const NewPassword: React.FC = () => {
  const newPass = useSelector((state: initState) => state.password);
  return <div className="passworddiv">{newPass}</div>;
};

export default NewPassword;
