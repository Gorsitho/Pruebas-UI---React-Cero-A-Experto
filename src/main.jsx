

import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp'
import './styles.css'; // Global Styles 


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <CounterApp/>
    </React.StrictMode>
);