/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const ReservedEvents = ({ handleClick, events }) => {
  return (
    <div className="md:p-10">
      <Link
        to="/event-page"
        className="my-16 bg-primary text-white px-5 py-4 w-[280px] flex items-center justify-center space-x-3 rounded-md"
      >
        <p>Aggiungi un nuovo Evento</p>
        <BsArrowRight size={20} />
      </Link>
      {events?.map((event, i) => {
        return (
          <div
            key={i}
            className="border-2 border-transparent py-5 border-t-[#C5C7C9] cursor-pointer flex items-center justify-between"
            onClick={() => handleClick(event, "modifyEvents", "evento")}
          >
            <h1 className="text-xl text-primary font-semibold">{event.name}</h1>
            <IoIosArrowForward size={20} className="text-primary" />
          </div>
        );
      })}
    </div>
  );
};
export default ReservedEvents;
