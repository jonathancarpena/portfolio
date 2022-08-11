import { useState } from "react";

// Next
import { useRouter } from "next/router";

// Hooks
import { useDarkMode } from "../lib/context/ThemeProvider";

// Framer
import { AnimatePresence, motion } from "framer-motion";

// Components
import InteractButtons from '../components/Layout/InteractButtons'

// Icons
import { FiUser, FiMail, FiMessageCircle, FiClock } from "react-icons/fi";
import { FaSmileWink } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";


const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState("");
  const [showToast, setShowToast] = useState(true)
  const router = useRouter();
  const darkMode = useDarkMode()
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formComplete = !confirmationScreenVisible;

  const ContactForm = (
    <form
      className="flex flex-col w-full bg-accent-500 p-5 rounded-xl"
      method="POST"
      name="contact-form"
      action={`contact/?success=true&NewFriend=${submitterName}`}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Dont fill this out: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name" className="text-white flex items-center space-x-1.5 mb-1 text-lg">
        <FiUser />
        <span>Name</span>
      </label>

      <input
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
        className={`text-dark bg-light focus:bg-lighter mb-5 w-full   outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500`}
      />

      <label htmlFor="email" className="text-white flex items-center space-x-1.5  mb-1 text-lg">
        <FiMail />
        <span>Email</span>
      </label>

      <input
        id="email"
        type="email"
        name="email"
        required
        className={`text-dark bg-light focus:bg-lighter mb-5 w-full   outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500`}
      />

      <label htmlFor="message" className="text-white flex items-center space-x-1.5 mb-1 text-lg">
        <FiMessageCircle />
        <span>Message</span>
      </label>

      <textarea
        id="message"
        name="message"
        required
        className='mb-5 w-full min-h-[150px] text-dark bg-light focus:bg-lighter outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
      />
      <div data-netlify-recaptcha="true"></div>
      <button type="submit" className='w-full bg-accent-700 hover:bg-accent-400 active:bg-accent-700 active:scale-95 transition-all ease-in-out py-4 rounded-lg text-white text-xl'>Submit</button>
    </form>
  );

  const toastContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 1, staggerDirection: -1 } },
    exit: { transition: { staggerChildren: 1, staggerDirection: -1 } }
  }

  const toast = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  }

  setTimeout(() => {
    if (showToast) {
      setShowToast(false)
    }
  }, [7000])

  return (
    <div

      className="  bg-hero-sm md:bg-hero-md lg:bg-hero bg-cover  w-screen h-screen flex flex-col justify-center items-center">

      <h1 className="  text-[2rem] md:text-[3rem] lg:text-[4rem]">
        Contact Me
      </h1>
      <main className={`w-[90vw] max-w-[600px] min-h-[450px] `}>
        {ContactForm}
        <AnimatePresence exitBeforeEnter>
          {(!formComplete && showToast) &&
            <motion.ul
              variants={toastContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-sm md:text-base absolute bottom-5 right-5 space-y-2 md:bottom-10 md:right-10 flex flex-col items-end md:space-y-5"
            >
              <motion.span
                variants={toast}
                className={`${darkMode ? 'bg-dark text-white' : 'bg-lighter text-dark'} drop-shadow-lg w-max z-[100]  p-3 rounded-md flex justify-end space-x-2 items-center`}
              >
                <span>I'll get back to you within 24-48 hours</span>
                <FiClock />
              </motion.span>
              <motion.span
                variants={toast}
                className={`${darkMode ? 'bg-dark text-white' : 'bg-lighter text-dark'} drop-shadow-lg w-max z-[100]  p-3 rounded-md flex justify-end space-x-2 items-center`}
              >
                <span>Thank You {router.query.NewFriend ? router.query.NewFriend : 'Friend'}!</span>
                <FaSmileWink className="text-yellow-500" />
              </motion.span>
              <motion.span
                variants={toast}
                className={`${darkMode ? 'bg-dark text-white' : 'bg-lighter text-dark'} drop-shadow-lg w-max z-[100]  p-3 rounded-md flex justify-end space-x-2 items-center`}
              >
                <span>Form Submitted</span>
                <BsFillCheckCircleFill className="text-green-500" />
              </motion.span>


            </motion.ul>

          }
        </AnimatePresence>
      </main>
      <InteractButtons />
    </div>
  );
};

export default ContactPage;