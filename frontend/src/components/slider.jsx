import React, { useState, useEffect } from 'react';
import '../style/carousel.css';
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Slider = ({ trending = [] }) => {
  if (!trending.length) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function handleTry(item) {
    navigate(`/course/${item}`);
  }

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trending.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="carousel" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 1s ease-in-out' : 'none', }} onTransitionEnd={handleTransitionEnd}>
        {trending.map((item, index) => (
          <div className={`carousel-card ${index === currentIndex ? 'active' : 'blurred'}`} key={index}>
            <div className="card-content">
              <h3>{item?.courseName}</h3>
              <button onClick={() => handleTry(item.courseId)}>Try this</button>
            </div>
            <img
              src={`/images/${item?.category}.jpg`}
              alt={item?.category || 'default'}
              className="slider-img"
              loading="lazy"
            />
            <div className='card-det'>
              <div className='dets'>
                <p>{item?.courseDesc}</p>
                <p>by {item?.courseTutor}</p>
                <p>{item?.rating}<MdOutlineStar className='star' />/5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        ◀
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default Slider;
