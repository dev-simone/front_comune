/* eslint-disable react/prop-types */
import { MdOutlinePlace } from "react-icons/md";
import { LuClock3, LuClock8 } from "react-icons/lu";
import { TbCurrencyEuro, TbDisabled } from "react-icons/tb";
//import default image
import defaultImage from "../assets/images/default-img.png";

const ArchSites = ({ handleClick, archSites, language }) => {
  return (
    <section className="min-h-[70vh] my-10 w-full">
      {/**GRID */}
      <div className="p-2 sm:p-10 gap-10 grid grid-cols-1 justify-items-center md:grid-cols-2 md:mx-auto lg:grid-cols-3 lg:p-20 xl:gap-28">
        {archSites?.map((site, i) => {
          return (
            <div
              className="bg-primary rounded-2xl overflow-hidden cursor-pointer w-[315px] h-auto "
              key={i}
              onClick={() => handleClick(site, "info", "/")}
            >
              {site.image && site.image[0] && site.image[0].data ? (
                <img
                  src={site.image[0].data}
                  className="w-[315px] h-[160px] object-cover"
                />
              ) : (
                <img
                  src={defaultImage}
                  className="w-[315px] h-[160px] object-cover "
                />
              )}

              <div className="p-5 flex items-center space-x-3 ">
                <MdOutlinePlace size={28} />{" "}
                <h1 className="font-bold text-2xl overflow-wrap w-[300px]">
                  {site.name}
                </h1>
              </div>

              <div className="py-5 px-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <LuClock3 size={20} />
                  <p>
                    {language === "IT" ? "Orario Apertura" : "Opening Hours"}:{" "}
                    <span className="font-bold ">{site.hours?.start}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <LuClock8 size={20} />
                  <p>
                    {language === "IT" ? "Orario Chiusura" : "Closing Hours"}:{" "}
                    <span className="font-bold ">{site.hours?.end}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <TbCurrencyEuro size={20} />
                  {site.price === "0" && site.priceVariable === "0" ? (
                    <p>{language === "IT" ? "Gratuito" : "Gratis"}</p>
                  ) : site.price && site.price !== "0" ? (
                    <p>
                      {language === "IT" ? "Prezzo Fisso: " : "Fixed Price"}
                      <span className="font-bold">{site.price} €</span>
                    </p>
                  ) : (
                    site.priceVariable &&
                    site.priceVariable !== "0" && (
                      <p>
                        {language === "IT"
                          ? "Prezzo a partire da: "
                          : "Price starting from: "}
                        <span className="font-bold">
                          {site.priceVariable} €
                        </span>
                      </p>
                    )
                  )}
                </div>
                <div className="py-5 flex space-x-2 text-[#3579B2] font-bold">
                  <div className="bg-white px-3 rounded-md">
                    {language === "IT" ? site.tags.tag1.it : site.tags.tag1.en}
                  </div>
                  <div className="bg-white px-3 rounded-md ">
                    {language === "IT" ? site.tags.tag2.it : site.tags.tag2.en}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TbDisabled size={20} />
                  {site.accessibility === "notAccessible" ? (
                    <p>
                      {language === "IT" ? "Non accessibile" : "Not accessible"}
                    </p>
                  ) : site.accessibility === "partiallyAccessible" ? (
                    <p>
                      {language === "IT"
                        ? "Parzialmente accessibile"
                        : "Partially accessible"}
                    </p>
                  ) : (
                    site.accessibility === "fullyAccessible" && (
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
export default ArchSites;
