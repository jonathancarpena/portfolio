import { useState } from "react";

// Next
import { useRouter } from "next/router";

// Context
import { useDarkMode } from '../lib/context/ThemeProvider'

// Components
import InteractButtons from '../components/Layout/InteractButtons'

// Icons
import { FiUser, FiMail, FiMessageChat } from "react-icons/fi";

const ContactPage = () => {
  const darkMode = useDarkMode()
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/", undefined, { shallow: true })}
      >
        Go Home
      </button>
    </>
  );

  const ContactForm = (
    <form
      className="flex flex-col "
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
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

      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
        className="mb-5"
      />

      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required className="mb-5" />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required className="mb-5" />
      <button type="submit">Submit</button>
    </form>
  );
  const DesignedContactForm = (
    <form
      className="flex flex-col "
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
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

      <label htmlFor="name" className="flex items-center space-x-1.5">
        <FiUser />
        <span>Name</span>
      </label>
      <div className="w-max">
        <input
          id="name"
          name="name"
          required
          onChange={(e) => setSubmitterName(e.target.value)}
          type="text"
          className={`text-dark bg-light focus:bg-lighter mb-5 w-full   outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500`}
        />
      </div>


      <label htmlFor="email">E-mail Address *</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className={`text-dark bg-light focus:bg-lighter mb-5 w-full   outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500`}
      />

      <label htmlFor="message">Message *</label>
      <textarea
        id="message"
        name="message"
        required
        className='mb-5 w-full min-h-[150px] text-dark bg-light focus:bg-lighter outline-none pl-4 pr-10 py-2  rounded-md focus:ring-2 focus:ring-accent-500'
      />
      <button type="submit" className='w-full bg-accent-500 hover:bg-accent-400 active:bg-accent-500 active:scale-95 transition-all ease-in-out py-4 rounded-lg text-white text-xl'>Submit</button>
    </form>
  );

  return (
    <div className="h-screen flex flex-col justify-center items-center">


      <h1 className="text-[4rem]">
        Contact Me
      </h1>
      <main className={`${darkMode ? 'bg-dark text-lighter' : 'bg-lighter text-dark'} flex justify-center items-center p-10 rounded-xl`}>
        <InteractButtons />
        {formVisible ? DesignedContactForm : ConfirmationMessage}
      </main>





    </div>
  );
};

export default ContactPage;