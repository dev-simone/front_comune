/** 
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { csrfToken } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, password } = data;
    try {
      const response = await axios.post(
        "/register",
        {
          name,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
        }
      );

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Registrazione riuscita!");
        setData({});
        navigate("/reserved-area");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[70vh] text-black flex flex-col justify-center items-center">
      <h1 className="mb-20">REGISTER</h1>
      <form
        className="flex flex-col bg-blue-300 w-2/3 mx-auto p-5"
        onSubmit={registerUser}
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="inserisci nome"
          autoComplete="off"
          id="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label className="mt-5" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="inserisci password"
          id="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="mt-5" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
};
export default Register;
*/
