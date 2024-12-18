import FormData from "../components/FormData";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Modify = () => {
  const { csrfToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { itemClicked, page } = location.state;
  const [data, setData] = useState(itemClicked);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e, option, whichPage) => {
    e.preventDefault();
    setIsLoading(true);
    if (option === "save") {
      if (whichPage === "sito") {
        try {
          const response = await axios.post("/update-site", data, {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
          });
          if (response?.data.error) {
            toast.error(response.data.error);
          } else {
            toast.success("Modifica effettuata!");
            setData({
              name: "",
            });
            navigate("/reserved-area");
          }
        } catch (error) {
          console.error(error);
        }
      } else if (whichPage === "evento") {
        try {
          const response = await axios.post("/update-event", data, {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
          });
          if (response?.data.error) {
            toast.error(response.data.error);
          } else {
            toast.success("Modifica effettuata!");
            setData({
              name: "",
            });
            navigate("/reserved-area");
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else if (option === "delete") {
      if (whichPage === "sito") {
        try {
          const response = await axios.post("/delete-site", data, {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
          });
          if (response?.data.error) {
            toast.error(response.data.error);
          } else {
            toast.success("Eliminato con successo!");
            setData({
              name: "",
            });
            navigate("/reserved-area");
          }
        } catch (error) {
          console.error(error);
        }
      } else if (whichPage === "evento") {
        try {
          const response = await axios.post("/delete-event", data, {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
          });
          if (response?.data.error) {
            toast.error(response.data.error);
          } else {
            toast.success("Eliminato con successo!");
            setData({
              name: "",
            });
            navigate("/reserved-area");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <FormData
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
      whichPage={page}
      modify={true}
      isLoading={isLoading}
    />
  );
};
export default Modify;
