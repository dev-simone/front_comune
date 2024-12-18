/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

//Icons
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const ReservedSites = ({ handleClick, archSites }) => {
  return (
    <div className="md:p-10">
      <Link
        to="/arch-site"
        className="my-16 bg-primary text-white px-5 py-4 w-[280px] flex items-center justify-center space-x-3 rounded-md"
      >
        <p>Aggiungi un nuovo Sito</p>
        <BsArrowRight size={20} />
      </Link>
      {archSites?.map((site, i) => {
        return (
          <div
            key={i}
            className="border-2 border-transparent py-5 border-t-[#C5C7C9] cursor-pointer flex items-center justify-between"
            onClick={() => handleClick(site, "modifySites", "sito")}
          >
            <h1 className="text-xl text-primary font-semibold">{site.name}</h1>
            <IoIosArrowForward size={20} className="text-primary" />
          </div>
        );
      })}
    </div>
  );
};
export default ReservedSites;
