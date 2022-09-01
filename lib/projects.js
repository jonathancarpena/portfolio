
// 1. Garments
// 2. Pokemon Guesser
// 3. Jolina Lashes
// 4. Meal Prep
// 5. Reddit Analyzer
// 6. MyFoodSpace


const Projects = [
    // Personal Site
    {
        id: 1,
        complete: true,
        title: 'Personal Site',
        overview: 'First iteration of my personal website built with Next.js',
        tools: ['nextjs', 'tailwindcss', 'netlify'],
        github: 'https://github.com/jonathancarpena/personal-site-v1',
        externalLink: 'https://jonathancarpena.me/',
        demo: null,
        preview: '/projects/personal-site-v1/screenshots/preview.PNG',
        "preview-dark": '/projects/personal-site-v1/screenshots/preview-dark.PNG',
        screenshots: [
            '/projects/personal-site-v1/screenshots/landing-dark.PNG',
            '/projects/personal-site-v1/screenshots/landing.PNG',
            '/projects/personal-site-v1/screenshots/about-dark.PNG',
            '/projects/personal-site-v1/screenshots/about.PNG',
            '/projects/personal-site-v1/screenshots/work-dark.PNG',
            '/projects/personal-site-v1/screenshots/work.PNG',
            '/projects/personal-site-v1/screenshots/mobile-landing-dark.PNG',
            '/projects/personal-site-v1/screenshots/mobile-about-dark.PNG',
            '/projects/personal-site-v1/screenshots/mobile-menu.PNG',
        ],
        purpose: [
            "To showcase my skillset and my latest work whilst having an aesthetic user interface.",
        ],
        features: [
            "Dark Mode Theme",
            "Animated Components",
            "Netlify Forms"
        ],
        focus: [
            'Make the website one page',
            "Work with animation using Framer Motion",
            "Express my personality through design."
        ],
        reflection: [
            "Attempting to make the contact form work on the single page did not work because Netlify could not recognize where the form was located in the DOM. Unfortunately, I was not able to get all the content on a single page"
        ]
    },

    // Nathan's Meal Prep
    {
        id: 2,
        complete: true,
        title: "Nathan's Meal Prep",
        overview: "A client's web application that displays their meal prep business.",
        tools: [
            'react', 'redux', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'firebase'
        ],
        github: 'https://github.com/jonathancarpena/nathans-meal-prep',
        externalLink: 'https://nathansmealprep.netlify.app/',
        demo: null,
        preview: '/projects/nathans-mealprep/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/nathans-mealprep/screenshots/landing.PNG',
            '/projects/nathans-mealprep/screenshots/meals.PNG',
            '/projects/nathans-mealprep/screenshots/single-meal.PNG',
            '/projects/nathans-mealprep/screenshots/admin-meals.PNG',
            '/projects/nathans-mealprep/screenshots/admin-orders.PNG',
            '/projects/nathans-mealprep/screenshots/mobile-landing.PNG',
            '/projects/nathans-mealprep/screenshots/mobile-meals.PNG',
            '/projects/nathans-mealprep/screenshots/mobile-single-meal.PNG',
        ],
        purpose: [
            "To provide the client an application that'll allow them to display their products as well as provide them a system that allows them to freely create, modify, and delete meals without having to build a completely new website.",
        ],
        features: [
            "Content Management System for Admin",
            "Custom Ordering System",
            "Responsive Web Design"
        ],
        focus: [
            'Create a content managing system that is explicit and easy to use.',
            "Implement a global state that tracks the user's 'Bag' state.",
            "Complete the project within the timeframe the client asked for."
        ],
        reflection: [
            "Working on this project not only allowed me to exercise my backend skills, but I was also able to work with time constraints. Knowing that there was a deadline, helped with figuring out a task list.",
            "If I were to make this project better, I would implement a dark mode theme, experiment with using MongoDB and GridFS to potentially replace Firebase, incorporate animation throughout the application, and more personality to the design itself."
        ]
    },

    // Jolina Lashes
    {
        id: 3,
        complete: true,
        title: 'Jolina Lashes',
        overview: "A client's web application that showcases their lash artist business.",
        tools: [
            'react', 'redux', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'firebase'
        ],
        github: 'https://github.com/jonathancarpena/jolina-lashes',
        externalLink: 'https://jolinalashes.netlify.app/',
        demo: null,
        preview: '/projects/jolina-lashes/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/jolina-lashes/screenshots/landing.PNG',
            '/projects/jolina-lashes/screenshots/services.PNG',
            '/projects/jolina-lashes/screenshots/single-service.PNG',
            '/projects/jolina-lashes/screenshots/booking-page.PNG',
            '/projects/jolina-lashes/screenshots/bookings.PNG',
            '/projects/jolina-lashes/screenshots/availability.PNG',
            '/projects/jolina-lashes/screenshots/mobile-landing.PNG',
            '/projects/jolina-lashes/screenshots/mobile-services.PNG',
            '/projects/jolina-lashes/screenshots/mobile-single-service.PNG',
            '/projects/jolina-lashes/screenshots/mobile-booking-page.PNG',
        ],
        purpose: [
            "To create a web application that implements a booking system, a content management system, and a user-interface that reflects the personality of the client/brand.",
        ],
        features: [
            "Content Management System for Admin",
            "Booking System",
            "Responsive Web Design"
        ],
        focus: [
            'Create a booking system that incorporates both date and time.',
            "Create a content management system that is easy to use.",
            "Complete the project within the timeframe the client asked for."
        ],
        reflection: [
            "After working on the Meal Prep website prior to this one, I felt more confident in building the website for this client. One challenge I stumbled upon was the booking system because I had to keep in mind that bookings require not only a date, but the time as well. Another challenge I faced when making this project was the freedom of designing this website. Typically, I enjoy designing on my own accord, but when considering an overarching theme.",
            "If I were to make this project better, I would experiment with using MongoDB and GridFS to potentially replace Firebase, incorporate a package like Framer Motion to incorporate animation throughout the application, and more personality to the design itself."
        ]
    },

    // Pokemon Guesser
    {
        id: 4,
        complete: true,
        title: 'Pokemon Guesser',
        overview: "A web app guessing game that uses various Pokemon's silhouette and/or cry.",
        tools: [
            'react', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku'
        ],
        github: 'https://github.com/jonathancarpena/pokemon-guesser',
        externalLink: 'https://astounding-arithmetic-f09168.netlify.app/',
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
        preview: '/projects/pokemon-guesser/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/pokemon-guesser/screenshots/landing.PNG',
            '/projects/pokemon-guesser/screenshots/loading.PNG',
            '/projects/pokemon-guesser/screenshots/difficulty.PNG',
            '/projects/pokemon-guesser/screenshots/game.PNG',
            '/projects/pokemon-guesser/screenshots/ranking.PNG'
        ],
        purpose: [
            "To build upon a previous project that was created for a hackathon",
        ],

        features: [
            "5 Game difficulty options.",
            "Features Pokemon Generations 1-8.",
            "High Score Table for each Pokemon generation and different levels.",
            "Desktop Only."
        ],
        focus: [
            'Create a content managing system that is explicit and easy to use.',
            "Implement a global state that tracks the user's 'Bag' state.",
            "Complete the project within the timeframe the client asked for."
        ],
        reflection: [
            "Working on this project not only allowed me to exercise my backend skills, but I was also able to work with time constraints. Knowing that there was a deadline, helped with figuring out a task list.",
            "If I were to make this project better, I would implement a dark mode theme, experiment with using MongoDB and GridFS to potentially replace Firebase, incorporate animation throughout the application, and more personality to the design itself."
        ]
    },


    // Reddit Analyzer
    {
        id: 5,
        complete: true,
        title: 'Reddit Analyzer',
        overview: "A web app for visualizing data of a Reddit User and a Subreddit.",
        tools: [
            'react', 'tailwindcss', 'netlify',
        ],
        github: 'https://github.com/jonathancarpena/reddit-analyzer',
        externalLink: 'https://reddit-analyzer.netlify.app/',
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
        preview: '/projects/reddit-analyzer/screenshots/preview.PNG',
        "preview-dark": '/projects/reddit-analyzer/screenshots/preview-dark.PNG',
        screenshots: [
            '/projects/reddit-analyzer/screenshots/user-light.PNG',
            '/projects/reddit-analyzer/screenshots/user-dark.PNG',
            '/projects/reddit-analyzer/screenshots/charts-light.PNG',
            '/projects/reddit-analyzer/screenshots/charts-dark.PNG',
            '/projects/reddit-analyzer/screenshots/subreddit-light.PNG',
            '/projects/reddit-analyzer/screenshots/subreddit-dark.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-user-light.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-user-dark.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-subreddit-light.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-subreddit-dark.PNG',

        ],
        purpose: [
            "To create a tool that helps Reddit users visualize their past activity on the platform.",
            "To identify the best optimal time of the week to post on a Subreddit based on it's history."
        ],
        features: [
            "Reddit user data visualization",
            "Analysis of Subreddit activity over time",
            "Generate optimal subreddit posting time",
            "Responsive Web Design",
            "Dark Mode Theme",
        ],
        focus: [
            'Learn how to collect and manipulate data from a 3rd party API.',
            "Process the data and visualize it with a simple user interface.",
            "Analyze subreddit past activity and generate the best time to submit a post."
        ],
        reflection: [
            "I learned how to fetch from a 3rd party API and evaluate the given JSON data.",
            "Due to the 1000 calls limitation, I recognized that identifying the most optimal time of a Subreddit post based on activity could deem faulty because in the case that a Subreddit has over 1000 posts in a day at a specific time, the application would suggest to post at that time only. Therefore, this application would be more optimal on a Subreddit that has below a 1000 posts a week."
        ]
    },

    // Food Space
    {
        id: 6,
        complete: true,
        title: 'FoodSpace',
        overview: 'A MERN Stack CRUD app that manages food within your household.',
        tools: [
            'react', 'redux', 'tailwindcss',
            'mongodb', 'express', 'nodejs',
        ],
        github: 'https://github.com/jonathancarpena/foodspace',
        externalLink: null,
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
        preview: '/projects/foodspace/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/foodspace/screenshots/mobile-landing.PNG',
            '/projects/foodspace/screenshots/mobile-foodspace.PNG',
            '/projects/foodspace/screenshots/mobile-user-dashboard.PNG',
        ],
        purpose: [
            "Tracking the expiration dates of each item in your household can be very difficult to remember.",
            "Understanding when food is about to expire, will prevent us from wasting money on groceries."
        ],
        features: [
            "User Authentication",
            "Mobile design",
            "Create, read, modify and delete areas, items, and users within a FoodSpace",

        ],
        focus: [
            'Learn how to connect a database, create a server, and authenticate users.',
            "To build an application that tracks and alerts you when food is expired.",
            "Allow multiple users to access and modify a single FoodSpace.",
            "Have the application be used on a mobile device with a simple user interface."
        ],
        reflection: [
            "I learned how to build and interact with a REST API using Express and Node.",
            "I learned how to store, read, update, and delete data from the MongoDB database",
            "The most challenging aspect of this project was adapting to the structure of the backend. Learning to structure the code with models, controllers, and routes was a new concept for me, so as a result it took me around 2-3 weeks to grasp the idea. Fortunately after going through the tutorial and further studying the backend functions, I was able to develop application I have now.",
            "If I were to continue this project, I would style the project to be responsive for the web, fix the CSS minimizer bug when running build script, expand the product database so this application would not be heavily dependent on users to create the data and experiment with using a relational database such as mysql."
        ]
    },

]

export default Projects