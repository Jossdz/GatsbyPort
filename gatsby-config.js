module.exports = {
	siteMetadata: {
		title: 'JossDz',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-transformer-remark`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-source-medium`,
			options: {
				username: `@jossdz`,
				limit: 200,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'JossDz',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/Logo.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
	],
}
