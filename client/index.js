import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './main-component';
import store from './store';
import {Provider} from 'react-redux';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Provider store={store}>
		<MainComponent />
	</Provider>, document.getElementById('app'))
);
