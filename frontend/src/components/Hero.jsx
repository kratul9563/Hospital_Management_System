import React from 'react'


const Hero = ({title,imageUrl}) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1 style={{ color: "#271776ca", marginTop:"70px" }}>{title}</h1>
    
        <p>
          "At Healthcare Medical, we are dedicated to providing exceptional
          healthcare services tailored to meet the diverse needs of our
          patients. With a commitment to excellence and a focus on innovation,
          we strive to deliver compassionate care, advanced treatments, and
          cutting-edge technologies to promote wellness and improve the quality
          of life for all. Our team of highly skilled medical professionals
          works tirelessly to ensure that every patient receives personalized
          attention and the highest standard of medical care.
        </p>
        <h6>
          "Innovative Care, Compassionate Hearts – Welcome to Healthcare
          Medical."
        </h6>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
}

export default Hero