import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaJava,
    FaSass,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaBootstrap,

} from 'react-icons/fa'

import {
    SiTypescript,
    SiRedux,
    SiApollographql,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGraphql,
    SiPostman,
    SiVisualstudio,
    SiFramer,
    SiMaterialui,
    SiTailwindcss,
    SiNetlify,
    SiHeroku,
    SiJquery,
    SiPostgresql,
    SiJest,
    SiCypress,
    SiWebpack,
    SiBabel,
    SiAmazonaws,
    SiMocha,
    SiChai,
} from 'react-icons/si'

import {
    GrMysql
}
    from 'react-icons/gr'


const SKILLSET = {
    languages: {
        javascript: {
            link: 'https://www.javascript.com/',
            name: 'JavaScript',
            icon: <FaJs />
        },
        typescript: {
            link: 'https://www.typescriptlang.org/',
            name: 'TypeScript',
            icon: <SiTypescript />
        },
        java: {
            link: 'https://dev.java/',
            name: 'Java',
            icon: <FaJava />
        },

        python: {
            link: 'https://www.python.org/',
            name: 'Python',
            icon: <FaPython />
        },
    },
    'Front End': {
        react: {
            link: 'https://reactjs.org/',
            name: 'React',
            icon: <FaReact />
        },
        redux: {
            link: 'https://redux.js.org/',
            name: 'Redux',
            icon: <SiRedux />
        },
        nextjs: {
            link: 'https://nextjs.org/',
            name: 'Next.js',
            icon: <SiNextdotjs />
        },
        jquery: {
            link: 'https://jquery.com/',
            name: 'jQuery',
            icon: <SiJquery />
        },
        html: {
            link: 'https://html.com/',
            name: 'HTML5',
            icon: <FaHtml5 />
        },
        css: {
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            name: 'CSS3',
            icon: <FaCss3Alt />
        },
        sass: {
            link: 'https://sass-lang.com/',
            name: 'SASS',
            icon: <FaSass />
        },
        apollo: {
            link: 'https://www.apollographql.com/',
            name: 'Apollo',
            icon: <SiApollographql />
        },

    },
    'Back End': {
        nodejs: {
            link: 'https://nodejs.org/en/',
            name: 'Node.js',
            icon: <FaNodeJs />
        },
        express: {
            link: 'https://expressjs.com/',
            name: 'Express',
            icon: <SiExpress />
        },
        mongodb: {
            link: 'https://www.mongodb.com/',
            name: 'MongoDB',
            icon: <SiMongodb />
        },
        mysql: {
            link: 'https://www.mysql.com/',
            name: 'MySQL',
            icon: <GrMysql />
        },
        postgresql: {
            link: 'https://www.postgresql.org/',
            name: 'PostgreSQL',
            icon: <SiPostgresql />
        }
    },
    'Testing/Deploy': {
        jest: {
            link: 'https://jestjs.io/',
            name: 'Jest',
            icon: <SiJest />
        },
        cypress: {
            link: 'https://www.cypress.io/',
            name: 'Cypress',
            icon: <SiCypress />
        },
        cypress: {
            link: 'https://testing-library.com/docs/react-testing-library/intro/',
            name: 'React Test',
            icon: <FaReact />
        },
        netlify: {
            link: 'https://www.netlify.com/',
            name: 'Netlify',
            icon: <SiNetlify />
        },
        heroku: {
            link: 'https://www.heroku.com/',
            name: 'Heroku',
            icon: <SiHeroku />
        },
        mocha: {
            link: '',
            name: 'Mocha',
            icon: <SiMocha />
        },
        chai: {
            link: '',
            name: 'Chai',
            icon: <SiChai />
        },
        postman: {
            link: 'https://www.postman.com/',
            name: 'Postman',
            icon: <SiPostman />
        },
    },
    other: {
        github: {
            link: 'https://github.com/',
            name: 'Github',
            icon: <FaGithub />
        },
        git: {
            link: 'https://git-scm.com/',
            name: 'Git',
            icon: <FaGitAlt />
        },
        firebase: {
            link: 'https://firebase.google.com/',
            name: 'Firebase',
            icon: <SiFirebase />
        },
        aws: {
            link: 'https://aws.amazon.com/',
            name: 'AWS',
            icon: <SiAmazonaws />
        },
        webpack: {
            link: 'https://webpack.js.org/',
            name: 'Webpack',
            icon: <SiWebpack />
        },
        babel: {
            link: 'https://babeljs.io/',
            name: 'Babel',
            icon: <SiBabel />
        },
        vscode: {
            link: 'https://code.visualstudio.com/',
            name: 'VS Code',
            icon: <SiVisualstudio />
        }
    }
    // libraries: {
    //     apollo: {
    //         link: 'https://www.apollographql.com/',
    //         name: 'Apollo',
    //         icon: <SiApollographql />
    //     },
    //     mui: {
    //         link: 'https://mui.com/',
    //         name: 'Material UI',
    //         icon: <SiMaterialui />
    //     },
    //     bootstrap: {
    //         link: 'https://getbootstrap.com/',
    //         name: 'Bootstrap',
    //         icon: <FaBootstrap />
    //     },
    //     tailwindcss: {
    //         link: 'https://tailwindcss.com/',
    //         name: 'Tailwind CSS',
    //         icon: <SiTailwindcss />
    //     },
    //     framer: {
    //         link: 'https://www.framer.com/',
    //         name: 'Framer',
    //         icon: <SiFramer />
    //     },
    // },



}

