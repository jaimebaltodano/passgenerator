import { useSelector } from "react-redux";
import { initState } from "../store";

const NewPassword = (): JSX.Element => {
  const newPass = useSelector((state: initState) => state.password);
  return <div className="passworddiv">{newPass}</div>;
};

export default NewPassword;
