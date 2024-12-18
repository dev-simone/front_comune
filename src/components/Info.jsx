/* eslint-disable react/prop-types */
import defaultImage from "../assets/images/default-img.png";
import { MdOutlinePlace } from "react-icons/md";
import { LuClock3, LuClock8 } from "react-icons/lu";
import { TbCurrencyEuro, TbDisabled } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { AiOutlineCar, AiOutlineCalendar } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Info = ({ itemClicked, whichPage, language, setPage }) => {
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
      default:
        setPage("/");
        sessionStorage.setItem("home", "/");
    }
  };

  const { name } = itemClicked;
  return (
    <div className="min-h-[70vh] text-black">
      {itemClicked.image &&
      itemClicked.image[0] &&
      itemClicked.image[0].data ? (
        <img
          src={itemClicked.image[0].data}
          className="h-[300px] w-full object-cover"
        />
      ) : (
        <img src={defaultImage} className=" w-full h-[300px] object-cover" />
      )}

      <FaArrowRightLong
        size={30}
        className="rotate-180 text-primary mx-2 mt-10 lg:ml-20 cursor-pointer"
        onClick={() => handleClick(whichPage)}
      />

      <div className="py-20 px-2 grid grid-cols-1 gap-10 md:grid-cols-2 lg:w-2/3 mx-auto overflow-hidden">
        <div className="space-y-12 break-words w-full">
          <div>
            <h1 className="text-primary text-2xl sm:text-3xl mb-10">
              <p>{name}</p>
            </h1>
            <p className="mb-5">
              {language === "IT"
                ? itemClicked.description.it
                : language === "EN" && itemClicked.description.en}
            </p>
          </div>
          {itemClicked.postcard && (
            <img
              src={itemClicked.postcard?.data}
              className="w-[315px] h-[436px] md:w-[400px] md:h-[570px] rounded-2xl object-cover mx-auto md:mx-0"
            />
          )}
          {whichPage === "/" && (
            <div className="flex items-center space-x-3 text-primary">
              <a href={itemClicked?.url}>
                {language === "IT"
                  ? "VAI AL SITO UFFICIALE"
                  : "GO TO THE OFFICIAL WEBSITE"}
              </a>
              <FaArrowRightLong />
            </div>
          )}
          <div className="space-y-5 ">
            {itemClicked.date && (
              <div className="text-primary font-bold space-y-5">
                <div className="flex items-center space-x-3">
                  <AiOutlineCalendar />
                  <p>
                    {language === "IT" ? "Data Inizio" : "Start Date"}:{" "}
                    <span className="text-black font-normal">
                      {itemClicked.date?.start}
                    </span>
                  </p>
                </div>
                {itemClicked.date?.end && (
                  <div className="flex items-center space-x-3">
                    <AiOutlineCalendar />
                    <p>
                      {language === "IT" ? "Data Fine" : "End Date"}:{" "}
                      <span className="text-black font-normal">
                        {itemClicked.date?.end}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center space-x-3">
              <FiPhone className="text-primary relative -top-3 " />
              <p className="text-primary font-bold">
                {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
                <span className="text-black font-normal">
                  {itemClicked.tel}
                </span>
                <br />
                <span className="text-black font-normal">
                  {language === "IT" ? "Attivo dalle ore" : "Active from"}{" "}
                  <strong>{itemClicked.time.start} </strong>
                  {language === "IT" ? "alle ore" : "at"}{" "}
                  <strong>{itemClicked.time.end}</strong>
                </span>
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <AiOutlineCar className="text-primary" />
                <p className="text-primary font-bold">
                  {language === "IT" ? "Indicazioni Stradali" : "Directions"}:
                </p>
              </div>
              <p className="ml-8">
                {language === "IT" &&
                itemClicked.directions &&
                itemClicked.directions.it
                  ? itemClicked.directions.it.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))
                  : language === "EN" &&
                    itemClicked.directions &&
                    itemClicked.directions.en
                  ? itemClicked.directions.en.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))
                  : null}
              </p>
            </div>
          </div>
        </div>
        {/**CARD */}

        <div className="bg-primary mx-auto rounded-2xl overflow-hidden text-white text-sm max-h-[500px] w-[315px]">
          {itemClicked.image &&
          itemClicked.image[1] &&
          itemClicked.image[1].data ? (
            <img
              src={itemClicked.image[1].data}
              className="w-[315px] h-[160px] object-cover"
            />
          ) : (
            <img
              src={defaultImage}
              className=" w-[315px] h-[160px] object-cover"
            />
          )}

          <div className="p-5 flex items-center space-x-3">
            <MdOutlinePlace size={20} />{" "}
            <h1 className="font-bold text-lg">{itemClicked.address}</h1>
          </div>

          <div className="py-5 px-6 space-y-3">
            <div className="flex items-center space-x-2">
              <LuClock3 size={16} />
              <p>
                {whichPage === "/"
                  ? language === "IT"
                    ? "Orario Apertura"
                    : "Opening Hours"
                  : language === "IT"
                  ? "Orario di Inizio"
                  : "Start Time"}
                : <span className="font-bold">{itemClicked.hours.start}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <LuClock8 size={16} />
              <p>
                {whichPage === "/"
                  ? language === "IT"
                    ? "Orario Chiusura"
                    : "Closing Hours"
                  : language === "IT"
                  ? "Orario di Fine"
                  : "End Time"}
                : <span className="font-bold">{itemClicked.hours.end}</span>
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <TbCurrencyEuro size={20} />
              {itemClicked.price === "0" &&
              itemClicked.priceVariable === "0" ? (
                <p>{language === "IT" ? "Gratuito" : "Gratis"}</p>
              ) : itemClicked.price && itemClicked.price !== "0" ? (
                <p>
                  {language === "IT" ? "Prezzo Fisso: " : "Fixed Price: "}{" "}
                  <span className="font-bold">{itemClicked.price} €</span>
                </p>
              ) : (
                itemClicked.priceVariable &&
                itemClicked.priceVariable !== "0" && (
                  <p>
                    {language === "IT"
                      ? "Prezzo a partire da: "
                      : "Price starting from: "}
                    <span className="font-bold">
                      {itemClicked.priceVariable}€
                    </span>
                  </p>
                )
              )}
            </div>
            <div className="py-5 flex space-x-2 text-[#3579B2] font-bold">
              <div className="bg-white px-3 rounded-md">
                {language === "IT"
                  ? itemClicked.tags?.tag1?.it
                  : itemClicked.tags?.tag1?.en}
              </div>
              <div className="bg-white px-3 rounded-md ">
                {language === "IT"
                  ? itemClicked.tags?.tag2?.it
                  : itemClicked.tags?.tag2?.en}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TbDisabled size={20} />
              {itemClicked.accessibility === "notAccessible" ? (
                <p>
                  {language === "IT" ? "Non accessibile" : "Not accessible"}
                </p>
              ) : itemClicked.accessibility === "partiallyAccessible" ? (
                <p>
                  {" "}
                  {language === "IT"
                    ? "Parzialmente accessibile"
                    : "Partially accessible"}
                </p>
              ) : (
                itemClicked.accessibility === "fullyAccessible" && (
                  <p>{language === "IT" ? "Accessibile" : "Accessible"}</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
