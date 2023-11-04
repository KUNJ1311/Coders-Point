import React from 'react';
import user1 from "./user1.jpg";
import './Profile4.css'

export default function PersonalProfile() {
  return (
    <section className="profile-window" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="window2">
        <div className="window3">
          <div className="window4" style={{ borderRadius: '.5rem' }}>
            <div className="window5">
              <div className="left-window"
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                <img src={user1}
                  alt="Avatar" className="img" style={{ width: '80px' }} />
                <h5>Rishi Hirpara</h5>
                <p>Web Designer</p>
              </div>
              <div className="right-window">
                <div className="details">
                  <h6>Information</h6>
                  <hr className="line" />
                  <div className="details2">
                    <div className="mail">
                      <h6>Email</h6>
                      <p className="mailid">info@example.com</p>
                    </div>
                    <div className="contact">
                      <h6>Phone</h6>
                      <p className="contactno">123 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
