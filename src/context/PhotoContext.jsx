import React, { useState, useContext } from "react";

const init = {
  photos: [
    {
      id: "",
      title: "",
      author: "",
      description: "",
      url: "",
      link: "",
    },
  ],
  setPhotos: newPhotos => {},
};

const photoCtx = React.createContext(init);

export const PhotoContextProviderWrapper = children => {
  const [photos, setPhotos] = useState(init);

  return <photoCtx.Provider value={{ photos, setPhotos }} {...children} />;
};

export const usePhotoContext = () => {
  const ctx = useContext(photoCtx);
  if (!ctx) {
    throw new Error("Photo context isn't valid! put a provider");
  }
  return ctx;
};
