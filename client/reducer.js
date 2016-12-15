//import * as actions from './actions';

const initial_state = {
	spam: 'ham',
	paula: 'brillant [sic]',
};

export default function reducer(state=initial_state, action={}) {
	switch (action.type) {
		case 'SPAMIFY_SPAM':
			return {...state, spam: 'spam'};
		case 'HAMIFY_SPAM':
			return {...state, spam: 'ham'};
		case 'REPLACE_PAULA':
			return {...state, paula: action.paula};
		default: break;
	}
	return state;
}
