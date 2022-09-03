import React, {useState} from 'react';
import { AddCounter } from './Componenets/AddCounter';
import { ShowCounter } from './Componenets/ShowCounter';
import { RemoveCounter } from './Componenets/RemoveCounter';

import './styles.css'
const myVariable = 'this is a var'
export const Main = () => {
    const [number, setNumber] = useState(0);
    const onAdd = () => {
        setNumber(number + 1);
        console.log('I added one');
    }
    const onRemove = () => {
        setNumber(number - 1);
        console.log('I remove one');
    }
    return(
        <>
            <ShowCounter number={number}/>
            <AddCounter onAddPress={onAdd}/>
            <RemoveCounter onRemovePress={onRemove}/>
        </>
    )
};