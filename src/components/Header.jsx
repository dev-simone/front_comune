/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Header = ({ setPage, page, searchTerm, setSearchTerm }) => {
  const { language } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (page) => {
    switch (page) {
      case "/":
        sessionStorage.setItem("home", "/");
        setPage("/");
        break;
      case "events":
        sessionStorage.setItem("home", "events");
        setPage("events");
        break;
      case "contacts":
        sessionStorage.setItem("home", "");
        setPage("contacts");
        break;
      case "search":
        setPage("search");
        break;
      default:
        setPage("/");
        sessionStorage.setItem("home", "/");
    }
  };

  return (
    <section className="bg-primary">
      <button
        className="p-5 absolute right-0 top-20 lg:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <AiOutlineMenu size={30} />
      </button>
      <div
        className={`flex ${
          !toggleMenu && "hidden lg:flex"
        } flex-col items-start space-x-0 px-5 lg:flex-row lg:space-x-10 justify-center lg:w-full lg:pt-5 lg:px-10 pb-1`}
      >
        <button
          className={`py-3 text-start lg:text-center lg:px-5 border-b-2 border-transparent ${
            (page === "events" ||
              sessionStorage.getItem("home") === "events") &&
            "border-white"
          }  hover:border-white focus:border-b-2 focus:border-white transition-all duration-300`}
          onClick={() => handleClick("events")}
        >
          {language === "IT" ? "Eventi" : "Events"}
        </button>
        <button
          className={`py-3 lg:px-5 border-b-2 border-transparent ${
            (page === "/" || sessionStorage.getItem("home") === "/") &&
            "border-white"
          } hover:border-white focus:border-b-2 focus:border-white transition-all duration-300`}
          onClick={() => handleClick("/")}
        >
          {language === "IT" ? "Cosa visitare" : "What to visit"}
        </button>
        <button
          className={`py-3 text-start lg:text-center lg:px-5 border-b-2 border-transparent ${
            page === "contacts" && "border-white"
          } hover:border-white focus:border-b-2 focus:border-white transition-all duration-300`}
          onClick={() => handleClick("contacts")}
        >
          {language === "IT" ? "Contatti" : "Contacts"}
        </button>
        {toggleMenu && (
          <div className="flex items-center space-x-3 lg:hidden py-3">
            <p>{language === "IT" ? "Seguici su" : "Follow us on"}</p>
            <a href="https://www.facebook.com/ComunediBacoli/">
              <FaFacebookF />
            </a>
          </div>
        )}
        {page !== "contacts" && (
          <div className="lg:hidden flex relative space-x-3 items-center py-3">
            <AiOutlineSearch className="absolute lg:relative" />
            <input
              className={`outline-none bg-transparent pl-5 lg:pl-0`}
              id="search"
              type="text"
              autoComplete="off"
              placeholder={
                sessionStorage.getItem("home") === "/"
                  ? language === "IT"
                    ? "Cerca cosa visitare"
                    : "Search what to visit"
                  : language === "IT"
                  ? "Cerca eventi"
                  : "Search events"
              }
              value={searchTerm}
              onClick={() => handleClick("search")}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
      </div>
      {page !== "contacts" && (
        <div className="hidden lg:block absolute z-20 top-52 right-12">
          <div className="flex relative space-x-3 items-center py-3">
            <AiOutlineSearch className="absolute lg:relative" />
            <input
              className={`outline-none bg-transparent pl-5 lg:pl-0`}
              id="search"
              type="text"
              autoComplete="off"
              placeholder={
                sessionStorage.getItem("home") === "/"
                  ? language === "IT"
                    ? "Cerca cosa visitare"
                    : "Search what to visit"
                  : language === "IT"
                  ? "Cerca eventi"
                  : "Search events"
              }
              value={searchTerm}
              onClick={() => handleClick("search")}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default Header;
