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
