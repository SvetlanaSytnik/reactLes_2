import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'

import Title from './components/Title';
import NewsList from './components/NewsList';

class App extends Component {
	render() {
		return (
			<div className="news">
				<Title />
				<NewsList />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);