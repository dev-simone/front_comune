import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import Form from "../components/FormData";

const AddEvent = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    postcard: undefined,
    date: {
      start: "",
      end: "",
    },
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
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("/event-page", data, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
      });
      if (response?.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("evento aggiunto!");
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
          postcard: {},
          date: {
            start: "",
            end: "",
          },
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
      whichPage="evento"
      isLoading={isLoading}
    />
  );
};
export default AddEvent;
