import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from "./containers/App";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/UI/Navigation";

const app = (
    <BrowserRouter>
        <Navigation/>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));