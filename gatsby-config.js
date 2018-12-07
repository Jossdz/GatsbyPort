module.exports = {
	siteMetadata: {
		title: 'JossDz',
		events: [
			{
				title: 'Computer systems engineer',
				place: 'TESI',
				description: 'I started studying engineering degree in computer systems.',
				year: '2013 - 2018',
			},
			{
				title: 'First Meetup',
				place: 'CDMX',
				description:
					'I attended my first meetup with the google community GDG IPN.',
				year: '2014',
			},
			{
				title: 'Black Belt Front-ent',
				place: 'Dev.f',
				description: `I completed the advanced front-end web development course, where I learned google web development and google's sprint design.`,
				year: '2017',
			},
			{
				title: 'English for the global citizen',
				place: 'UBC',
				description:
					'I studied English at UBC in BC, Canada for a couple of months.',
				year: '2017',
			},
			{
				title: 'Aprende Ti',
				place: 'CDMX',
				description:
					`I taught my first class about 'react' as a professional developer.`,
				year: '2017',
			},
			{
				title: 'Teacher Assistant',
				place: 'Ironhack Mex',
				description:
					'I work at Ironhack as TA, taking charge of the technical admissions process and mentoring the students through their learning to become a fullstack devs.',
				year: '2017 - currently',
			},
		]
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'JossDz Portfolio',
				short_name: 'JossDz',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/Logo.png',
			},
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		`gatsby-transformer-remark`,
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-offline'
	],
}
