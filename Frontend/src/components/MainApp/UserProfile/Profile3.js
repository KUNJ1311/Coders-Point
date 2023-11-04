import React from 'react'
import './Profile3.css'
import user1 from "../../Image/user1.jpg";
const Profile3 = () => {
  return (
    <div className='profilecard'>
      <div className="gradiant">
        <div className="profile-down">
            <img src={user1} alt="" />
            <div className="profile-title">Rishi Hirpara</div>
            <div className="profile-description">
                Hii!!! Nice to meet you. I work at coderspoint
            </div>
            <div className="profile-button"><a href="mailto:rishihirpara60@gmail.com">Contact Me</a></div>
        </div>
      </div>
    </div>
  )
}

export default Profile3
