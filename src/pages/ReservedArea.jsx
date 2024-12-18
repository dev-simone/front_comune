import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Components
import ReservedSites from "../components/ReservedSites";
import ReservedEvents from "../components/ReservedEvents";

const ReservedArea = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState("sites");
  const [archSites, setArchSites] = useState();
  const [events, setEvents] = useState();

  useEffect(() => {
    let isMounted = true;
    const storedOption = sessionStorage.getItem("option");

    if (storedOption === "sites") {
      setOption("sites");
    } else if (storedOption === "events") {
      setOption("events");
    }

    const getEvents = async () => {
      try {
        const response = await axios.get("/event-page", {});
        if (response?.data && isMounted) {
          setEvents(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getSites = async () => {
      try {
        const response = await axios.get("/", {});
        if (response?.data && isMounted) {
          setArchSites(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSites();

    getEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (itemClicked, option, page) => {
    setOption(option);
    navigate("/modify-page", { state: { itemClicked, page } });
  };

  const changePage = (page) => {
    if (page === "sites") {
      sessionStorage.setItem("option", page);
      setOption(page);
    } else {
      sessionStorage.setItem("option", page);
      setOption(page);
    }
  };

  return (
    <div className="min-h-[70vh] text-black p-5">
      <div className="space-x-10 text-primary font-bold text-center">
        <button
          className={`p-1 border-b-2 border-transparent ${
            (option === "sites" ||
              sessionStorage.getItem("option") === "sites") &&
            "border-b-[#0066cc]"
          } hover:border-primary focus:border-primary transition-all duration-300`}
          onClick={() => changePage("sites")}
        >
          Siti
        </button>
        <button
          className={`p-1 border-b-2 border-transparent ${
            (option === "events" ||
              sessionStorage.getItem("option") === "events") &&
            "border-b-[#0066cc]"
          } hover:border-primary focus:border-b-2 focus:border-primary transition-all duration-300`}
          onClick={() => changePage("events")}
        >
          Eventi
        </button>
      </div>
      {option === "sites" ? (
        <ReservedSites handleClick={handleClick} archSites={archSites} />
      ) : (
        option === "events" && (
          <ReservedEvents handleClick={handleClick} events={events} />
        )
      )}
    </div>
  );
};
export default ReservedArea;
