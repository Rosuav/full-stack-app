import React from 'react';
import {connect} from 'react-redux';
import NewPaula from './new-paula';

export default connect((state, props) => ({
	//Select your state -> props mappings here
	paula: state.paula,
}))(React.createClass({
	//And build your class here
	render: function() {
		return <div>
			<h1>React/Redux demo</h1>
			<p>This is where your content goes. Paula is {this.props.paula}.</p>
			<NewPaula />
		</div>;
	}
}))
