export const getDate = () => new Date()
	.toISOString()
	.replace(/T|(....Z)/gmi, ' ')