import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"My grades improved significantly after joining EduMentor Home Tuition. The tutor was very patient and explained concepts clearly."</p>
            <h4>- Ramesh, Class 10</h4>
          </div>
          <div className="testimonial-card">
            <p>"The personalized attention helped my daughter overcome her fear of Mathematics. Thank you!"</p>
            <h4>- Mrs. Sharma, Parent</h4>
          </div>
          <div className="testimonial-card">
            <p>"Flexible timings and excellent teaching methods. Highly recommended for anyone looking for home tuition."</p>
            <h4>- Priya, Class 12</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;