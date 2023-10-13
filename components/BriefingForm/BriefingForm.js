"use client";
import { ValidationError, useForm } from "@formspree/react";
import { Input } from "components/Input";

export const BriefingForm = ({ formId }) => {
    //console.log("FORM ID: ", formId);
    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p className="max-w-5xl mx-auto my-5 text-center">Thanks for submitting a brief! We will be in contact as soon as possible.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
            
            <ul className="form-ul">

                <li className="form-li-headline border-t-0">
                    <div className="headline-wrapper">Project Details</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="project-title">Project Title <span className="text-red-500">*</span></label>
                        <Input id="project-title" type="text" name="Project Title" required />
                        <ValidationError prefix="Project Title" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="company-name">Company Name <span className="text-red-500">*</span></label>
                        <Input id="company-name" type="text" name="Company Name" required />
                        <ValidationError prefix="Company Name" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="live-date">Campaign Live Date <span className="text-red-500">*</span></label>
                        <Input id="live-date" type="date" name="Campaign Live Date" required />
                        <ValidationError prefix="Campaign Live Date" field="date" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="full-name">Full Name <span className="text-red-500">*</span></label>
                        <Input id="full-name" type="text" name="Full Name" required />
                        <ValidationError prefix="Full Name" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                        <Input id="email" type="email" name="Email Address" placeholder="name@domain.com" required />
                        <ValidationError prefix="Email Address" field="email" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="media-buyer">Media Buyer <span className="text-red-500">*</span></label>
                        <Input id="media-buyer" type="text" name="Media Buyer" required />
                        <ValidationError prefix="Media Buyer" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="media-buyer-email">Media Buyer Email Address</label>
                        <Input id="media-buyer-email" type="email" name="Media Buyer Email Address" placeholder="name@domain.com" />
                        <ValidationError prefix="Media Buyer Email Address" field="email" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="ft-campaign-manager">Flashtalking Campaign Manager</label>
                        <Input id="ft-campaign-manager" type="text" name="Flashtalking Campaign Manager" />
                        <ValidationError prefix="Flashtalking Campaign Manager" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="creative-sizes">Creative Sizes Required <span className="text-red-500">*</span></label>
                        <Input id="creative-sizes" type="text" name="Creative Sizes Required" required />
                        <ValidationError prefix="Creative Sizes Required" field="subject" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="languages">Additional Languages</label>
                        <Input id="languages" type="text" name="Additional Languages" />
                        <ValidationError prefix="Additional Languages" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="dynamic-versions">Dynamic Messaging Versions</label>
                        <select id="dynamic-versions" name="Dynamic Messaging Versions" defaultValue="Choose">
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Only a single version required">Only a single version required</option>
                            <option value="2-5 versions">2-5 versions</option>
                            <option value="6-20 versions">6-20 versions</option>
                            <option value="20+ versions">20+ versions</option>
                        </select>
                        <ValidationError prefix="Dynamic Messaging Versions" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="max-creative-file-weight">If known, what is the max file weight per creative for this campaign in Flashtalking?</label>
                        <select id="max-creative-file-weight" name="Max Creative File Weight" defaultValue="Choose">
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Not known">Not known</option>
                            <option value="100KB">100KB</option>
                            <option value="150KB">150KB</option>
                            <option value="200KB">200KB</option>
                            <option value="250KB">250KB</option>
                            <option value="300KB">300KB</option>
                            <option value="300+KB">300+KB</option>
                        </select>
                        <ValidationError prefix="Max Creative File Weight" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="update-versions">Does client or their partners intend to update versions themselves in the future?</label>
                        <select id="update-versions" name="Does client or their partners intend to update versions themselves in the future?" defaultValue="Choose">
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <ValidationError prefix="Update Versions" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="feed-integrations">Feed Integrations</label>
                        <div className="checkbox-wrapper flex-row">
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="no-feed" type="checkbox" name="Feed Integrations: No Feed" /><label htmlFor="no-feed">No Feed</label></div>
                                <div className="checkbox-input"><Input id="product-feed" type="checkbox" name="Feed Integrations: Product Feed" /><label htmlFor="product-feed">Product Feed (Retargeting)</label></div>
                                <div className="checkbox-input"><Input id="store-feed" type="checkbox" name="Feed Integrations: Store Feed" /><label htmlFor="store-feed">Store Locator Feed</label></div>
                            </div>
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="weather-feed" type="checkbox" name="Feed Integrations: Weather Feed" /><label htmlFor="weather-feed">Weather Feed</label></div>
                                <div className="checkbox-input"><Input id="live-event-feed" type="checkbox" name="Feed Integrations: Live Event Feed" /><label htmlFor="live-event-feed">Live Event Feed</label></div>
                                <div className="checkbox-input"><Input id="other-feed" type="checkbox" name="Feed Integrations: Other Feed" /><label htmlFor="other-feed">Other Feed</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Feed Integrations" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="project-description">Project Description <span className="text-red-500">*</span></label>
                        <textarea id="project-description" name="Project Description" required />
                        <ValidationError prefix="Project Description" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="business-objectives">Business Objective & KPI&apos;s <span className="text-red-500">*</span></label>
                        <textarea id="business-objectives" name="Business Objective & KPI&apos;s" required />
                        <ValidationError prefix="Business Objective & KPIs" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Design</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="designs-supplied">Designs To Be Supplied? <span className="text-red-500">*</span></label>
                        <select id="designs-supplied" name="Designs To Be Supplied By" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <ValidationError prefix="Designs Supplied" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="feed-integrations">Assets To Be Supplied</label>
                        <div className="checkbox-wrapper">
                            <div className="checkbox-input"><Input id="brand-guidelines" type="checkbox" name="Assets To Be Supplied: Brand Guidelines" /><label htmlFor="brand-guidelines">Brand Guidelines</label></div>
                            <div className="checkbox-input"><Input id="brand-fonts" type="checkbox" name="Assets To Be Supplied: Brand Fonts" /><label htmlFor="brand-fonts">Brand Fonts</label></div>
                            <div className="checkbox-input"><Input id="logos" type="checkbox" name="Assets To Be Supplied: Logos" /><label htmlFor="logos">Logos</label></div>
                            <div className="checkbox-input"><Input id="artwork" type="checkbox" name="Assets To Be Supplied: Artwork" /><label htmlFor="artwork">Artwork</label></div>
                            <div className="checkbox-input"><Input id="videos" type="checkbox" name="Assets To Be Supplied: Videos" /><label htmlFor="videos">Videos</label></div>
                            <div className="checkbox-input"><Input id="messaging" type="checkbox" name="Assets To Be Supplied: Messaging" /><label htmlFor="messaging">Messaging</label></div>
                        </div>
                        <ValidationError prefix="Assets Supplied" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="date-supplied">Date Assets To Be Supplied By</label>
                        <Input id="date-supplied" type="date" name="Date Assets To Be Supplied By" />
                        <ValidationError prefix="Date Assets To Be Supplied" field="date" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="sign-off-email">Contact Email For Assets and Design Sign Off</label>
                        <Input id="sign-off-email" type="email" name="Contact Email For Assets and Design Sign Off" placeholder="name@domain.com" />
                        <ValidationError prefix="Sign Off Email" field="email" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Production</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="required-functionality">Any Specific Required Functionality</label>
                        <textarea id="required-functionality" name="Any Specific Required Functionality" />
                        <ValidationError prefix="Required Functionality" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="required-tracking">Any Specific Required Tracking</label>
                        <textarea id="required-tracking" name="Any Specific Required Tracking" />
                        <ValidationError prefix="Required Tracking" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Delivery</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="versions-setup">Dynamic Messaging Versions To Be Set Up By</label>
                        <select id="versions-setup" name="Dynamic Messaging Versions To Be Set Up By" defaultValue="Choose">
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Flashtalking">Flashtalking</option>
                            <option value="Client">Client</option>
                            <option value="Creative Agency">Creative Agency</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Versions Setup" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="backup-messaging">Backup Messaging</label>
                        <textarea id="backup-messaging" name="Backup Messaging" />
                        <ValidationError prefix="Backup Messaging" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Additional Information</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="additional-requirements">Please Send Us Anything Required Here (WeTransfer, DropBox etc.)</label>
                        <Input id="additional-requirements" type="text" name="Additional Requirements" />
                        <ValidationError prefix="Additional Requirements" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="additional-notes">Additional Notes</label>
                        <textarea id="additional-notes" name="Additional Notes" />
                        <ValidationError prefix="Additional Notes" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full mb-2">
                    <div className="question-wrapper">
                        <label htmlFor="additional-url">Additional URL</label>
                        <Input id="additional-url" type="text" name="Additional URL" />
                        <ValidationError prefix="Additional URL" field="name" errors={state.errors} />
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