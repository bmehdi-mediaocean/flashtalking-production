"use client";
import { ValidationError, useForm } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({ formId }) => {
    //console.log("FORM ID: ", formId);
    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p className="max-w-5xl mx-auto my-5">Thanks for getting in touch! We will respond as soon as possible.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
            
            <ul className="form-ul">
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                        <Input id="email" type="email" name="email" placeholder="email@domain.com" required />
                        <ValidationError prefix="Email Address" field="email" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-full mb-4">
                    <div className="question-wrapper">
                        <label htmlFor="message">Message <span className="text-red-500">*</span></label>
                        <textarea id="message" name="message" required />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-full py-6 min-h-0 justify-center border-t border-t-slate-300 w-[95%] left-[2.5%] relative">
                    <div className="btn-wrapper">
                        <button className="btn" type="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </li>
            </ul>

        </form>
    );
};