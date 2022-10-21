import React from 'react'


const SkillCard = ({ text }) => {
    return (
        <li className='bg-white text-sm md:text-base py-3 px-2 md:py-3 drop-shadow-md w-full md:px-5 capitalize border-[1px]'>
            {text}
        </li>
    )
}

const SkillList = ({ heading, skillset = [] }) => {
    return (
        <div>
            <h3 className='text-xl mb-1 md:text-2xl md:mb-4 font-semibold'>{heading}</h3>
            <ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4'>
                {skillset.map((item) => (
                    <SkillCard key={item} text={item} />
                ))}
            </ul>
        </div>

    )
}

function Skills() {

    const skillset = {
        frontEnd: ["react", 'typescript', 'redux', 'next.js', 'jQuery', 'HTML5', "CSS3", "SASS", "Apollo"],
        backEnd: ["Node.js", "express", "mongoDB", "mySQL", "RESTful API"],
        "testing/deployment": ["jest", "React Testing", "Cypress", "AWS", "Firebase", "Heroku", "netlify"],
        tools: ["git", "NPM", 'Webpack', "Babel", "postman", "VS Code"]
    }


    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className=' mb-40 lg:mb-28 relative top-20 md:top-28 place-self-start flex flex-col  space-y-10 px-5 lg:px-0 max-w-5xl w-full '>

                {/* Header */}
                <div>
                    <h1 className='text-center mb-2 md:mb-4 text-6xl font-bold md:text-8xl'>
                        My Skillset
                    </h1>
                    <h2 className='text-center text-stone-600 text-2xl md:text-3xl '>
                        Everything My Brain Knows So Far
                    </h2>
                </div>

                <ul className='flex flex-col space-y-10'>
                    <SkillList heading={"Front End"} skillset={skillset.frontEnd} />
                    <SkillList heading={"Back End"} skillset={skillset.backEnd} />
                    <SkillList heading={"Testing & Deployment"} skillset={skillset['testing/deployment']} />
                    <SkillList heading={"Developer Tools"} skillset={skillset.tools} />
                </ul>





            </div>

        </div>
    )
}

export default Skills