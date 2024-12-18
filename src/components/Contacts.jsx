import { MdOutlinePlace, MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

const Contacts = ({ language }) => {
  return (
    <div className="min-h-[70vh] text-black p-1 md:p-10 text-base  md:text-2xl mb-20">
      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Area IV - Servizi sociali ed Educativi"
          : "Area IV - Social and Educational Services"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                className="a-contacts"
                href="https://maps.app.goo.gl/3L972dr8h58iqgeQ9"
                target="blank"
              >
                Piazzetta Adriano, 80070 Bacoli NA
              </a>
            </span>
          </p>
        </div>
        <div>
          <p className="font-normal text-black">
            {language === "IT" ? "Aperto dalle ore" : "Open from the hours"}{" "}
            <span className="font-bold">09:00</span>{" "}
            {language === "IT" ? "alle ore" : "at"}{" "}
            <span className="font-bold">14:00</span>{" "}
            {language === "IT" ? "dal Lunedì al Venerdì" : "Monday to Friday"}
          </p>

          <p className="font-normal text-black">
            {language === "IT" ? "e dalle ore" : "and from"}{" "}
            <span className="font-bold">15:00</span>{" "}
            {language === "IT" ? "alle ore" : "to"}{" "}
            <span className="font-bold">17:30</span>{" "}
            {language === "IT"
              ? "il Martedì e Giovedì"
              : "on Tuesdays and Thursdays"}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <FiPhone />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:081 8553434" className="a-contacts">
                081 8553434
              </a>
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:servizi.sociali@comune.bacoli.na.it"
                className="a-contacts"
              >
                servizi.sociali@comune.bacoli.na.it{" "}
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:servizi.sociali@pec.comune.bacoli.na.it"
                className="a-contacts"
              >
                servizi.sociali@pec.comune.bacoli.na.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3 pb-10">
          <a href="https://comune.bacoli.na.it/">
            {language === "IT"
              ? "VAI AL SITO UFFICIALE"
              : "GO TO OFFICIAL SITE"}
          </a>
          <FaArrowRightLong />
        </div>
      </div>

      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Area IV - Turismo e Cultura"
          : "Area IV - Tourism and Culture"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                href="https://maps.app.goo.gl/5hLnvPmwSySWtXRu6"
                target="blank"
                className="a-contacts"
              >
                Villa Cerillo, 80070 Bacoli NA
              </a>
            </span>
          </p>
        </div>

        <div>
          <p className="font-normal text-black">
            {language === "IT" ? "Aperto dalle ore" : "Open from the hours"}{" "}
            <span className="font-bold">09:00</span>{" "}
            {language === "IT" ? "alle ore" : "at"}{" "}
            <span className="font-bold">14:00</span>{" "}
            {language === "IT" ? "dal Lunedì al Venerdì" : "Monday to Friday"}
          </p>

          <p className="font-normal text-black">
            {language === "IT" ? "e dalle ore" : "and from"}{" "}
            <span className="font-bold">15:00</span>{" "}
            {language === "IT" ? "alle ore" : "to"}{" "}
            <span className="font-bold">17:30</span>{" "}
            {language === "IT"
              ? "il Martedì e Giovedì"
              : "on Tuesdays and Thursdays"}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <FiPhone />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:081 8553419" className="a-contacts">
                081 8553419/20
              </a>
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:servizi.sociali@comune.bacoli.na.it"
                className="a-contacts"
              >
                servizi.sociali@comune.bacoli.na.it{" "}
              </a>
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:servizi.sociali@pec.comune.bacoli.na.it"
                className="a-contacts"
              >
                servizi.sociali@pec.comune.bacoli.na.it
              </a>
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3 pb-10">
          <a href="https://comune.bacoli.na.it/">
            {language === "IT"
              ? "VAI AL SITO UFFICIALE"
              : "GO TO OFFICIAL SITE"}
          </a>
          <FaArrowRightLong />
        </div>
      </div>

      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Area IV - Biblioteca Comunale Plinio Il Vecchio"
          : "Area IV - Municipal Library Plinio Il Vecchio"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                href="https://maps.app.goo.gl/5hLnvPmwSySWtXRu6"
                target="blank"
                className="a-contacts"
              >
                Villa Cerillo, 80070 Bacoli NA
              </a>
            </span>
          </p>
        </div>

        <div>
          <p className="font-normal text-black">
            {language === "IT" ? "Aperto dalle ore" : "Open from the hours"}{" "}
            <span className="font-bold">09:00</span>{" "}
            {language === "IT" ? "alle ore" : "at"}{" "}
            <span className="font-bold">19:30</span>{" "}
            {language === "IT" ? "dal Lunedì al Venerdì" : "Monday to Friday"}
          </p>

          <p className="font-normal text-black">
            {language === "IT" ? "e dalle ore" : "and from"}{" "}
            <span className="font-bold">9:00</span>{" "}
            {language === "IT" ? "alle ore" : "to"}{" "}
            <span className="font-bold">14:00</span>{" "}
            {language === "IT" ? "il Sabato" : "on Saturday"}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <FiPhone />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:081 8553604" className="a-contacts">
                081 8553604
              </a>
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:biblioteca@comune.bacoli.na.it"
                className="a-contacts"
              >
                biblioteca@comune.bacoli.na.it
              </a>
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3 pb-10">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:servizi.sociali@pec.comune.bacoli.na.it"
                className="a-contacts"
              >
                servizi.sociali@pec.comune.bacoli.na.it
              </a>
            </span>
          </p>
        </div>
      </div>

      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Parco Archeologico dei Campi Flegrei"
          : "Campi Flegrei Archaeological Park"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                href="https://maps.app.goo.gl/Cei6TQRwCGLnq5DJA"
                target="blank"
                className="a-contacts"
              >
                Rione Terra, Palazzo De Fraja - 80078 Pozzuoli (NA)
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <FiPhone className="relative -top-4" />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:+39 0818553402" className="a-contacts">
                +39 081 855 3402
              </a>{" "}
              <br />
              {language === "IT" ? "Attivo dalle ore" : "Active from"}{" "}
              <strong>09:00</strong> {language === "IT" ? "alle ore" : "at"}{" "}
              <strong>12:00</strong>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:pa-fleg@pec.cultura.gov.it"
                className="a-contacts"
              >
                pa-fleg@cultura.gov.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3 ">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:pa-fleg@pec.cultura.gov.it"
                className="a-contacts"
              >
                pa-fleg@pec.cultura.gov.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3 pb-10">
          <a href="http://www.pafleg.it">
            {" "}
            {language === "IT"
              ? "VAI AL SITO UFFICIALE"
              : "GO TO OFFICIAL SITE"}
          </a>
          <FaArrowRightLong />
        </div>
      </div>

      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Ente Parco Regionale dei Campi Flegrei"
          : "Campi Flegrei Regional Park Authority"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                href="https://maps.app.goo.gl/3tJAVsgn3UoWhjEK6"
                target="blank"
                className="a-contacts"
              >
                Piazza Gioacchino Rossini, 1 - 80070 Bacoli (NA)
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <FiPhone className="relative -top-4" />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:+39 0815233870" className="a-contacts">
                +39 081 523 3870
              </a>{" "}
              <br />
              {language === "IT" ? "Attivo dalle ore" : "Active from"}{" "}
              <strong>09:00</strong> {language === "IT" ? "alle ore" : "at"}{" "}
              <strong>18:00</strong>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:segreteria@parcodeicampiflegrei.it"
                className="a-contacts"
              >
                segreteria@parcodeicampiflegrei.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a href="mailto:parcocampiflegrei@pec.it" className="a-contacts">
                parcocampiflegrei@pec.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3 pb-10">
          <a href="https://parcodeicampiflegrei.it/">
            {language === "IT"
              ? "VAI AL SITO UFFICIALE"
              : "GO TO OFFICIAL SITE"}
          </a>
          <FaArrowRightLong />
        </div>
      </div>

      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Pro Loco Città di Bacoli"
          : "Pro Loco City of Bacoli"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                href="https://maps.app.goo.gl/JcoZQpXLN39fDdRF8"
                target="blank"
                className="a-contacts"
              >
                Area Mercato, Via Miseno c/o Villa Comunale di Bacoli
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <FiPhone className="relative -top-4" />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:+39 3791030885" className="a-contacts">
                +39 379 103 0885
              </a>{" "}
              <br />
              {language === "IT" ? "Attivo dalle ore" : "Active from"}{" "}
              <strong>09:00</strong> {language === "IT" ? "alle ore" : "at"}{" "}
              <strong>13:00</strong>
            </span>{" "}
            <br />
            <span className="font-normal text-black">
              {language === "IT" ? "e dalle ore" : "and from"}{" "}
              <strong>16:00</strong> {language === "IT" ? "alle ore" : "to"}
              <strong>20:00</strong>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:prolococittadibacoli@gmail.com"
                className="a-contacts"
              >
                prolococittadibacoli@gmail.com
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a href="mailto:prolocobacoli@pec.it" className="a-contacts">
                prolocobacoli@pec.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3 pb-10">
          <a href="https://www.prolococittadibacoli.it">
            {language === "IT"
              ? "VAI AL SITO UFFICIALE"
              : "GO TO OFFICIAL SITE"}
          </a>
          <FaArrowRightLong />
        </div>
      </div>

      <h1 className="my-10 text-xl md:text-4xl text-primary font-bold">
        {language === "IT"
          ? "Centro Ittico Campano"
          : "Campania Ichthyic Center"}
      </h1>
      <div className="mt-10 space-y-10 text-primary font-semibold">
        <div className="flex items-center space-x-3">
          <MdOutlinePlace className="relative -top-3 position-icon-place" />
          <p>
            {language === "IT" ? "Indirizzo" : "Address"}:{" "}
            <span className="font-normal text-black">
              <a
                href="https://maps.app.goo.gl/3tJAVsgn3UoWhjEK6"
                target="blank"
                className="a-contacts"
              >
                Piazza Gioacchino Rossini, 1 - 80070 Bacoli (NA)
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <FiPhone className="relative -top-4" />
          <p>
            {language === "IT" ? "Numero Telefonico" : "Phone Number"}:{" "}
            <span className="font-normal text-black">
              <a href="tel:+39 3533716876" className="a-contacts">
                +39 353 371 6876
              </a>{" "}
              <br />
              {language === "IT" ? "Attivo dalle ore " : "Active from "}{" "}
              <strong>07:00</strong>
              {language === "IT" ? " alle ore " : " at "} <strong>21:00</strong>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <MdOutlineEmail />
          <p>
            E-Mail:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:info@centroitticocampano.com"
                className="a-contacts"
              >
                info@centroitticocampano.com
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlineMailOpen className="relative -top-3 position-icon-mailOpen" />
          <p>
            Pec:{" "}
            <span className="font-normal text-black">
              <a
                href="mailto:centroitticocampanospa@pec.it"
                className="a-contacts"
              >
                centroitticocampanospa@pec.it
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-3 pb-10">
          <a href="https://www.centroitticocampano.com/">
            {language === "IT"
              ? "VAI AL SITO UFFICIALE"
              : "GO TO OFFICIAL SITE"}
          </a>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};
export default Contacts;
