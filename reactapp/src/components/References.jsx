import { useState } from "react";
import "../index.css";

export default function References() {
  const referenceImages = [
    "https://i.pinimg.com/736x/d0/0e/3f/d00e3f1b1bb65c28cf85cdb87fa0e96c.jpg",
    "https://i.pinimg.com/736x/ce/6e/45/ce6e455db050eed078d96e5ca20048b1.jpg",
    "https://i.pinimg.com/736x/e0/d6/87/e0d687ee543d4f542be0586b7fd1bdd4.jpg",
    "https://mobracey.wordpress.com/wp-content/uploads/2022/11/ileg.jpg",
    "https://i.pinimg.com/736x/89/e4/ae/89e4ae05523d2028b124769b2c66971f.jpg",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [saved, setSaved] = useState([]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === referenceImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? referenceImages.length - 1 : prev - 1
    );
  };

  const saveImage = () => {
    const currentImage = referenceImages[currentIndex];
    if (!saved.includes(currentImage)) {
      setSaved([...saved, currentImage]);
    }
  };

  return (
    <main className="references-page">
      <h2>Reference Library</h2>

      {/* Slider */}
      <section className="slider">
        <button onClick={prevSlide}>⬅</button>

        <div className="image-container">
          <img
            key={currentIndex}
            src={referenceImages[currentIndex]}
            alt="reference"
            className="slide-image"
          />
        </div>

        <button onClick={nextSlide}>➡</button>
      </section>

      <button className="save-btn" onClick={saveImage}>
        Save Reference
      </button>

      {/* Saved Section */}
      <section className="saved-section">
        <h3>Saved References</h3>
        {saved.length === 0 && <p>No saved references yet.</p>}

        <div className="saved-grid">
          {saved.map((img, index) => (
            <img key={index} src={img} alt="saved reference" />
          ))}
        </div>
      </section>
    </main>
  );
}
