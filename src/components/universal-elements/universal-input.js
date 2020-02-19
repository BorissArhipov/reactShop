import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, label, error, ...attrs }) => {

    return (
        <div>
            {label &&
                <label htmlFor={id}>{label}</label>
            }
            <input 
                {...attrs}
            />
            {error &&
                <span>{error}</span>
            }
        </div>
        
    );
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string
}

export default Input;
    
