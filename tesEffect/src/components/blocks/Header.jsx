import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import avatar from '../../assets/img/avatar.jpeg'

const Header = () => {
  return (
    <header>
      <div className="call-button">
          <FontAwesomeIcon icon={faPhone} color="#A5B1B7"></FontAwesomeIcon>
      </div>
      <div className="profile-link">
        <span>
          <img src={avatar} alt="Avatar"/>
        </span>
      </div>
    </header>
  )
}

export default Header