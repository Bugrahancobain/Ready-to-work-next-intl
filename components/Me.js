import { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

function Me({ locale, t }) {
  const components = [
    <AboutMe locale={locale} t={t} key="1" />,
    <Education locale={locale} t={t} key="2" />,
    <Experience locale={locale} t={t} key="3" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  return (
    <div className="me">
      <img
        loading="lazy"
        src="/bugrahanCoban.webp"
        alt="BugrahanCobanImg"
        className="bugrahanImg"
      />
      <div className="slider">
        <button onClick={handlePrev} className="prev-button">
          ←
        </button>
        <div
          className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {components.map((component, index) => (
            <div key={index} className="slide">
              {component}
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="next-button">
          →
        </button>
      </div>
    </div>
  );
}

export default Me;
