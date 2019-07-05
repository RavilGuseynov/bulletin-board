import React from 'react';
import announcementImg from '../img/announcement-img.png';
import announcementTelIcon from '../img/announcement-tel-icon.png';
import announcementCityIcon from '../img/announcement-city-icon.png';

export default function(props) {  

  const { id, name, description, tel, city } = props.announcement;
  const { removeAnnouncement } = props;  

  return (

    <div className="announcement-item">

          <div>
            <h3 className="announcement-name">{name}</h3>
            <div>
              <div className="announcement-left-side">
                <div className="announcement-description">{description}</div>
                <img className="announcement-img" src={announcementImg} alt="announcement-img" />
              </div>
              <div className="announcement-right-side">
                <div className="announcement-tel">
                  <img className="announcement-tel-icon" src={announcementTelIcon} alt="tel-icon" />
                  <div className="tel-number">{tel}</div>
                </div>
                <div className="announcement-city">
                  <img className="announcement-city-icon" src={announcementCityIcon} alt="city-icon" />
                  <div className="city-text">{city}</div>
                </div>
                <button className="edit-btn">
                  <div className="edit-btn-text">Редактировать</div>
                </button>
                <button 
                  className="delete-btn" 
                  onClick={ev => {
                    ev.preventDefault();
                    removeAnnouncement(id);
                  }}>

                  <div className="delete-btn-text">Удалить</div>
                </button>
              </div>
            </div>
          </div>

        </div>

  )

}