export const spamify_spam = () => ({
	type: 'SPAMIFY_SPAM',
})

export const hamify_spam = () => ({
	type: 'HAMIFY_SPAM',
})

export const replace_paula = (new_paula) => ({
	type: 'REPLACE_PAULA',
	paula: new_paula,
})

//"Second-half" actions don't have to be exported (they're only called from
//here). It doesn't hurt to export them, though, if you prefer consistency.
const fetch_hello_success = message => ({
	type: 'FETCH_HELLO_SUCCESS',
	message
})

//A single generic failure message can be used for all network failures,
//unless you specifically need to do something when a particular one fails.
const report_failure = (what, error) => ({
	type: 'REPORT_FAILURE',
	what, error
})

export const fetch_hello = () => dispatch => {
	return fetch("/hello").then(response => {
		if (!response.ok) throw(new Error(response.statusText));
		return response.json();
	}).then(data =>
		dispatch(fetch_hello_success(data.message))
	).catch(error =>
		dispatch(report_failure("fetch_hello", error))
	);
}
