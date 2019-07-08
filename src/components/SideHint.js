import React from 'react';
import questionIcon from '../img/quest-icon2.png';
import succesIcon from '../img/succes-icon.png';
import warnIcon from '../img/warn-icon.png';

export default function(props) {

  const { hintStatus, area } = props;
  let hintIcon, hintText;

  const getHintTexts = area => {
    switch (area) {
      case 'ANNOUNCEMENT_NAME':
        return {
          EMPTY : <div className="hint-text">Обязательное поле <br /> Не более 140 символов</div>,
          COMPLETED : <div className="hint-text side-hint-succes">Заполнено</div>,
          NOT_FILLED : <div className="hint-text side-hint-warn">Заполните поле <br /> Не более 140 символов</div>
        }
      case 'ANNOUNCEMENT_TEXT' :
        return {
          EMPTY: <div className="hint-text">Не более 300 символов</div>,
          COMPLETED: <div className="hint-text side-hint-succes">Заполнено</div>,
          NOT_FILLED: <div className="hint-text side-hint-warn">Заполните поле <br /> Не более 300 символов</div>
        }
      case 'TEL' :
        return {
          EMPTY: <div className="hint-text">Обязательное поле</div>,
          COMPLETED: <div className="hint-text side-hint-succes">Заполнено</div>,
          NOT_FILLED: <div className="hint-text side-hint-warn">Заполните поле</div>,
          INCORRECT: <div className="hint-text side-hint-warn">Неверный формат</div>
        }
      case 'CITY' :
        return {
          EMPTY: <div className="hint-text">Обязательное поле</div>,
          COMPLETED: <div className="hint-text side-hint-succes">Заполнено</div>,
          NOT_FILLED: <div className="hint-text side-hint-warn">Заполните поле</div>
        }
      default :
        break
    }
  }

switch (hintStatus) {

  case 'EMPTY':
    hintIcon = <img className="hint-icon" src={questionIcon} alt="?" />;
    hintText = getHintTexts(area)[hintStatus];    
    break
  case 'COMPLETED' :
    hintIcon = <img className="hint-icon" src={succesIcon} alt="?" />;
    hintText = getHintTexts(area)[hintStatus];    
    break
  case 'NOT_FILLED' :
    hintIcon = <img className="hint-icon" src={warnIcon} alt="?" />;
    hintText = getHintTexts(area)[hintStatus];    
    break
    case 'INCORRECT' :
        hintIcon = <img className="hint-icon" src={warnIcon} alt="?" />;
        hintText = getHintTexts(area)[hintStatus];    
        break
  default :
    break
}

  return (
    <div className="side-hint hint-shown">
      { hintIcon }
      { hintText }
    </div>
  )

}