import React, { useState, useEffect } from "react";
import "./Testimonial.css";

// Sample testimonial data - replace with your own
const testimonialData = [
  {
    id: 1,
    name: "Rahul G, PM",
    role: "Amazon",
    avatar: "https://i.pravatar.cc/40?img=1",
    text: "The instant mentor booking changed everything. Got guidance exactly when I needed it most."
  },
  {
    id: 2,
    name: "Shubhra S",
    role: "Senior PM at Microsoft",
    avatar: "https://i.pravatar.cc/40?img=5",
    text: "Company research section helped me answer Amazon's 'Customer Obsession' questions confidently."
  },
  {
    id: 3,
    name: "Atharva K",
    role: "APM at Google",
    avatar: "https://i.pravatar.cc/40?img=3",
    text: "AI mocks available at 2 AM when I needed last-minute practice before my Meta interview."
  },
  {
    id: 4,
    name: "Atharva K.",
    role: "Fresher to APM",
    avatar: "https://i.pravatar.cc/40?img=10",
    text: "As a fresher, I had no PM network. Interview Prep Up's instant mentor access changed everything. Cracked Google APM."
  },
  {
    id: 5,
    name: "Shubhra S.",
    role: "Startup to FAANG",
    avatar: "https://i.pravatar.cc/40?img=12",
    text: "Struggled with Amazon LP questions. The company-specific modules and 3 AM AI practice sessions helped me nail it."
  },
  {
    id: 6,
    name: "Ananya R.",
    role: "Marketing to PM",
    avatar: "https://i.pravatar.cc/40?img=9",
    text: "Being from non-tech background, I needed extra support. The structured approach and patient mentors made it possible."
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const cardsToShow = 3;
  const totalCards = testimonialData.length;

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalCards - cardsToShow + 1));
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % totalCards;
      cards.push(testimonialData[index]);
    }
    return cards;
  };

  const getCardClassName = (index) => {
    let className = "testimonial-card";
    
    if (index === 1) {
      className += " center-card"; // Add class for the center card
    } else {
      className += " side-card"; // Add class for side cards
    }
    
    if (isAnimating) {
      className += direction === "next" 
        ? index === 0 ? " exit-left" : index === cardsToShow ? " enter-right" : ""
        : index === 0 ? " enter-left" : index === cardsToShow - 1 ? " exit-right" : "";
    }
    
    return className;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h3 className="section-title">Testimonials</h3>
        <p className="testimonials-subtitle">
          What Our Users Say
        </p>
        
        <div className="testimonials-carousel">
          <div className="testimonials-cards-container">
            {getVisibleCards().map((testimonial, index) => (
              <div key={testimonial.id} className={getCardClassName(index)}>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name}`}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-navigation">
            <button 
              className="nav-button prev-button" 
              onClick={handlePrev}
              disabled={isAnimating}
            >
              <span>&larr;</span> Prev
            </button>
            <button 
              className="nav-button next-button" 
              onClick={handleNext}
              disabled={isAnimating}
            >
              Next <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;