import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyContextProvider from './Context/MyContextProvider';

ReactDOM.render(
<MyContextProvider>
    <App/>
</MyContextProvider>
,document.getElementById("root"));

