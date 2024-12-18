import useAuth from "../hooks/useAuth";
import { AiOutlineLogout } from "react-icons/ai";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout}>
      <AiOutlineLogout size={35} />
    </button>
  );
};
export default Logout;
