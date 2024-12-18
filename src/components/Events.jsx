/* eslint-disable react/prop-types */
import { AiOutlineCalendar } from "react-icons/ai";
import { TbCurrencyEuro, TbDisabled } from "react-icons/tb";
//import test image
import defaultImage from "../assets/images/default-img.png";

const Events = ({ handleClick, events, language }) => {
  return (
    <section className="min-h-[70vh] my-10 w-full">
      {/**GRID */}
      <div className="p-2 sm:p-10 gap-10 grid grid-cols-1 justify-items-center md:grid-cols-2 md:mx-auto lg:grid-cols-3 lg:p-20 xl:gap-28">
        {events?.map((event, i) => {
          return (
            <div
              className="bg-primary rounded-2xl overflow-hidden cursor-pointer w-[315px] h-auto"
              key={i}
              onClick={() => handleClick(event, "info", "events")}
            >
              {event.image && event.image[0] && event.image[0].data ? (
                <img
                  src={event.image[0].data}
                  className="w-[315px] h-[160px] object-cover"
                />
              ) : (
                <img
                  src={defaultImage}
                  className="w-[315px] h-[160px] object-cover"
                />
              )}

              <div className="p-5 flex items-center space-x-3">
                <h1 className="font-bold text-2xl">{event.name}</h1>
              </div>

              <div
                className="pt-5 pb-6 px-5"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <p>
                  {language === "IT"
                    ? event.description.it
                    : event.description.en}
                </p>
              </div>

              <div className="py-5 px-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <AiOutlineCalendar size={20} />
                  <p>{event.date.start}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <TbCurrencyEuro size={20} />
                  {event.price === "0" && event.priceVariable === "0" ? (
                    <p>{language === "IT" ? "Gratuito" : "Gratis"}</p>
                  ) : event.price && event.price !== "0" ? (
                    <p>
                      {language === "IT" ? "Prezzo Fisso: " : "Fixed Price: "}
                      <span className="font-bold">{event.price} €</span>
                    </p>
                  ) : (
                    event.priceVariable &&
                    event.priceVariable !== "0" && (
                      <p>
                        {language === "IT"
                          ? "Prezzo a partire da: "
                          : "Price starting from: "}{" "}
                        <span className="font-bold">
                          {event.priceVariable} €
                        </span>
                      </p>
                    )
                  )}
                </div>
                <div className="py-5 flex space-x-2 text-[#3579B2] font-bold">
                  <div className="bg-white px-3 rounded-md">
                    {language === "IT"
                      ? event.tags?.tag1?.it
                      : event.tags?.tag1?.en}
                  </div>
                  <div className="bg-white px-3 rounded-md ">
                    {language === "IT"
                      ? event.tags?.tag2?.it
                      : event.tags?.tag2?.en}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TbDisabled size={20} />
                  {event.accessibility === "notAccessible" ? (
                    <p>
                      {" "}
                      {language === "IT" ? "Non accessibile" : "Not accessible"}
                    </p>
                  ) : event.accessibility === "partiallyAccessible" ? (
                    <p>
                      {language === "IT"
                        ? "Parzialmente accessibile"
                        : "Partially accessible"}
                    </p>
                  ) : (
                    event.accessibility === "fullyAccessible" && (
                      <p>{language === "IT" ? "Accessibile" : "Accessible"}</p>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Events;
