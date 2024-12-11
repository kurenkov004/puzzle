import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Board from './components/Board';
import {observe} from './components/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
observe((knightPosition) => root.render(

    <Board knightPosition={knightPosition} />

));



