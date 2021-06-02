import "./GalleryImageDetails.css";

const GalleryImageDetails = props => {
  const { title, author, description, link } = props;
  return (
    <div className="Gallery__image-detail">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Link
      </a>
      <p>{description}</p>
    </div>
  );
};

export default GalleryImageDetails;
