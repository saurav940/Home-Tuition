import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>One-to-One Tuition</h3>
            <p>Personalized attention for better understanding and performance.</p>
          </div>
          <div className="service-card">
            <h3>Group Tuition</h3>
            <p>Affordable group sessions with interactive learning.</p>
          </div>
          <div className="service-card">
            <h3>Online Classes</h3>
            <p>Flexible learning from the comfort of your home.</p>
          </div>
          <div className="service-card">
            <h3>Exam Preparation</h3>
            <p>Specialized coaching for board and competitive exams.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;