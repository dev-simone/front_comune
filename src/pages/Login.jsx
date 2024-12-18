import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { VscKey, VscInfo } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";
import { LuLogIn } from "react-icons/lu";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setCsrfToken } = useAuth();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    name: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { name, password } = dataUser;
    try {
      const response = await axios.post(
        "/login",
        {
          name,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const csrfResponse = await axios.get("/csrf-token");

        if (csrfResponse.status === 200) {
          const csrfToken = csrfResponse.data.csrfToken;
          // Save the CSRF token in sessionStorage
          setCsrfToken(csrfToken);
        } else {
          console.error("Unable to retrieve CSRF token");
        }
      } else {
        console.error("Failed to log in");
      }

      setDataUser({});
      setUser(response.data.user);
      navigate("/reserved-area");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log("Server response:", error.response.data);
        toast.error(error.response.data.error);
      } else if (error.request) {
        toast.error("No response from server");
      } else {
        toast.error("Error setting up request");
      }
    }
  };

  return (
    <div className="pb-10 px-5 min-h-[70vh] text-[#2F475E] grid grid-cols-1  gap-10 md:grid-cols-2 g md:pt-32 ">
      <form
        className="flex flex-col w-full md:pl-28 lg:pl-52 mt-20 md:mt-0"
        onSubmit={handleLogin}
      >
        <input
          className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 max-w-[300px]"
          type="text"
          placeholder="Nome"
          autoComplete="off"
          id="name"
          value={dataUser.name}
          onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })}
        />
        <label htmlFor="name">Inserire il nome</label>

        <div className="mt-5 flex flex-col relative max-w-[300px]">
          <VscKey
            size={20}
            className="absolute left-2 top-1/2 -translate-y-1/2  transform rotate-45"
          />
          <AiOutlineEye
            size={22}
            className="absolute top-1/2 -translate-y-1/2 right-2 text-primary cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
          <input
            className="outline-none border border-transparent border-b-[#2F475E] py-2 pl-9"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="inserisci password"
            id="password"
            value={dataUser.password}
            onChange={(e) =>
              setDataUser({ ...dataUser, password: e.target.value })
            }
          />
        </div>

        <label className="mt-2" htmlFor="password">
          Password
        </label>
        <button
          className="mt-10 bg-primary text-white px-5 py-4 w-[180px] flex items-center justify-center space-x-3 font-bold rounded-md"
          type="submit"
        >
          <p>Accedi</p>
          <LuLogIn size={20} />
        </button>
      </form>
      <div className="relative md:w-2/3 text-[#2F475E]">
        <p className="absolute -top-3 left-10 bg-white px-5 flex items-center space-x-2">
          {" "}
          <VscInfo size={20} /> <span>Attenzione</span>
        </p>
        <p className="p-10 border-2 border-[#5C6F82]  rounded-xl">
          Questa schermata di Log-In è riservata solo al personale autorizzato
        </p>
      </div>
    </div>
  );
};
export default Login;
