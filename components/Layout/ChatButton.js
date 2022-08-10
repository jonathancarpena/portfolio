import React, { useState } from 'react'

// Motion
import { motion, AnimatePresence } from 'framer-motion'

// Icons
import { RiChat1Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'

// Image
import Avatar from '../../images/avatar.png'


const Message = ({ text, user }) => {
    return (
        <p className='text-sm p-3 rounded-lg text-white ring-1 ring-accent-500 w-max max-w-[250px]'>
            {text}
        </p>
    )
}
function ChatButton() {
    const [chatOpen, setChatOpen] = useState(false)
    const [conversation, setConversation] = useState([])
    const button = {
        initial: { opacity: 0, scale: 0.7, },
        animate: {
            opacity: 1, scale: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.1
            }
        },
        exit: {
            scale: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.1
            }
        }
    }

    const chat = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1, y: 0,
            transition: {
                type: 'spring',
                bounce: 0.4

            }
        },
        exit: {
            y: 50, opacity: 0,
            transition: {
                ease: 'easeInOut', duration: 0.1
            }
        }
    }

    function generateChat() {
        return (
            <ul className='p-4 flex flex-col space-y-2'>
                <Message text='Hi! I’m Jonathan Bot ' />
                <Message text='I’m just like Jonathan, but a far better conversationalist ' />
                <Message text='How can I help you today?' />
            </ul>
        )
    }
    return (
        <div className='fixed bottom-10 right-10 flex justify-center items-center'>

            <AnimatePresence exitBeforeEnter>
                {chatOpen &&
                    <motion.div
                        key={'chat'}
                        variants={chat}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className='bg-white w-[350px] rounded-t-lg rounded-bl-lg overflow-hidden'
                    >

                        {/* Header */}
                        <div className='flex items-center justify-between bg-accent-500 p-4 w-full'>

                            {/* Name, Avatar */}
                            <div className='flex items-center space-x-5'>
                                <img
                                    src={Avatar}
                                    alt='avatar'
                                    className='w-[45px] h-[45px] rounded-full ring-2 ring-white'
                                />
                                <div className='flex flex-col text-white'>
                                    <span className='font-bold'>Jonathan Bot</span>
                                    <span className='text-sm'>Ask me a question!</span
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setChatOpen(false)}
                                className='p-2.5 rounded-lg flex items-center justify-center outline-none 
                            hover:bg-accent-400 active:scale-90 active:bg-accent-400 transition-all ease-in-out duration-150 
                            '>
                                <IoClose className='text-white text-[1.75rem]' />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className='bg-accent-700 h-[500px] overflow-y-scroll'>
                            {generateChat()}
                        </div>
                    </motion.div>
                }

                {!chatOpen &&
                    <motion.button
                        key={'button'}
                        variants={button}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={() => setChatOpen(true)}
                        className='
                        drop-shadow-lg  bg-accent-500 p-4 rounded-full 
                        hover:scale-105 hover:drop-shadow-xl hover:bg-accent-400 transition-all ease-in-out
                        '>
                        <RiChat1Line className='text-[2rem] text-white  ' />
                    </motion.button>
                }
            </AnimatePresence>

        </div>
    )
}

export default ChatButton