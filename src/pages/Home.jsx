import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ArchSites from "../components/ArchSites";
import Events from "../components/Events";
import Contacts from "../components/Contacts";
import Info from "../components/Info";
import {
  bacoliImg,
  bacoliImg2,
  bacoliImg3,
  bacoliImg4,
} from "../assets/images";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { language } = useAuth();
  const [page, setPage] = useState("events");
  const [whichPage, setWhichPage] = useState("events");
  const [archSites, setArchSites] = useState();
  const [events, setEvents] = useState();
  const [itemClicked, setItemClicked] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let isMounted = true;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const getEvents = async () => {
      try {
        const response = await axios.get("/event-page", {});
        if (response?.data && isMounted) {
          const sortedData = [...response.data].sort((a, b) => {
            return new Date(a.date.start) - new Date(b.date.start);
          });

          const formattedData = sortedData.map((event) => {
            return {
              ...event,
              date: {
                start: new Date(event.date.start).toLocaleDateString("it-IT"),
                end: event.date.end
                  ? new Date(event.date.end).toLocaleDateString("it-IT")
                  : "",
              },
            };
          });

          setEvents(formattedData);
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

    sessionStorage.setItem("home", "events");

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const handleClick = (itemClicked, page, whichPage) => {
    sessionStorage.setItem("home", whichPage);
    setWhichPage(whichPage);
    setPage(page);
    setItemClicked(itemClicked);
  };

  const filterData = (data) => {
    if (!data) {
      return "Nessun dato disponibile per la ricerca";
    }

    const results = data.filter((item) => {
      const lang = language === "IT" ? "it" : "en";
      return (
        (item.name
          ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
          : false) ||
        (item.tags
          ? item.tags.tag1[lang]
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            item.tags.tag2[lang]
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : false)
      );
    });

    return results.length > 0
      ? results
      : language === "IT"
      ? "Nessun risultato trovato"
      : "No results found";
  };

  const filteredDataArch = filterData(archSites);
  const filteredDataEvents = filterData(events);

  return (
    <section className="min-h-[80vh]">
      <Header
        setPage={setPage}
        page={page}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      {page !== "info" &&
        page !== "contacts" &&
        (page !== "search" || !isMobile) && (
          <div className="relative h-[413px] grid grid-cols-1 gap-y-1 md:grid-cols-3 md:gap-1 overflow-hidden md:h-[324px]">
            <div className="relative col-span-2">
              <div className="absolute w-full h-full bg-[#17324D] opacity-60" />
              <div
                style={{
                  backgroundImage: `url(${bacoliImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-1">
              <div className="relative">
                <div className="absolute bg-[#17324D] w-full h-full opacity-60" />
                <div
                  style={{
                    backgroundImage: `url(${bacoliImg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-full"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-[#17324D] w-full h-full opacity-60" />
                <div
                  style={{
                    backgroundImage: `url(${bacoliImg3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-full"
                />
              </div>
              <div className="relative col-span-2">
                <div className="absolute bg-[#17324D] w-full h-full opacity-60" />

                <div
                  style={{
                    backgroundImage: `url(${bacoliImg4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

      {page === "/" ? (
        <ArchSites
          archSites={archSites}
          handleClick={handleClick}
          language={language}
        />
      ) : page === "events" ? (
        <Events events={events} handleClick={handleClick} language={language} />
      ) : page === "contacts" ? (
        <Contacts language={language} />
      ) : page === "search" && sessionStorage.getItem("home") === "/" ? (
        Array.isArray(filteredDataArch) ? (
          <ArchSites
            archSites={filteredDataArch}
            handleClick={handleClick}
            language={language}
          />
        ) : (
          <p className="text-black text-center mt-20 text-xl">
            {filteredDataArch}
          </p>
        )
      ) : page === "search" && sessionStorage.getItem("home") === "events" ? (
        Array.isArray(filteredDataEvents) ? (
          <Events
            events={filteredDataEvents}
            handleClick={handleClick}
            language={language}
          />
        ) : (
          <p className="text-black text-center mt-20 text-xl">
            {filteredDataEvents}
          </p>
        )
      ) : (
        page === "info" && (
          <Info
            itemClicked={itemClicked}
            whichPage={whichPage}
            language={language}
            setPage={setPage}
          />
        )
      )}
    </section>
  );
};
export default Home;
