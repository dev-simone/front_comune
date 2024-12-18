import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";

export const formatBytes = (bytes) => {
  const kilobytes = bytes / 1024;
  if (kilobytes > 1024) {
    return (kilobytes / 1024).toFixed(2) + " MB";
  } else {
    return kilobytes.toFixed(2) + " KB";
  }
};

export const handlePaste = (e, data, setData) => {
  const pastedText = e.clipboardData.getData("text");
  const updatedDescription = data.description + pastedText;
  if (updatedDescription.length <= 500) {
    setData({ ...data, description: updatedDescription });
  } else {
    toast.error("Testo troppo lungo");
  }
};

export const handleImageChange = async (e, setData, data) => {
  const fileList = Array.from(e.target.files);
  const newImages = [];
  const maxImages = 2;

  if (fileList.length + data.image.length > maxImages) {
    toast.error(`Puoi selezionare al massimo ${maxImages} immagini`);
    return;
  }

  const options = {
    maxSizeMB: 1,
    //maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  for (
    let i = 0;
    i < fileList.length && i < maxImages - data.image.length;
    i++
  ) {
    try {
      const compressedFile = await imageCompression(fileList[i], options);
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          name: compressedFile.name,
          size: compressedFile.size,
          data: event.target.result,
        };
        newImages.push(newImage);
        if (newImages.length === fileList.length) {
          setData((prevData) => ({
            ...prevData,
            image: [...prevData.image, ...newImages],
          }));
        }
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Error during image compression:", error);
    }
  }
};

export const handleRemoveImage = (index, data, setData) => {
  if (data && data.image) {
    let newImageArray = [...data.image];
    newImageArray.splice(index, 1);
    setData({ ...data, image: newImageArray });
  }
};

export const handlePosterChange = async (e, data, setData) => {
  const selectedPoster = e.target.files[0];
  if (selectedPoster) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(selectedPoster, options);
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPoster = {
          name: compressedFile.name,
          size: compressedFile.size,
          data: event.target.result,
        };
        setData({ ...data, postcard: newPoster });
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Error during image compression:", error);
    }
  }
};

export const handleRemovePoster = (setData, data) => {
  setData({ ...data, postcard: {} });
};

export const handleDescriptionChange = (e, data, setData) => {
  if (e.target.value.length <= 500) {
    setData({
      ...data,
      description: {
        it: e.target.value,
        en: data.description && data.description.en ? data.description.en : "",
      },
    });
  }
};

export const handleDirectionsChange = (e, data, setData) => {
  if (e.target.value.length <= 500) {
    setData({
      ...data,
      directions: {
        it: e.target.value,
        en: data.directions && data.directions.en ? data.directions.en : "",
      },
    });
  }
};

export const handleCheckboxChange = (
  e,
  priceType,
  setPriceType,
  data,
  setData
) => {
  const selectedValue = e.target.value;
  if (priceType === selectedValue) {
    setPriceType(null);
    setData({ ...data, price: null, priceVariable: null });
  } else if (selectedValue === "gratis") {
    setData({ ...data, price: 0, priceVariable: 0 });
    setPriceType(selectedValue);
  } else {
    setPriceType(selectedValue);
  }
};

export const handleAccessibilityChange = (e, data, setData) => {
  const selectedValue = e.target.value;
  if (data.accessibility === selectedValue) {
    setData({ ...data, accessibility: "" });
  } else {
    setData({ ...data, accessibility: selectedValue });
  }
};
