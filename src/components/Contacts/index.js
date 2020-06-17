import React from 'react';

const Contacts = () => {
    return(
        <div className="contacts__block">
            <div className="contacts__info">
               <a href='tel:79276983443' className="title">
                    <span>+7 (927) 698 34 43</span>
                </a>
                <h4 className="news__title">
                    <a href="https://t.me/ketrinkash" target="_blank">
                        Кашлева 
                        <span>
                            Екатерина
                        </span>
                    </a>
                </h4>
                <a href="mailto:kashleva2009@yandex.ru" className="contacts__link">
                    kashleva2009@yandex.ru
                </a>
                <div className="contacts__footer">
                <p>
                    JavaScript разработчик
                </p>
                <p>
                    ES5, ES6, <a href="https://ru.reactjs.org/" target="_blank">React</a>
                </p>
                </div>
            </div>
            <img src="https://sun9-17.userapi.com/c855432/v855432730/146765/0rBTXO8PjEo.jpg" className="contacts__img"/>
        </div>
    )
}

export default Contacts;