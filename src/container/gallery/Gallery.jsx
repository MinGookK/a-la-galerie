import "./Gallery.css";

import { usePhotoContext } from "../../context/PhotoContext";

import React, { useEffect } from "react";
// import { v4 as uuid } from "uuid";
import UnsplashService from "../../service/UnsplashService";
import GalleryImage from "../../component/gallery-image/GalleryImage";
import { makeRandomQueryKeyword, randRange } from "../../util/Common";
import { useMemo } from "react";

const Gallery = () => {
  const photosCtx = usePhotoContext();

  useEffect(() => {
    (async () => {
      let response = await UnsplashService.get7Photos(
        makeRandomQueryKeyword(),
        randRange(1, 100)
      );

      if (!response) {
        console.error("No valid response");
        return;
      }

      photosCtx.setPhotos(
        response.results.map(res => ({
          id: res.id,
          title: res.alt_description,
          author: `${res.user.first_name} ${res.user.last_name}`,
          description: res.description ?? "No Description",
          url: res.urls.raw,
          link: res.links.download,
        }))
      );
    })();
  }, []);

  const imgsJSX = useMemo(
    () =>
      photosCtx.photos &&
      photosCtx.photos.length > 1 &&
      photosCtx.photos.map(photo => <GalleryImage key={photo.id} {...photo} />),
    [photosCtx.photos]
  );

  return <div className="Gallery">{imgsJSX}</div>;
};

export default Gallery;
