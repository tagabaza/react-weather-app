import React, { Fragment } from 'react';

import styles from './Page.module.css';

import Header from '../Header';
import Form from '../Form/Form';
import Error from '../Error';
import Loader from '../Loader/Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';
const Page = () => {
    const {isError, isLoading, forecast, submitRequest} = useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    }
    return ( 
        <Fragment>
            <Header />
            <div className={`${styles.box} position-relative`}>
                {!isLoading && <Form submitSearch={onSubmit} />} 
                {isError && <Error message={isError}/>}
                {isLoading && <Loader />}
            </div>
                {forecast && <Forecast />}

            
        </Fragment>
     );
}
 
export default Page;