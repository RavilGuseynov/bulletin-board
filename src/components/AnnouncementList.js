import React, {Component} from 'react';
import Announcement from './Announcement'
import {AddAnnouncement} from './AddAnnouncement';
import uuidv4 from 'uuid/v4';

export class AnnouncementList extends Component {

  state = {
    announcements: [
      {
        id: 'qeqweqweqweqeqweqweeq',
        name: 'Продам собаку',
        description: 'Станет отличным другом, к лотку приучена',
        tel: '+79151331649',
        city: 'Москва'
      }   
    ]
  }

  componentWillMount() {
    if (localStorage.getItem('localState')) {
        const storageDate = JSON.parse(localStorage.getItem('localState'));
        const { announcements } = storageDate;
        this.setState({ announcements });
    }
  }

  addAnnouncementHandler = (name, description, tel, city) => {
    if (name && description && tel ) {
      const newAnnouncement = {
        id: uuidv4(),
        name,
        description,
        tel,
        city
      }
      let announcements = [...this.state.announcements];
      announcements = [
        newAnnouncement,
        ...this.state.announcements
      ]

      this.setState({ announcements }, function() {
        let storage = JSON.stringify(this.state);
        localStorage.setItem('localState', storage);
      });

    }
  }

  removeAnnouncementHandler = id => {
    const announcements = [...this.state.announcements];
    announcements.forEach(announcement => {
      if (announcement.id === id) {
        announcements.splice(announcements.indexOf(announcement), 1);
      }
    })

    this.setState({ announcements }, function() {
      let storage = JSON.stringify(this.state);
      localStorage.setItem('localState', storage);
    });
    
  }

  render() {

    const announcementList = this.state.announcements.map((announcement, i) => {
      return (
        <div key={i}>
          <Announcement 
            announcement={announcement}
            removeAnnouncement={this.removeAnnouncementHandler.bind(this)}
          />
        </div>
      )
    })

    return (

      <div>      
        <AddAnnouncement 
          addAnnouncement={this.addAnnouncementHandler.bind(this)}
        />
        <div id="announcement-list">
          <h2>Объявление</h2>
          { announcementList }      
        </div>
      </div>
    )

  }

}