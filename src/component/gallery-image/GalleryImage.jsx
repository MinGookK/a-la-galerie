import "./GalleryImage.css";

import GalleryImageDetails from "./gallery-details/GalleryImageDetails";

const GalleryImage = props => {
  const { url } = props;

  return (
    <div className="Gallery__image-frame">
      <img src={url} alt={url} className="Gallery__image" />
      <GalleryImageDetails {...props} />
    </div>
  );
};

export default GalleryImage;
