import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, active, disabled, ...attrs }) => {

    const Tag = attrs.href ? 'a' : 'button';

    return (
    <Tag 
        {...attrs}
        onClick={onClick}
        disabled={disabled}
    >
        { children }
    </Tag>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    active: PropTypes.bool
}

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    disabled: false,
    active: false
}

export default Button;
    
