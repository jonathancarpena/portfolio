
// 1. Garments
// 2. Pokemon Guesser
// 3. Jolina Lashes
// 4. Meal Prep
// 5. Reddit Analyzer
// 6. MyFoodSpace


const Projects = [
    // Interact Events
    // {
    //     id: 1,
    //     time: {
    //         start: 'July 23, 2022',
    //         end: false,
    //         length: null
    //     },
    //     title: 'Interactive Events',
    //     overview: 'A web app for visualizing personalized Spotify data.',
    //     description: '',
    //     tools: ['mongodb', 'express', 'react', 'nodejs', 'tailwindcss'],
    //     github: 'https://github.com/jonathancarpena/interact-events',
    //     externalLink: null,
    //     preview: '',
    //     screenshots: ['/projects/meal-prep/landing.PNG', '/projects/meal-prep/mobile-landing.PNG', '', ''],
    //     purpose: [
    //         "To provide the client an application that'll allow them to display their products as well as provide them a system that allows them to freely create, modify, and delete meals without having to build a completely new website.h",
    //     ],
    //     focus: [
    //         'Create a content managing system that is explicit and easy to use.',
    //         "Implement a global state that tracks the user's 'Bag' state.",
    //         "Complete the project within the timeframe the client asked for."
    //     ],
    //     reflection: [
    //         "Working on this project not only allowed me to exercise my backend skills, but I was also able to work with time constraints. Knowing that there was a deadline, helped with figuring out a task list.",
    //         "If I were to make this project better, I would implement a dark mode theme, experiment with using MongoDB and GridFS to potentially replace Firebase, incorporate animation throughout the application, and more personality to the design itself."
    //     ]
    // },

    // Personal Site
    {
        id: 1,
        complete: true,
        title: 'Personal Site',
        overview: 'First iteration of my personal website built with Next.js',
        tools: ['nextjs', 'tailwindcss', 'netlify'],
        github: 'https://github.com/jonathancarpena/portfolio',
        externalLink: 'https://jonathancarpena.netlify.app/',
        preview: '',
        screenshots: ['/projects/meal-prep/landing.PNG', '/projects/meal-prep/mobile-landing.PNG', '', ''],
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

    // Pokemon Guesser
    {
        id: 2,
        complete: true,
        title: 'Pokemon Guesser',
        overview: "A web app guessing game that uses various Pokemon's silhouette and/or cry.",
        tools: [
            'react', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku'
        ],
        github: 'https://github.com/jonathancarpena/pokemon-guesser',
        externalLink: 'https://astounding-arithmetic-f09168.netlify.app/',
        preview: '/projects/pokemon-guesser/preview.PNG',
        screenshots: [
            '/projects/pokemon-guesser/landing.PNG',
            '/projects/pokemon-guesser/loading.PNG',
            '/projects/pokemon-guesser/difficulty.PNG',
            '/projects/pokemon-guesser/game.PNG',
            '/projects/pokemon-guesser/ranking.PNG'
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

    // Nathan's Meal Prep
    {
        id: 3,
        complete: true,
        title: "Nathan's Meal Prep",
        overview: "A client's web application that displays their meal prep business.",
        tools: [
            'react', 'redux', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'firebase'
        ],
        github: 'https://github.com/jonathancarpena/nathans-meal-prep',
        externalLink: 'https://nathansmealprep.netlify.app/',
        preview: '/projects/nathans-mealprep/preview.PNG',
        screenshots: [
            '/projects/nathans-mealprep/landing.PNG',
            '/projects/nathans-mealprep/meals.PNG',
            '/projects/nathans-mealprep/single-meal.PNG',
            '/projects/nathans-mealprep/admin-meals.PNG',
            '/projects/nathans-mealprep/admin-orders.PNG',
            '/projects/nathans-mealprep/mobile-landing.PNG',
            '/projects/nathans-mealprep/mobile-meals.PNG',
            '/projects/nathans-mealprep/mobile-single-meal.PNG',
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
        id: 4,
        complete: true,
        title: 'Jolina Lashes',
        overview: "A client's web application that showcases their lash artist business.",
        tools: [
            'react', 'redux', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'firebase'
        ],
        github: 'https://github.com/jonathancarpena/jolina-lashes',
        externalLink: 'https://jolina-lashes.netlify.app/',
        preview: '/projects/jolina-lashes/preview.PNG',
        screenshots: [
            '/projects/jolina-lashes/landing.PNG',
            '/projects/jolina-lashes/services.PNG',
            '/projects/jolina-lashes/single-service.PNG',
            '/projects/jolina-lashes/booking-page.PNG',
            '/projects/jolina-lashes/bookings.PNG',
            '/projects/jolina-lashes/availability.PNG',
            '/projects/jolina-lashes/mobile-landing.PNG',
            '/projects/jolina-lashes/mobile-services.PNG',
            '/projects/jolina-lashes/mobile-single-service.PNG',
            '/projects/jolina-lashes/mobile-booking-page.PNG',
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
        preview: '/projects/reddit-analyzer/preview.PNG',
        screenshots: [
            '/projects/reddit-analyzer/user-light.PNG',
            '/projects/reddit-analyzer/user-dark.PNG',
            '/projects/reddit-analyzer/charts-light.PNG',
            '/projects/reddit-analyzer/charts-dark.PNG',
            '/projects/reddit-analyzer/subreddit-light.PNG',
            '/projects/reddit-analyzer/subreddit-dark.PNG',
            '/projects/reddit-analyzer/mobile-user-light.PNG',
            '/projects/reddit-analyzer/mobile-user-dark.PNG',
            '/projects/reddit-analyzer/mobile-subreddit-light.PNG',
            '/projects/reddit-analyzer/mobile-subreddit-dark.PNG',

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
        preview: '/projects/foodspace/preview.PNG',
        screenshots: [
            '/projects/foodspace/mobile-landing.PNG',
            '/projects/foodspace/mobile-foodspace.PNG',
            '/projects/foodspace/mobile-user-dashboard.PNG',
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