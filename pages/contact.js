import { useState } from "react";

// Next
import { useRouter } from "next/router";

// Context
import { useDarkMode } from '../lib/context/ThemeProvider'

// Components
import InteractButtons from '../components/Layout/InteractButtons'

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

  return (
    <div className="h-screen flex flex-col justify-center items-center">


      <h1 className="text-[4rem]">
        Contact Me
      </h1>
      <main className={`${darkMode ? 'bg-dark text-lighter' : 'bg-lighter text-dark'} flex justify-center items-center p-10 rounded-xl`}>
        <InteractButtons />
        {formVisible ? ContactForm : ConfirmationMessage}
      </main>





    </div>
  );
};

export default ContactPage;