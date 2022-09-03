import React from 'react';
import PropTypes from 'prop-types'

export const AddCounter = ({onAddPress}) => {
    
    return (
        <button onClick={onAddPress}>
            Aumenta el contador
        </button>    
    )
}

AddCounter.propTypes = {
    onAddPress : PropTypes.func.isRequired
}