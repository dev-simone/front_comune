/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiUpload, FiDelete } from "react-icons/fi";
import { TbCurrencyEuro } from "react-icons/tb";
import { LuSaveAll } from "react-icons/lu";
import LoadingModal from "./LoadingModal";
import { toast } from "react-hot-toast";

//import handlers
import {
  formatBytes,
  handleDescriptionChange,
  handleDirectionsChange,
  handleCheckboxChange,
  handleAccessibilityChange,
  handlePosterChange,
  handleRemovePoster,
  handleImageChange,
  handleRemoveImage,
} from "../handlers/formFunctions";

const FormData = ({
  handleSubmit,
  data,
  setData,
  whichPage,
  modify,
  isLoading,
}) => {
  const [priceType, setPriceType] = useState("");
  const [enable, setEnable] = useState(false);

  const handleModifyButton = () => {
    if (enable) {
      toast.error("Modifiche Disabilitate!");
    } else {
      toast.success("Modifiche Abilitate!");
    }

    setEnable(!enable);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setData((prevData) => ({
      ...prevData,
      date: { ...prevData.date, start: newDate },
    }));
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setData((prevData) => ({
      ...prevData,
      date: { ...prevData.date, end: newEndDate },
    }));
  };

  return (
    <div className="p-2 min-h-[70vh] text-[#2F475E] flex flex-col mt-10 md:mt-0 md:p-16 md:text-xl overflow-x-hidden">
      {isLoading && <LoadingModal />}
      <h1 className="text-2xl  md:text-4xl text-primary font-bold mb-10">
        Stai {modify ? `Modificando ${data.name}` : "Aggiungendo"}{" "}
        {whichPage === "sito" && !modify
          ? "un nuovo Sito"
          : whichPage === "evento" && !modify && "un nuovo Evento"}
      </h1>
      {modify && (
        <button
          className="bg-primary w-[180px] p-5 text-white font-semibold hover:bg-primaryDark rounded "
          onClick={handleModifyButton}
        >
          {"Modifica " + whichPage}
        </button>
      )}

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className="text-primary text-2xl font-bold my-10 ">
          Informazioni generali
        </h2>

        <input
          className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 max-w-[300px]"
          type="text"
          placeholder="Nome"
          autoComplete="off"
          id="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          disabled={modify && !enable ? true : false}
        />
        <label className="text-lg mb-10" htmlFor="name">
          Inserisci il nome{" "}
          {whichPage === "sito"
            ? " del Sito"
            : whichPage === "evento" && "dell' Evento"}
        </label>
        <input
          className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 max-w-[300px]"
          type="text"
          placeholder="Indirizzo"
          id="address"
          value={data.address}
          autoComplete="off"
          onChange={(e) => setData({ ...data, address: e.target.value })}
          disabled={modify && !enable ? true : false}
        />
        <label className="text-lg mb-10" htmlFor="address">
          Inserisci l'indirizzo{" "}
          {whichPage === "sito"
            ? " del Sito"
            : whichPage === "evento" && "dell' Evento"}
        </label>

        <div className="relative mb-10">
          <textarea
            className="outline-none border border-[#2F475E] p-5 "
            id="descriptionField"
            name="descriptionField"
            value={data?.description?.it}
            placeholder="Inserisci qui la descrizione"
            onChange={(e) => handleDescriptionChange(e, data, setData)}
            rows="4"
            cols="50"
            disabled={modify && !enable ? true : false}
          />
          <p className="text-end text-lg w-full md:w-[500px]">
            {data?.description?.it?.length}/500
          </p>
        </div>
        <h2 className="text-primary text-2xl font-bold my-5 ">
          Numero Telefonico
        </h2>
        <div className="md:grid grid-cols-3 gap-12 max-w-4xl">
          <div className="flex flex-col">
            <input
              className="outline-none border border-transparent border-b-[#2F475E] py-2 mt-[3px] mb-2 w-full"
              type="text"
              placeholder="Numero telefonico"
              id="tel"
              autoComplete="off"
              value={data?.tel}
              onChange={(e) => setData({ ...data, tel: e.target.value })}
              disabled={modify && !enable ? true : false}
            />
            <label className="text-sm mb-10" htmlFor="tel">
              Inserisci il numero telefonico{" "}
              {whichPage === "sito"
                ? " del Sito"
                : whichPage === "evento" && "dell' Evento"}
            </label>
          </div>
          <div className="flex flex-col">
            <input
              className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 w-full"
              type="time"
              id="timeStart"
              value={data?.time?.start}
              onChange={(e) =>
                setData({
                  ...data,
                  time: { ...data.time, start: e.target.value },
                })
              }
              disabled={modify && !enable ? true : false}
            />
            <label className="text-sm mb-10" htmlFor="timeStart">
              Inserire a che ora il numero diventa{" "}
              <span className="font-bold">Attivo</span>
            </label>
          </div>
          <div className="flex flex-col">
            <input
              className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 w-full"
              type="time"
              id="timeEnd"
              value={data?.time?.end}
              onChange={(e) =>
                setData({
                  ...data,
                  time: { ...data.time, end: e.target.value },
                })
              }
              disabled={modify && !enable ? true : false}
            />
            <label className="text-sm mb-20" htmlFor="timeEnd">
              Inserire a che ora il numero viene{" "}
              <span className="font-bold">disattivato</span>
            </label>
          </div>
        </div>
        <h2 className="text-primary text-2xl font-bold mb-10">Immagini</h2>
        <div className="space-y-10 w-[400px]">
          <label
            htmlFor="file-upload"
            className="bg-primary hover:bg-primaryDark text-white font-semibold py-3 rounded flex items-center justify-center w-[300px] cursor-pointer"
          >
            <FiUpload className="mr-3" />
            Carica immagini{" "}
            {whichPage === "sito"
              ? " del Sito"
              : whichPage === "evento" && "dell' Evento"}
          </label>
          <input
            className="hidden"
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleImageChange(e, setData, data)}
            disabled={modify && !enable ? true : false}
          />
          {data?.image?.map((image, index) => (
            <div key={index} className="flex items-center">
              <img
                className="w-16 mr-3"
                src={image?.data}
                alt={`preview${index + 1}`}
              />
              <p className="text-primary mr-3">{image?.name}</p>
              <p className="text-sm w-[180px] ">{formatBytes(image?.size)}</p>
              <div className="cursor-pointer flex justify-end w-full ">
                <FiDelete
                  onClick={() => handleRemoveImage(index, data, setData)}
                />
              </div>
            </div>
          ))}
        </div>

        {/**Locandina */}
        {whichPage === "evento" && (
          <div>
            <h2 className="text-primary text-2xl font-bold mt-20 mb-10">
              Locandina
            </h2>
            <label
              className="bg-primary hover:bg-primaryDark text-white font-semibold py-3 rounded flex items-center justify-center w-[300px] cursor-pointer"
              htmlFor="poster"
            >
              <FiUpload className="mr-3" />
              Seleziona la locandina
            </label>
            <input
              className="hidden"
              id="poster"
              type="file"
              accept="image/*"
              onChange={(e) => handlePosterChange(e, data, setData)}
              disabled={modify && !enable ? true : false}
            />
            {data?.postcard?.data && (
              <div className="flex items-center mt-10">
                <img
                  src={data?.postcard?.data}
                  alt="anteprima-locandina"
                  className="w-16 mr-3"
                />
                <p className="text-primary mr-3">{data.postcard?.name}</p>
                <p className="text-sm mr-12">
                  {formatBytes(data?.postcard?.size)}
                </p>
                <span
                  onClick={() => handleRemovePoster(setData, data)}
                  className=" cursor-pointer"
                >
                  <FiDelete />
                </span>
              </div>
            )}

            <h2 className="text-primary text-2xl font-bold mt-20 mb-5">Date</h2>
            {/**Date */}
            <div className="grid md:grid-cols-2 gap-20 max-w-3xl">
              <div>
                <p className="font-semibold my-2">Data di inizio</p>
                <input
                  className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 w-full"
                  type="date"
                  id="date-end"
                  value={data?.date?.start}
                  onChange={handleDateChange}
                  disabled={modify && !enable ? true : false}
                />
                <label className="text-sm mb-10" htmlFor="date-start">
                  Inserire la data di <span className="font-bold">inizio </span>
                  dell'evento
                </label>
              </div>
              <div>
                <p className="font-semibold my-2">Data di fine</p>
                <input
                  className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 w-full"
                  type="date"
                  id="date-end"
                  value={data?.date?.end}
                  onChange={handleEndDateChange}
                  disabled={modify && !enable ? true : false}
                />

                <label className="text-sm mb-10" htmlFor="date-end">
                  Inserire la data di <span className="font-bold">fine </span>
                  dell'evento
                </label>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-primary text-2xl font-bold mt-20 mb-5">
          Orari {whichPage}
        </h2>
        <div className="grid md:grid-cols-2 gap-20 max-w-3xl">
          <div className="flex flex-col">
            <input
              className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 w-full"
              type="time"
              id="hoursStart"
              value={data?.hours?.start}
              onChange={(e) =>
                setData({
                  ...data,
                  hours: { ...data.hours, start: e.target.value },
                })
              }
              disabled={modify && !enable ? true : false}
            />
            <label className="text-sm mb-10" htmlFor="hoursStart">
              Inserire orario <span className="font-bold">Apertura </span>
              {whichPage === "sito"
                ? " del Sito"
                : whichPage === "evento" && "dell' Evento"}
            </label>
          </div>
          <div className="flex flex-col">
            <input
              className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 w-full"
              type="time"
              id="hoursEnd"
              value={data?.hours?.end}
              onChange={(e) =>
                setData({
                  ...data,
                  hours: { ...data.hours, end: e.target.value },
                })
              }
              disabled={modify && !enable ? true : false}
            />
            <label className="text-sm mb-10" htmlFor="hoursEnd">
              Inserire orario <span className="font-bold">Chiusura </span>
              {whichPage === "sito"
                ? " del Sito"
                : whichPage === "evento" && "dell' Evento"}
            </label>
          </div>
        </div>
        <h2 className="text-primary text-2xl font-bold my-5">Prezzo</h2>
        <div className="max-w-3xl">
          <div className="border border-transparent border-b-[#C5C7C9] w-full py-5">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="gratis"
                className="cursor-pointer"
                value="gratis"
                checked={priceType === "gratis"}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    priceType,
                    setPriceType,
                    data,
                    setData
                  )
                }
                disabled={modify && !enable ? true : false}
              />
              <label htmlFor="gratis" className="cursor-pointer font-bold">
                Gratuito
              </label>
            </div>
            <p className="ml-[26px] text-lg mt-3">
              Spunta questa casella nel caso in cui il prezzo per accedere{" "}
              {whichPage === "sito"
                ? " al Sito"
                : whichPage === "evento" && "all' Evento"}{" "}
              sia <span className="font-semibold">GRATUITO</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:space-x-10">
            <div className="border border-transparent border-b-[#C5C7C9] w-full py-5">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="prezzo-fisso"
                  className="cursor-pointer"
                  value="fixed"
                  checked={priceType === "fixed"}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      priceType,
                      setPriceType,
                      data,
                      setData
                    )
                  }
                  disabled={modify && !enable ? true : false}
                />
                <label
                  htmlFor="prezzo-fisso"
                  className="cursor-pointer font-bold"
                >
                  Prezzo fisso
                </label>
              </div>

              <p className="ml-[26px] text-lg mt-3 ">
                Spunta questa casella nel caso in cui il prezzo per accedere
                {whichPage === "sito"
                  ? " al Sito"
                  : whichPage === "evento" && " all' Evento"}{" "}
                sia <span className="font-semibold">FISSO</span>
              </p>
            </div>

            <div className="relative">
              <TbCurrencyEuro className="absolute top-1/2 -translate-y-1/2" />
              <input
                className="py-3 pl-7 outline-none border border-transparent border-b-[#C5C7C9] w-[270px]"
                type="number"
                id="prezzo-fisso-input"
                placeholder="Inserire prezzo fisso"
                min="0"
                disabled={
                  priceType === "gratis" ||
                  priceType === "" ||
                  priceType === "variable"
                }
                onChange={(e) =>
                  setData({ ...data, price: e.target.value, priceVariable: 0 })
                }
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:space-x-10">
            <div className="border border-transparent border-b-[#C5C7C9] w-full py-5">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="prezzo-variabile"
                  className="cursor-pointer"
                  value="variable"
                  checked={priceType === "variable"}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      priceType,
                      setPriceType,
                      data,
                      setData
                    )
                  }
                  disabled={modify && !enable ? true : false}
                />
                <label
                  htmlFor="prezzo-variabile"
                  className="cursor-pointer font-bold"
                >
                  Prezzo variabile
                </label>
              </div>

              <p className="ml-[26px] text-lg mt-3 ">
                Spunta questa casella nel caso in cui il prezzo per accedere
                {whichPage === "sito"
                  ? " al Sito"
                  : whichPage === "evento" && " all' Evento"}{" "}
                sia <span className="font-semibold">VARIABILE</span>
              </p>
            </div>

            <div className="relative">
              <TbCurrencyEuro className="absolute top-1/2 -translate-y-1/2" />
              <input
                className="py-3 pl-7 outline-none border border-transparent border-b-[#C5C7C9] w-[270px]"
                type="number"
                id="prezzo-variabile-input"
                placeholder="Inserire prezzo variabile"
                min="0"
                disabled={
                  priceType === "gratis" ||
                  priceType === "" ||
                  priceType === "fixed"
                }
                onChange={(e) =>
                  setData({ ...data, priceVariable: e.target.value, price: 0 })
                }
              />
            </div>
          </div>
        </div>
        <h2 className="text-primary text-2xl font-bold mt-20 mb-5">
          Accessibilità
        </h2>
        <div className="max-w-3xl">
          <div className="border border-transparent border-b-[#C5C7C9] w-full py-5">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="fully-accessible"
                className="cursor-pointer"
                value="fullyAccessible"
                checked={data.accessibility === "fullyAccessible"}
                onChange={(e) => handleAccessibilityChange(e, data, setData)}
                disabled={modify && !enable ? true : false}
              />
              <label
                htmlFor="fully-accessible"
                className="cursor-pointer font-bold"
              >
                Completamente accessibile a persone con disabilità motorie
              </label>
            </div>

            <p className="ml-[26px] text-lg mt-3 ">
              Spunta questa casella se{" "}
              {whichPage === "sito"
                ? "il Sito"
                : whichPage === "evento" && "l' Evento"}{" "}
              offre servizi per l’accesso a persone con disabilità motorie
            </p>
          </div>

          <div className="border border-transparent border-b-[#C5C7C9] w-full py-5">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="partially-accessible"
                className="cursor-pointer"
                value="partiallyAccessible"
                checked={data.accessibility === "partiallyAccessible"}
                onChange={(e) => handleAccessibilityChange(e, data, setData)}
                disabled={modify && !enable ? true : false}
              />
              <label
                htmlFor="partially-accessible"
                className="cursor-pointer font-bold"
              >
                Parzialmente accessibile a persone con disabilità motorie
              </label>
            </div>

            <p className="ml-[26px] text-lg mt-3 ">
              Spunta questa casella se{" "}
              {whichPage === "sito"
                ? "il Sito"
                : whichPage === "evento" && "l' Evento"}{" "}
              offre servizi per l’accesso a persone con disabilità motorie solo{" "}
              <span className="font-semibold">limitatamente</span>
            </p>
          </div>

          <div className="border border-transparent border-b-[#C5C7C9] w-full py-5">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="not-accessible"
                className="cursor-pointer"
                value="notAccessible"
                checked={data.accessibility === "notAccessible"}
                onChange={(e) => handleAccessibilityChange(e, data, setData)}
                disabled={modify && !enable ? true : false}
              />
              <label
                htmlFor="not-accessible"
                className="cursor-pointer font-bold"
              >
                NON accessibile a persone con disabilità motorie
              </label>
            </div>

            <p className="ml-[26px] text-lg mt-3 ">
              Spunta questa casella se{" "}
              {whichPage === "sito"
                ? "il Sito"
                : whichPage === "evento" && "l' Evento"}{" "}
              <span className="font-semibold">NON</span> offre servizi per
              l’accesso a persone con disabilità motorie limitatamente
            </p>
          </div>
        </div>
        <h2 className="text-primary text-2xl font-bold mt-20 mb-5">
          Indicazioni stradali
        </h2>
        <div className="relative mb-10">
          <textarea
            className="outline-none border border-[#2F475E] p-5 max-w-[600px]"
            id="directions"
            name="directions"
            value={data?.directions?.it}
            placeholder="Inserisci qui le informazioni stradali"
            onChange={(e) => handleDirectionsChange(e, data, setData)}
            rows="4"
            cols="50"
            disabled={modify && !enable ? true : false}
          />
          <p className="text-end text-lg max-w-[500px]">
            {data?.directions?.it?.length}/500
          </p>
        </div>
        <h2 className="text-primary text-2xl font-bold my-10 ">Tags</h2>
        <input
          className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 max-w-[300px]"
          type="text"
          placeholder="Tag"
          autoComplete="off"
          id="tag1"
          value={data?.tags?.tag1?.it}
          onChange={(e) =>
            setData({
              ...data,
              tags: { ...data.tags, tag1: e.target.value },
            })
          }
          disabled={modify && !enable ? true : false}
        />
        <label className="text-lg mb-10" htmlFor="tag1">
          Inserisci il <span className="font-semibold">primo</span> tag per
          questo {whichPage}
        </label>
        <input
          className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 max-w-[300px]"
          type="text"
          placeholder="Tag"
          id="tag2"
          value={data?.tags?.tag2?.it}
          autoComplete="off"
          onChange={(e) =>
            setData({
              ...data,
              tags: { ...data.tags, tag2: e.target.value },
            })
          }
          disabled={modify && !enable ? true : false}
        />
        <label className="text-lg mb-10" htmlFor="tag1">
          Inserisci il <span className="font-semibold">secondo</span> tag per
          questo {whichPage}
        </label>

        {whichPage === "sito" && (
          <div className="flex flex-col">
            <h2 className="text-primary text-2xl font-bold my-10 ">
              URL Fonte esterna
            </h2>
            <input
              className="outline-none border border-transparent border-b-[#2F475E] py-2 mb-2 max-w-[300px]"
              type="text"
              placeholder="URL"
              autoComplete="off"
              id="url"
              value={data?.url}
              onChange={(e) => setData({ ...data, url: e.target.value })}
              disabled={modify && !enable ? true : false}
            />
            <label className="text-lg mb-10" htmlFor="url">
              Inserire l'URL della fonte esterna
            </label>
          </div>
        )}
        {!modify && (
          <button
            className="bg-primary w-[200px] p-5 text-white font-semibold hover:bg-primaryDark flex items-center justify-center space-x-3 rounded mt-10"
            type="submit"
          >
            <LuSaveAll />
            <p>Salva {whichPage}</p>
          </button>
        )}
      </form>

      {modify && enable && (
        <div className="flex space-x-10">
          <button
            className="bg-[#008055] w-[200px] p-5 text-white font-semibold hover:bg-green-600 rounded mt-10"
            onClick={(e) => handleSubmit(e, "save", whichPage)}
          >
            <p>Salva Modifiche</p>
          </button>
          <button
            className="bg-[#CC334D] w-[200px] p-5 text-white font-semibold hover:bg-red-800 rounded mt-10"
            onClick={(e) => handleSubmit(e, "delete", whichPage)}
          >
            {whichPage === "sito" ? (
              <p>Elimina Sito</p>
            ) : (
              whichPage === "evento" && <p>Elimina Evento</p>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
export default FormData;
