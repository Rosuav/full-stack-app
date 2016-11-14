import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

export default connect((state, props) => ({
	//Select any state -> props mappings here
}))(React.createClass({
	//And build your class here
	update: function(e) {
		e.preventDefault();
		this.props.dispatch(actions.replace_paula(this.refs.paula.value));
	},
	render: function() {
		return <form onSubmit={this.update}>
			<input ref="paula" />
			<input type="submit" value="Replace Paula" />
		</form>;
	}
}))
