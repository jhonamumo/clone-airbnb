import React from 'react';
import { Item } from './item';

const nombres = [
    'Juan',
    'Pedro',
    'Mario'
];

export const App = () => {
    return(
        <div>
            <p>Hola mundo react</p>
            <ul>
                {
                    nombres.map( el => <Item label={ el } />)
                }
            </ul>
        </div>
    )
}