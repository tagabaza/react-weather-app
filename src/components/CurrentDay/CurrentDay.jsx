import React from 'react';
import PropTypes from 'prop-types';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/';


const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        {/* <div className={styles.gradient}></div> */}
        <div className={`${styles.cardInner} d-flex flex-column pt-5 pb-2`}>
            <div className="mb-3">
                <h5 className="currentDayTitle">{weekday} {date}</h5>
                <h2 className="font-weight-bold mb-3 mt-3 text-center">{location} ({temperature}°C)</h2>
            </div>

            <div className="col-xs-12 text-center mt-1">
                <img className="mb-3" width="65" src={weatherIcon} />
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