export const ICONS = {
    mui: {
        link: 'https://mui.com/',
        name: 'Material UI',
        icon: <SiMaterialui />
    },
    bootstrap: {
        link: 'https://getbootstrap.com/',
        name: 'Bootstrap',
        icon: <FaBootstrap />
    },
    tailwindcss: {
        link: 'https://tailwindcss.com/',
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />
    },
    framer: {
        link: 'https://www.framer.com/',
        name: 'Framer',
        icon: <SiFramer />
    },
    react: {
        link: 'https://reactjs.org/',
        name: 'React',
        icon: <FaReact />
    },
    redux: {
        link: 'https://redux.js.org/',
        name: 'Redux',
        icon: <SiRedux />
    },
    nextjs: {
        link: 'https://nextjs.org/',
        name: 'Next.js',
        icon: <SiNextdotjs />
    },
    apollo: {
        link: 'https://www.apollographql.com/',
        name: 'Apollo',
        icon: <SiApollographql />
    },

    sass: {
        link: 'https://sass-lang.com/',
        name: 'SASS',
        icon: <FaSass />
    },
    express: {
        link: 'https://expressjs.com/',
        name: 'Express',
        icon: <SiExpress />
    },
    mongodb: {
        link: 'https://www.mongodb.com/',
        name: 'MongoDB',
        icon: <SiMongodb />
    },
    mysql: {
        link: 'https://www.mysql.com/',
        name: 'MySQL',
        icon: <GrMysql />
    },
    firebase: {
        link: 'https://firebase.google.com/',
        name: 'Firebase',
        icon: <SiFirebase />
    },
    html: {
        link: 'https://html.com/',
        name: 'HTML5',
        icon: <FaHtml5 />
    },
    css: {
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        name: 'CSS3',
        icon: <FaCss3Alt />
    },
    javascript: {
        link: 'https://www.javascript.com/',
        name: 'JavaScript',
        icon: <FaJs />
    },
    netlify: {
        link: 'https://www.netlify.com/',
        name: 'Netlify',
        icon: <SiNetlify />
    },
    heroku: {
        link: 'https://www.heroku.com/',
        name: 'Heroku',
        icon: <SiHeroku />
    },
    typescript: {
        link: 'https://www.typescriptlang.org/',
        name: 'TypeScript',
        icon: <SiTypescript />
    },
    nodejs: {
        link: 'https://nodejs.org/en/',
        name: 'Node.js',
        icon: <FaNodeJs />
    },
    graphql: {
        link: 'https://graphql.org/',
        name: 'GraphQL',
        icon: <SiGraphql />
    },
    java: {
        link: 'https://dev.java/',
        name: 'Java',
        icon: <FaJava />
    },

    python: {
        link: 'https://www.python.org/',
        name: 'Python',
        icon: <FaPython />
    },
}

export default SKILLSET