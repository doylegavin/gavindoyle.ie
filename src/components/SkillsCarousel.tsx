'use client';

import React, { useState, useEffect } from 'react';

interface Skill {
  category: string;
  skills: string[];
}

interface SkillsCarouselProps {
  skillCategories: Skill[];
}

export default function SkillsCarousel({ skillCategories }: SkillsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === skillCategories.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [skillCategories.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? skillCategories.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === skillCategories.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="skills-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={goToPrevious}
          aria-label="Previous skills"
        >
          ‹
        </button>
        
        <div className="carousel-content">
          <div className="skill-category">
            <h3 className="skill-category-title">{skillCategories[currentIndex].category}</h3>
            <div className="skills-grid">
              {skillCategories[currentIndex].skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          className="carousel-btn carousel-btn-next"
          onClick={goToNext}
          aria-label="Next skills"
        >
          ›
        </button>
      </div>
      
      <div className="carousel-indicators">
        {skillCategories.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${skillCategories[index].category}`}
          />
        ))}
      </div>

      <style jsx>{`
        .skills-carousel {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .carousel-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .carousel-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .carousel-content {
          flex: 1;
          text-align: center;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-category {
          width: 100%;
        }

        .skill-category-title {
          color: #e50914;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .skill-tag {
          background: linear-gradient(45deg, #e50914, #f40612);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(229, 9, 20, 0.4);
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #e50914;
          transform: scale(1.2);
        }

        .indicator:hover {
          background: rgba(229, 9, 20, 0.7);
        }

        @media (max-width: 768px) {
          .skills-carousel {
            padding: 1.5rem;
          }
          
          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }
          
          .skill-category-title {
            font-size: 1.4rem;
          }
          
          .skill-tag {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}


