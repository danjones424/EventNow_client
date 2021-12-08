import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Users from './components/Users';
// import Signup from './components/Signup';
// import NewLogin from './components/NewLogin';
// import Home from './components/Home';

const rootElement = document.getElementById('root');
render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
