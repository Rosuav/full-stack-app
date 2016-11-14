export function spamify_spam() {
	return {
		type: 'SPAMIFY_SPAM',
	};
}

export function hamify_spam() {
	return {
		type: 'HAMIFY_SPAM',
	};
}

export function replace_paula(new_paula) {
	return {
		type: 'REPLACE_PAULA',
		paula: new_paula,
	};
}
