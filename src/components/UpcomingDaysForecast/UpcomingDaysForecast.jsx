import React from 'react';
import PropTypes from 'prop-types';
import styles from './UpcomingDaysForecast.module.css';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({days}) => (<ul className={`${styles.weekList} d-flex justify-content-between p-0 mx-auto`}>
    {days.map(day => (
            <UpcomingDaysForecastItem {...day} key={day.weekday} />
        ))}
</ul>);

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;