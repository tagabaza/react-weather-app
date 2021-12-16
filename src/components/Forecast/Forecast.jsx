import React from 'react';
import PropTypes from 'prop-types';


import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import CurrentDay from '../CurrentDay/CurrentDay';
import UpcomingDaysForecast from '../UpcomingDaysForecast/UpcomingDaysForecast';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';

const Forecast = ({forecast}) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={6}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                    

                </div>
            </Col>
            <Col xs={12} md={6} className="mt-4 d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
            </Col>
            
            
            
        </Row>
        <Row xs={12} className="mt-3">
                <UpcomingDaysForecast days={forecast.upcomingDays} />
        </Row>
            
        
    </Container>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    })
    
}

export default Forecast;