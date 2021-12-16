import React from 'react';
import PropTypes from 'prop-types';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/';


const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column  pl-3 pt-4 pb-2`}>
            <div>
                <h2 className="currentDayTitle "> 
                    {weekday} 
                </h2>
                <h4 className="font-weight-lighter">
                    {date}
                </h4>
                <h2 className="font-weight-bold mb-1">{location}</h2>
            </div>

            <div>
                <img width="45" src={weatherIcon} />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    weatherDescription: PropTypes.string.isRequired

}

export default CurrentDay;