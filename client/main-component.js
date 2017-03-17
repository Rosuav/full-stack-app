import React from 'react';
import {connect} from 'react-redux';
import NewPaula from './new-paula';

class MainComponent extends React.Component {
	render() {
		return <div>
			<h1>React/Redux demo</h1>
			<p>This is where your content goes. Paula is {this.props.paula}.</p>
			<NewPaula />
		</div>;
	}
}

export default connect(
	//Select your state -> props mappings here
	({paula}) => ({paula})
)(MainComponent);
