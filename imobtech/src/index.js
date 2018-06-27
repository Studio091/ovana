import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Search from './pages/search';
import Result from './pages/result';
import Register from './pages/register';
import Product from './pages/product';
import Login from './pages/login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
	 <BrowserRouter>
	<div>
			<Route path="/" exact={true} component={Search} />
			<Route path="/busca" component={Result} />
			<Route path="/mostrar/produto/1" component={Product} />
			<Route path="/cadastro" component={Register} />
			<Route path="/login" component={Login} />
			
	</div>
    </BrowserRouter>
				, document.getElementById('root'));
registerServiceWorker();
