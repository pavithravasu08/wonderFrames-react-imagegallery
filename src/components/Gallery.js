
import ImageCard from "./ImageCard";

function Gallery({ images }) {
  return (
    <section className="gallery-section container" id="gallery">

      <div className="section-heading">
        <div>
          <span className="eyebrow">THE COLLECTION</span>
          <h2>Moments worth framing</h2>
        </div>

        <span className="gallery-count">
          {images.length} photographs
        </span>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
          />
        ))}
      </div>

    </section>
  );
}

export default Gallery;
