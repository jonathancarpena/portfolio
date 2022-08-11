import React from 'react'
import { useRouter } from "next/router";

function Contact() {
    const router = useRouter();
    const confirmationScreenVisible =
        router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;
    const ConfirmationMessage = (
        <React.Fragment>
            <p>
                Thank you for submitting this form. Someone should get back to you within 24-48 hours.
            </p>

            <button onClick={() => router.replace("/", undefined, { shallow: true })}> Submit Another Response </button>
        </React.Fragment>
    );
    return (
        <div>
            {formVisible ? <></> : ConfirmationMessage}
        </div>
    )
}

export default Contact