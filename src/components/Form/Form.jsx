import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';


const Form = ({submitSearch}) => {
    const [location, setLocation] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    }
    return ( 
        <form onSubmit={onSubmit}>
            <input 
                aria-label="location"
                type="text"
                placeholder="Search location"
                required
                className={`${styles.input} form control`}
                onChange={(e) => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>SEARCH</button>
        </form>
     );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};
 
export default Form;