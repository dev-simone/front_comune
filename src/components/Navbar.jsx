/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import Logout from "../pages/Logout";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { SiCaddy } from "react-icons/si";
import { itIcon, enIcon } from "../assets/images";
import logo from "../assets/images/logo-comune.png";

const Navbar = () => {
  const { user, language, setLanguage } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-primaryDark">
      <div className="flex justify-between">
        <p className="p-5 font-thin">
          {language === "IT" ? "Comune di Bacoli" : "Bacoli Municipality"}
        </p>
        <div className="flex space-x-5 bg-primary">
          <div className="relative pr-2 pt-5 sm:p-5 bg-primaryDark">
            {language === "IT" ? (
              <img
                className="h-8 cursor-pointer object-contain"
                src={enIcon}
                onClick={() => setLanguage("EN")}
              />
            ) : (
              language === "EN" && (
                <img
                  className="h-8 cursor-pointer"
                  src={itIcon}
                  onClick={() => setLanguage("IT")}
                />
              )
            )}
          </div>

          {!user ? (
            <Link to="/login" className="flex items-center space-x-3 font-bold">
              <CgProfile size={30} />
              <p className="hidden md:block">
                {language === "IT"
                  ? "Accedi all'area pesonale"
                  : "Log in to the pesonal area"}
              </p>
            </Link>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/reserved-area">
                <SiCaddy size={35} />
              </Link>
              <Logout />
            </div>
          )}

          <div className="w-6 bg-primaryDark h-full ml-5" />
        </div>
      </div>
      <div className="flex w-full justify-between bg-primary p-5">
        <div className="flex items-center space-x-5">
          <img
            src={logo}
            className="h-10  sm:h-20 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <Link to="/">
            <h1 className="md:text-2xl font-bold">
              {language === "IT"
                ? "Bacoli Turismo ed Eventi"
                : "Bacoli Turismo ed Eventi"}
            </h1>
            <h2 className="hidden sm:block text-2xl sm:text-base font-thin">
              {" "}
              {language === "IT"
                ? "Sito Ufficiale del Turismo ed Eventi del Comune di Bacoli"
                : "Official website of the Tourism and Events of the City of Bacoli"}{" "}
            </h2>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-3 ">
          <p>{language === "IT" ? "Seguici su" : "Follow us on"}</p>
          <a href="https://www.facebook.com/ComunediBacoli/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
