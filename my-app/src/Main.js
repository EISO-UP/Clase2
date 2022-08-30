import React from 'react';
import { FirstComponent } from './Componenets/FirstComponents';

import './styles.css'
const myVariable = 'this is a var'
export const Main = () => {
    return(
        <FirstComponent 
            title="Mi titulo"
            subtitle="Holi UwU"
        />
    )
};