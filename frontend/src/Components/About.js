import React from 'react';

const AboutUsPage = () => {
  const organizationName = "Travel Adventures";
  const location = "123 Main Street,Golden city, Mumbai, India";
  const address = "P.O. Box 12345, Mumbai,India";
  const contactEmail = "info@Vacationtravels.com";
  const contactPhone = "+91 123-456-7890";

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to Vacation Travels! We are passionate about exploring the world and helping others have unforgettable travel experiences.</p>
      <p>Our mission is to provide you with all the information you need to plan your dream vacation. From destination guides and travel tips to recommended accommodations and activities, we've got you covered.</p>
      <p>Whether you're an adventure seeker looking for thrilling experiences, a culture enthusiast interested in immersing yourself in local traditions, or simply want to relax and unwind in a beautiful setting, we have something for everyone.</p>
      <p>Our team of travel experts is constantly researching and updating our content to ensure you have access to the most up-to-date and accurate information. We want to make sure your travel planning process is smooth and hassle-free.</p>
      <p>For any inquiries or assistance, please feel free to contact us:</p>
      <ul>
        <li>Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
        <li>Phone: <a href={`tel:${contactPhone}`}>{contactPhone}</a></li>
      </ul>
      <p>Visit us at our office:</p>
      <ul>
        <li>{location}</li>
        <li>{address}</li>
      </ul>
      <p>Thank you for choosing Vacation Travels as your travel companion. We hope you have an amazing journey!</p>
    </div>
  );
};

export default AboutUsPage;
