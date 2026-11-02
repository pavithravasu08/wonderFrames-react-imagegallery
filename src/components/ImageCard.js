
function ImageCard({ image }) {
  return (
    <article className="image-card">

      <div className="image-wrapper">
        <img
          src={image.url}
          alt={image.alt}
          loading="lazy"
        />

        <span className="category">
          {image.category}
        </span>
      </div>

      <div className="card-content">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>

    </article>
  );
}

export default ImageCard;
