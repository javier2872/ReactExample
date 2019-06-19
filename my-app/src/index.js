import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//ponemos asi las imagenes para poder cargarlas
import aguacate from './assets/images/3069191_0.jpg'; 

ReactDOM.render(
    <div>
        <Card id='0' name='aguacate' routeImage={aguacate}/> 
        <Card id='0' name='aguacate' routeImage={aguacate}/>      
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
