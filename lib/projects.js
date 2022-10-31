const Projects = [
    {
        id: 0,
        name: "Nathan's Meal Prep",
        description: "A meal prep business web application developed for client to boost their branding. This web application features responsive design, a rich interactive ordering system, and admin-only portal that manages website's content",
        brief: "Meal prep business web application developed for a client.",
        tools: [
            'react', 'redux', 'tailwindCSS',
            'mongoDB', 'express', 'node.js'
        ],
        github: 'https://github.com/jonathancarpena/nathans-meal-prep',
        link: 'https://nathansmealprep.com/',
        preview: '/project-images/0.PNG',
        featured: true,
        demo: false
    },
    {
        id: 1,
        name: "Jolina's Lash Artist Services",
        description: "A lash artist services web application developed for a client to reach user's online. This web application features an interactive customer-booking system, responsive design, and a backend that allows client to modify their services.",
        brief: "A lash artist services web application developed for a client.",
        tools: [
            'react', 'redux', 'tailwindCSS',
            'mongoDB', 'express', 'node.js'
        ],
        github: 'https://github.com/jonathancarpena/jolina-lashes',
        link: 'https://jolinalashes.com/',
        preview: '/project-images/1.PNG',
        featured: true,
        demo: false
    },
    {
        id: 2,
        name: "Reddit Analyzer",
        description: "A data visualizing tool that utilizes the Reddit API. The application features unit-testing, reuseable components, and an algorithm that analyzes Reddit user's comments/posts activity which are displayed charts. Additionally, the application also identifies a Subreddit's most optimal time of the week to post.",
        brief: "Data visualizing tool analyzes Reddit user data and Subreddit traffic.",
        tools: [
            'nextjs', 'jest', 'tailwindCSS', 'netlify',
        ],
        github: 'https://github.com/jonathancarpena/reddit-analyzer',
        link: 'https://reddit-analyzer.netlify.app/',
        preview: '/project-images/2.PNG',
        featured: true,
        demo: {
            link: 'https://youtu.be/cV1_Eb4g4pw',
            timeStamps: [
                {
                    start: '0:00',
                    end: '0:08',
                    title: 'Landing Page, Dark Mode Toggle'
                },
                {
                    start: '0:09',
                    end: '2:06',
                    title: 'Username Analysis'
                },
                {
                    start: '2:07',
                    end: '2:56',
                    title: 'Dark Mode: Username Analysis'
                },
                {
                    start: '2:57',
                    end: '3:46',
                    title: 'Mobile Responsive - Tablet'
                },
                {
                    start: '3:47',
                    end: '4:38',
                    title: 'Mobile Responsive - Phone'
                },
                {
                    start: '4:39',
                    end: '5:18',
                    title: 'Subreddit Analysis'
                },
                {
                    start: '5:19',
                    end: '5:33',
                    title: 'Dark Mode: Subreddit Analysis'
                },
                {
                    start: '5:34',
                    end: '5:51',
                    title: 'Mobile Responsive - Tablet'
                },
                {
                    start: '5:52',
                    end: '6:01',
                    title: 'Mobile Responsive - Phone'
                },
            ]

        },
    },
    {
        id: 3,
        name: "React/Typescript Masonry",
        description: "A responsve photo masonry built using React + Typescript. Project uses Contentful as a headless CMS to retrieve the photos and their captions.",
        brief: "A responsve photo masonry built using React + Typescript. ",
        tools: ["React", "Typescript", "Contentful"],
        github: 'https://github.com/jonathancarpena/react-typescript-masonry',
        link: '',
        preview: '/project-images/3.PNG',
        featured: false,
        demo: false
    },
    {
        id: 4,
        name: "Pokemon Guesser",
        description: "A client's web application that displays their meal prep business. The goal was to provide the client an application that'll allow them to display their meals as well as provide them a system that allows them to freely create, modify, and delete content (E.g. meals, orders, & availability)",
        brief: "Guessing game that is based on pokemon silhouettes/cries.",
        tools: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        github: 'https://github.com/jonathancarpena/pokemon-guesser',
        link: 'https://pokemon-guesser-game.netlify.app/',
        preview: '/project-images/4.PNG',
        featured: false,
        demo: {
            link: 'https://youtu.be/8iLuK4VtANo',
            timeStamps: [
                {
                    start: '0:00',
                    end: '0:32',
                    title: 'Landing Screen'
                },
                {
                    start: '0:33',
                    end: '0:54',
                    title: 'Loading Screen'
                },
                {
                    start: '0:55',
                    end: '1:07',
                    title: 'Choose Difficulty'
                },
                {
                    start: '1:08',
                    end: '2:02',
                    title: 'Instructions, Gameplay'
                },
                {
                    start: '2:03',
                    end: '2:31',
                    title: 'Complete, New High Score'
                },
                {
                    start: '2:32',
                    end: '2:52',
                    title: 'Ranking'
                },
                {
                    start: '2:53',
                    end: '3:12',
                    title: 'Give Up'
                },

            ]

        },
    },
    {
        id: 5,
        name: "Portfolio V2",
        description: 'The second iteration of my personal website. The website is built with Next.js, styled with TailwindCSS, and hosted through Netlify.',
        brief: "The second iteration of my personal website.",
        tools: ['nextjs', 'tailwindCSS', 'netlify'],
        github: 'https://github.com/jonathancarpena/portfolio',
        link: 'https://jonathancarpena.me/',
        preview: '/project-images/5.PNG',
        featured: false,
        demo: false
    },
    {
        id: 6,
        name: "Portfolio V1",
        description: 'The first iteration of my personal website. The website is built with Next.js, styled with TailwindCSS, animated with Framer Motion, and hosted through Netlify.',
        brief: "The first iteration of my personal website.",
        tools: ['nextjs', 'tailwindCSS', 'netlify', 'framer'],
        github: 'https://github.com/jonathancarpena/jonathancarpena-v1',
        link: 'https://jonathancarpena-v1.netlify.app/',
        preview: '/project-images/6.PNG',
        featured: false,
        demo: false
    },
    {
        id: 7,
        name: "FoodSpace",
        description: 'A web app that tracks, manages, and organizes the food in your household the goal of the project was to solve the problem of having to remember if items are the in your house or if they have expired. By using this app, it will not only notify if you have a certain product in your house, but also let you know when something has expired.',
        brief: "Household system that manages inventory and waste.",
        tools: [
            'react', 'redux', 'tailwindCSS',
            'mongodb', 'express', 'node.js',
        ],
        github: 'https://github.com/jonathancarpena/foodspace',
        link: null,
        preview: '/project-images/7.PNG',
        featured: false,
        demo: {
            link: 'https://youtu.be/4HDr8Y_a3h4',
            timeStamps: [
                {
                    start: '0:00',
                    end: '0:53',
                    title: 'Landing Page'
                },
                {
                    start: '0:54',
                    end: '1:50',
                    title: 'Sign Up'
                },
                {
                    start: '1:51',
                    end: '2:44',
                    title: 'Create FoodSpace'
                },
                {
                    start: '2:45',
                    end: '4:50',
                    title: 'Adding Items to FoodSpace'
                },
                {
                    start: '4:51',
                    end: '6:08',
                    title: 'Invite User, Adding an Owner for an Item'
                },
                {
                    start: '6:09',
                    end: '7:04',
                    title: 'Expired Item, Deleting Item'
                },
                {
                    start: '7:05',
                    end: '8:24',
                    title: 'Product Search, Create Product'
                },
                {
                    start: '8:25',
                    end: '8:59',
                    title: 'Updating Product the User Created'
                },
            ]
        },
    },
]

export default Projects