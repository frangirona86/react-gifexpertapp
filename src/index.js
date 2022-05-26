import React from 'react';
import {createRoot} from "react-dom/client"; // llamada al React DOM para renderizar componentes
import GifExpertAPP from './GifExpertAPP';
import './index.css';



const root = createRoot(document.getElementById('root'));
root.render(
    <GifExpertAPP />
);



// crear component GifExpertAPP
// h2
// hr
