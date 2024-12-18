import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Footer = () => {
  const { language } = useAuth();
  return (
    <footer className="relative bottom-0 right-0 bg-primary w-full flex flex-col flex-1 pt-5">
      <hr className="border border-white opacity-30 w-[98%] mx-auto" />
      <div className="grid-footer">
        <div className="p-5">
          <h1 className="footer-section-title">
            {language === "IT" ? "CONTATTI" : "CONTACTS"}
          </h1>
          <p>
            <a href="https://maps.app.goo.gl/5hLnvPmwSySWtXRu6" target="blank">
              Villa Cerillo, Via Cerillo, 57, 80070 Bacoli, NA
            </a>
          </p>
          <br />
          <a href="mailto:servizi.sociali@pec.comune.bacoli.na.it">
            servizi.sociali@pec.comune.bacoli.na.it
          </a>
          <p>
            <a href="tel:+39 0818553419">+39 081 855 3419/3420</a>
          </p>
        </div>

        <hr className="w-[92%] mx-auto border border-b-white opacity-30 md:hidden" />

        <div className="p-5">
          <h1 className="footer-section-title">
            {language === "IT" ? "INFORMAZIONI LEGALI" : "LEGAL INFORMATION"}
          </h1>
          <a href="https://www.comune.bacoli.na.it/">
            {language === "IT"
              ? "Dichiarazione di Accessibilità"
              : "Accessibility Statement"}
          </a>
          <br />
          <br />
          <a href="https://www.comune.bacoli.na.it/">
            {language === "IT"
              ? "Amministrazione Trasparente"
              : "Transparent Administration"}
          </a>
        </div>

        <hr className="w-[92%] mx-auto border border-b-white opacity-30 md:hidden" />

        <div className="p-5">
          <h1 className="footer-section-title">
            {language === "IT"
              ? "ELENCO SITI TELEMATICI"
              : "LIST OF TELEMATICS SITES"}
          </h1>
          <a href="https://www.comune.bacoli.na.it/">
            {language === "IT" ? "Comune di Bacoli" : "Municipality of Bacoli"}
          </a>
          <br />
          <br />
          <a href="https://www.prolococittadibacoli.it">
            Pro Loco Città Di Bacoli
          </a>
          <br />
          <br />
          <a href="http://www.pafleg.it">
            {language === "IT"
              ? "Parco Archeologico dei Campi Flegrei"
              : "Campi Flegrei Archaeological Park"}
          </a>
          <br />
          <br />
          <a href="https://parcodeicampiflegrei.it/">
            {language === "IT"
              ? "Ente Parco Regionale dei Campi Flegrei"
              : "Campi Flegrei Regional Park Authority"}
          </a>
          <br />
          <br />
          <a href=" https://www.centroitticocampano.com/">
            {language === "IT"
              ? "Centro Ittico Campano"
              : "Campania Ichthyic Center"}
          </a>
        </div>

        <hr className="w-[92%] mx-auto border border-b-white opacity-30 md:hidden" />

        <div className="grid-footer-double-element">
          <h1 className="footer-section-title">
            {language === "IT" ? "SEGUICI SU" : "FOLLOW US ON"}
          </h1>
          <a href="https://www.facebook.com/ComunediBacoli/">
            <FaFacebookF size={20} />
          </a>
          <h1 className="footer-section-title">
            {language === "IT" ? "DUBBI O DOMANDE?" : "DOUBTS OR QUESTIONS?"}
          </h1>
          <a href="https://wa.me/3421807077">
            <button type="submit" className="whatsapp-button">
              <img
                src="/src/assets/images/whatsapp-icon.svg"
                alt="whatsapp-icon"
                className="whatsapp-icon"
              />
              {language === "IT"
                ? "Scrivici su WhatsApp"
                : "Write us on WhatsApp"}
            </button>
          </a>
          <p className="whatsapp-text">
            {language === "IT" ? "Disponibile dalle ore " : "Available from "}
            <strong>
              {" "}
              {language === "IT" ? "09:00" : "09:00 a.m. "}{" "}
            </strong>{" "}
            {language === "IT" ? "alle ore " : "to "}{" "}
            <strong>{language === "IT" ? "16:00" : "04:00 p.m. "}</strong>{" "}
            <br />
            {language === "IT" ? "Risposta entro 24h" : "Response within 24h"}
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row p-3 w-full bg-primaryDark h-full ">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <a
          href="https://www.alias-development.com/"
          className="w-[300px] sm:mx-auto cursor-pointer "
        >
          ©{" "}
          {language === "IT"
            ? "Sviluppato da Alias Development"
            : "Developed by Alias Development"}
        </a>
      </div>
    </footer>
  );
};
export default Footer;
