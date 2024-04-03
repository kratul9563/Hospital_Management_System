import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography" style={{ color: "#fff" }}>
      <div className="banner">
        <img src={imageUrl} alt="aboutImage" />
      </div>
      <div className="banner">
        <h1 style={{ fontSize: "44px", fontWeight: "revert" }}>Biography</h1>
        <h5>"Healthcare Medical": Your Trusted Partner in Wellness !</h5>

        <p>
          At Healthcare Medical, we are dedicated to revolutionizing the
          healthcare industry through cutting-edge technology and unwavering
          commitment to patient care. Our institute stands as a beacon of hope,
          providing comprehensive medical services that prioritize your
          well-being above all else.
        </p>
        <p>
          Founded on the principles of compassion, integrity, and excellence,
          Healthcare Medical has emerged as a leader in the field of healthcare.
          With a team of highly skilled professionals.
        </p>
        <p>
          At Healthcare Medical, we understand that health is not merely the
          absence of disease but a state of complete physical, mental, and
          social well-being.{" "}
        </p>
        <p>
          With Healthcare Medical, you can rest assured knowing that your health
          is in good hands. Experience the difference that personalized care,
          advanced technology, and unwavering dedication can make in your life.
          Welcome to Healthcare Medical, where your well-being is our top
          priority.
        </p>
        <p style={{ fontSize: "35px", fontWeight: "revert" }}>
          "Your health is our priority, your wellness our mission"
        </p>
      </div>
    </div>
  );
}

export default Biography