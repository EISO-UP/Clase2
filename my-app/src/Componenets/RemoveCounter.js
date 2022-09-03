import React from 'react';
import PropTypes from 'prop-types'

export const RemoveCounter = ({onRemovePress}) => {
    
    return (
        <button onClick={onRemovePress}>
            Disminuye el contador
        </button>    
    )
}

RemoveCounter.propTypes = {
    onAddPress : PropTypes.func.isRequired
}