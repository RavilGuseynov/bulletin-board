import React, {Component} from 'react';
import SideHint from './SideHint';

export class AddAnnouncement extends Component {

    state = {
        form: {
            name: '',
            text: '',
            tel: '',
            city: ''
        },
        areaStatus: {
            nameAreaStatus: 'EMPTY', // 'COMPLETED', 'NOT_FILLED'
            textAreaStatus: 'EMPTY', // 'COMPLETED', 'NOT_FILLED'
            telAreaStatus: 'EMPTY', // 'COMPLETED', 'INCORRECT', 'NOT_FILLED'
            cityAreaStatus: 'EMPTY' // 'COMPLETED', 'NOT_FILLED'
        }
    }

    preFillState = (area, newValue, areaStatusValue) => {
        let form = {...this.state.form};
        let areaStatus = {...this.state.areaStatus};
        form[area] = newValue;
        areaStatus[areaStatusValue] = 'EMPTY';
        this.setState({ form, areaStatus });
    }

    validateArea = (areaValue, currentAreaStatus) => {
        let areaStatus = {...this.state.areaStatus};
        if (areaValue) {            
            areaStatus[currentAreaStatus] = 'COMPLETED';
        }
        else if (!areaValue) {
            areaStatus[currentAreaStatus] = 'NOT_FILLED';
        }
        this.setState( { areaStatus } );
    }

    validateTelArea = () => {
        const tel = document.getElementById('tel').value;
        let areaStatus = {...this.state.areaStatus};
        if (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(tel)) {            
            areaStatus.telAreaStatus = 'COMPLETED';
        }
        else if (tel.length === 0) {
            areaStatus.telAreaStatus = 'NOT_FILLED';
        }
        else {
            areaStatus.telAreaStatus = 'INCORRECT'
        }
        this.setState({ areaStatus });
    }

    checkAllFields = (name, text, tel) => {
        const areaStatus = {...this.state.areaStatus};

        if (!name) {
            areaStatus.nameAreaStatus = 'NOT_FILLED';
        }
        if (!text) {
            areaStatus.textAreaStatus = 'NOT_FILLED'
        } 
        if ( !tel ) {
            areaStatus.telAreaStatus = 'NOT_FILLED'
        }

        this.setState({ areaStatus });
    }

    setStateToDefault = () => {

        const { name, text, tel } = this.state.form;
        if (name && text && tel ) {

            document.getElementById('announcement-name').value = '';
            document.getElementById('announcement-text').value = '';
            document.getElementById('tel').value = '';
            document.getElementById('city-select').value = '';
            
            const form = {
                name: '', 
                text: '', 
                tel: '', 
                city: ''
            }
            const areaStatus = {
                nameAreaStatus: 'EMPTY', 
                textAreaStatus: 'EMPTY', 
                telAreaStatus: 'EMPTY', 
                cityAreaStatus: 'EMPTY'
            };

            
            this.setState( { form, areaStatus } );
            
        }
    }

    modTelArea = (ev) => {
        let tel = document.getElementById('tel').value;
        
        if (tel.length === 6 && ev.which!==8) {
            tel = tel.concat(')');
            document.getElementById('tel').value = tel;
        }
        else if (tel.length === 10 && ev.which!==8) {
            tel = tel.concat('-');
            document.getElementById('tel').value = tel;
        }
        else if (tel.length === 13 && ev.which!==8) {
            tel = tel.concat('-');
            document.getElementById('tel').value = tel;
        }
        else if (tel.length === 16 && ev.which!==8) {
            ev.preventDefault()
        }
        else if (tel.length === 3 && ev.which === 8) {
            ev.preventDefault()
        }         
    }
    

  render() {

    const { addAnnouncement } = this.props;

    return (

      <form>
            <h2 id="title">Подать объявление</h2>
            <div className="input-title">Заголовок</div>
            <input 
                maxLength="140" 
                type="text" 
                id="announcement-name" 
                onChange={() => {
                    this.preFillState('name', document.getElementById('announcement-name').value, 'nameAreaStatus')
                }}  
                onBlur={() => {
                    this.validateArea(this.state.form.name, 'nameAreaStatus');                  
                }}
            />
            <SideHint 
                hintStatus={this.state.areaStatus.nameAreaStatus} 
                area={'ANNOUNCEMENT_NAME'}
            />
            <div className="input-title">Текст объявления</div>
            <textarea 
                maxLength="300" 
                name="" 
                id="announcement-text"
                onChange={() => {
                    this.preFillState('text', document.getElementById('announcement-text').value, 'textAreaStatus');
                }}
                onBlur={() => {
                    this.validateArea(this.state.form.text, 'textAreaStatus');                  
                }}
            >
            </textarea>
            <SideHint 
                hintStatus={this.state.areaStatus.textAreaStatus} 
                area={'ANNOUNCEMENT_TEXT'}
            />
            <div className="input-title">Телефон</div>
            <input 
                type="tel" 
                id="tel" 
                placeholder="+7 (___) ___-__-__"
                onFocus={() => {
                    let tel = document.getElementById('tel');
                    if (tel.value === '') {
                        tel.value = '+7('
                    }
                }}
                onKeyDown={(ev) => {
                    this.modTelArea(ev);
                }}
                onBlur={() => {
                    this.validateTelArea()
                }}
                onChange={() => {
                    this.preFillState('tel', document.getElementById('tel').value, 'telAreaStatus')
                }}
            />
            <SideHint 
                hintStatus={this.state.areaStatus.telAreaStatus} 
                area={'TEL'}
            />
            <div className="input-title">Город</div>
            <select 
                id="city-select" 
                type="text"
                onChange={() => {
                    this.preFillState('city', document.getElementById('city-select').value, 'cityAreaStatus');
                }}
            >
                <option className="city-option"></option>
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
            </select>
            <br />
            <button
                id="attach-photo-btn"
                onClick={ev => {
                    ev.preventDefault()
                    alert('Не реализовано:(') 
                }}
                >
                    <div id="attach-photo-btn-text">Прикрепить фото</div>
                </button>
                <br />
            <button 
                id="send-btn"
                onClick={ev => {
                    ev.preventDefault()                    
                    
                    const { name, text, tel, city } = this.state.form; 
                    this.checkAllFields(name, text, tel);
                                    
                    addAnnouncement(name, text, tel, city);
                    this.setStateToDefault();
                }}
            >
                <div id="send-btn-text">Подать</div>
            </button>
        </form>

    )

  }

}