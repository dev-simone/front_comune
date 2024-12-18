import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Form from "../components/FormData";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddSite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { csrfToken } = useAuth();
  const [data, setData] = useState({
    name: "",
    address: "",
    description: "",
    tel: "",
    time: {
      start: "",
      end: "",
    },
    image: [],
    hours: {
      start: "",
      end: "",
    },
    price: "",
    priceVariable: "",
    accessibility: "",
    directions: "",
    tags: {
      tag1: "",
      tag2: "",
    },
    url: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("/arch-site", data, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
      });
      if (response?.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Sito aggiunto!");
        setData({
          name: "",
          address: "",
          description: "",
          tel: "",
          time: {
            start: "",
            end: "",
          },
          image: [],
          hours: {
            start: "",
            end: "",
          },
          price: "",
          priceVariable: "",
          accessibility: "",
          directions: "",
          tags: {
            tag1: "",
            tag2: "",
          },
          url: "",
        });
        navigate("/reserved-area");
      }
    } catch (error) {
      console.error(error);
      if (error.response?.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error(error.message || "Si è verificato un errore");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
      whichPage="sito"
      isLoading={isLoading}
    />
  );
};
export default AddSite;
