import React, {Component} from 'react';
import questionIcon from '../img/quest-icon2.png';
import succesIcon from '../img/succes-icon.png';
import warnIcon from '../img/warn-icon.png';

export class AddAnnouncement extends Component {

  render() {

    const { addAnnouncement } = this.props;

    return (

      <form>
            <h2 id="title">Подать объявление</h2>
            <div className="input-title">Заголовок</div>
            <input type="text" id="announcement-name" />
            <div className="side-hint hint-shown">
                <img className="hint-icon" src={questionIcon} alt="?" />
                <div className="hint-text">Обязательное поле<br />Не более 140 символов</div>
            </div>

            <div className="side-hint side-hint-succes hint-hidden">
                <img className="hint-icon" src={succesIcon} alt="succes" />
                <div className="hint-text">Заполнено</div>
            </div>

            <div className="side-hint side-hint-warn hint-hidden">
                <img className="hint-icon" src={warnIcon} alt="warning" />
                <div className="hint-text">Заполните поле</div>
            </div>

            <div className="input-title">Текст объявления</div>
            <textarea name="" id="announcement-text"></textarea>
            <div className="side-hint">
                <img className="hint-icon" src={questionIcon} alt="?" />
                <div className="hint-text">Не более 300 символов</div>
            </div>
            <div className="input-title">Телефон</div>
            <input type="tel" id="tel" placeholder="+7 (___) ___-__-__" />
            <div className="side-hint">
                <img className="hint-icon" src={questionIcon} alt="?" />
                <div className="hint-text">Обязательное поле</div>
            </div>
            <div className="input-title">Город</div>
            <select id="city-select" type="text">
                <option className="city-option">Москва</option>
                <option className="city-option">Санкт-Петербург</option>
                <option className="city-option">Казань</option>
                <option className="city-option">Самара</option>
                <option className="city-option">Омск</option>
                <option className="city-option">Саратов</option>
                <option className="city-option">Орёл</option>
                <option className="city-option">Калининград</option>
                <option className="city-option">Серпухов</option>
                <option className="city-option">Пенза</option>
                <option className="city-option">Оренбург</option>
                <option className="city-option">Владимир</option>
                <option className="city-option">Чебоксары</option>
                <option className="city-option">Новосибирск</option>
            </select><br />
            <button id="attach-photo-btn"><div id="attach-photo-btn-text">Прикрепить фото</div></button><br />
            <button 
                id="send-btn"
                onClick={ev => {
                    ev.preventDefault()                    
                    addAnnouncement(
                        document.getElementById('announcement-name').value,
                        document.getElementById('announcement-text').value,
                        document.getElementById('tel').value,
                        document.getElementById('city-select').value
                    );
                }}
            >
            <div id="send-btn-text">Подать</div></button>
        </form>

    )

  }

}