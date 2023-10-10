"use client";
import { ValidationError, useForm } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({ formId }) => {
    console.log("FORM ID: ", formId);
    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p className="max-w-5xl mx-auto my-5">Thanks for getting in touch! We will respond as soon as possible.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5 flex flex-col">
            <label htmlFor="email">Email Address</label>
            <Input id="email" type="email" name="email" required="" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message">Message</label>
            <textarea className="border-2 border-slate-400 p-1 hover:border-slate-500" id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <div>
                <button className="btn" type="submit" disabled={state.submitting}>Submit</button>
            </div>
        </form>
    );
};