module.exports = {
	siteMetadata: {
		title: 'JossDz',
		events: [
			{
				title: 'Ingeniería en sistemas computacionales',
				place: 'TESI',
				description: 'Comenzó mi carrera en la ingeniería en sistemas en el TESI.',
				year: '2013 - 2018',
			},
			{
				title: 'Primer Meetup',
				place: 'Telmex Hub',
				description:
					'Asistí a mi primer meetup con el GDG IPN.',
				year: '2014',
			},
			{
				title: 'Cinta negra Front-ent',
				place: 'Dev.f',
				description: `Cursé el curso de desarrollo web front-end avanzado, donde aprendí a desarrollar aplicaciones en el cliente con Angularjs y desarrollo de producto con Sprint design.`,
				year: '2017',
			},
			{
				title: 'English for the global citizen',
				place: 'UBC',
				description:
					'Estudié inglés por un par de meses en la UBC.',
				year: '2017',
			},
			{
				title: 'Aprende Ti',
				place: 'WTC CDMX',
				description:
					`Impartí mi primer clase como instructor profesional en desarrollo web en el taller de introducción a React.`,
				year: '2017',
			},
			{
				title: 'Teacher Assistant',
				place: 'Ironhack Mex',
				description:
				'Trabajo como Instructor asistente en Ironhack, encargado también del proceso de admisiones técnicas y mentor de los alumnos para convertirse en desarrolladores fullstack.'	
				,
				year: '2017 - Actual',
			},
		],
		talks: [
			{
				id:5,
				place:'BEDU',
				date: new Date(2018,11,23),
				title: 'Intro a Redux',
				abstract: 'Introducción amigable a la principal herramienta de manejo de estados en aplicaciones complejas de React, donde explico su uso sin dicho framewok. Redux es una librería que por si misma, nos enseña muchísimo.',
				slides: 'https://intro-a-redux-bfkjqoawjs.now.sh/#0',
				tags: ['redux', 'js', 'node']
			},
			{
				id: 4,
				place:'BEDU',
				date: new Date(2018, 10, 31),
				title: 'Manejo de Estados en web apps',
				abstract: 'Presentación de las múltiples herramientas, nativas y externas para manejar el estado en aplicaciones de React, sus beneficios y casos de uso.',
				slides: 'https://dist-akaozitoxf.now.sh/#0',
				tags: ['redux', 'js', 'node', 'react']
			},
			{
				id: 3,
				place:'Facebook Dev. Circles: CDMX',
				date: new Date(2018, 10, 11),
				title: 'Apps Netlify, apollo y graphql',
				abstract: 'Graphql es una tecnología nueva y que propone un nuevo esquema, nos invita a cambiar la manera en la que vemos las aplicaciones web y puede llegar a ser complejo entrar a este mundo. Por eso netlify es la manera más accesible para comenzar.',
				slides: 'https://dist-rtpgcxbnmv.now.sh/#0',
				tags: ['graphql', 'js', 'node', 'apollo', 'react']
			},
			{
				id: 2,
				place:'Ironhack Mex',
				date: new Date(2018, 10, 3),
				title: 'Como iniciar en el desarrollo de React',
				abstract: 'Despues de mucho tiempo de haber dado la misma charla durante varios meses, noté que la gente esperaba de react mucho, pero react no es una herramienta mágia. Es una simple librería de Javascript.',
				slides: 'https://dist-ndjnycrydj.now.sh/#0',
				tags: ['js', 'node', 'react']
			},
			{
				id: 1,
				place:'Ironhack Mex',
				date: new Date(2018,3,1),
				title: 'Introducción a React',
				abstract: 'Primera charla introductoria a React, la librería de facebook para construir interfaces de usuario. Reactiva y moderna, la librería puede ser muy util para tu siguiente proyecto.',
				slides: 'https://slides.com/jossdz/ihreact#/',
				tags: ['js', 'node', 'react']
			}
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
        path: `${__dirname}/src/pages/post`,
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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-prismjs`, `gatsby-remark-copy-linked-files`]
			}
		},
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-remark-prismjs`,
			options: {
				// Class prefix for <pre> tags containing syntax highlighting;
				// defaults to 'language-' (eg <pre class="language-js">).
				// If your site loads Prism into the browser at runtime,
				// (eg for use with libraries like react-live),
				// you may use this to prevent Prism from re-processing syntax.
				// This is an uncommon use-case though;
				// If you're unsure, it's best to use the default value.
				classPrefix: "language-",
				// This is used to allow setting a language for inline code
				// (i.e. single backticks) by creating a separator.
				// This separator is a string and will do no white-space
				// stripping.
				// A suggested value for English speakers is the non-ascii
				// character '›'.
				inlineCodeMarker: null,
				// This lets you set up language aliases.  For example,
				// setting this to '{ sh: "bash" }' will let you use
				// the language "sh" which will highlight using the
				// bash highlighter.
				aliases: {},
				// This toggles the display of line numbers globally alongside the code.
				// To use it, add the following line in src/layouts/index.js
				// right after importing the prism color scheme:
				//  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
				// Defaults to false.
				// If you wish to only show line numbers on certain code blocks,
				// leave false and use the {numberLines: true} syntax below
				showLineNumbers: false,
				// If setting this to true, the parser won't handle and highlight inline
				// code used in markdown i.e. single backtick code like `this`.
				noInlineHighlight: false,
			},
		},
		`gatsby-remark-prismjs`
	],
}
