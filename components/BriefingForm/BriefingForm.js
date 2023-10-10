import { ValidationError, useForm } from "@formspree/react";
import { Input } from "components/Input";

export const BriefingForm = ({ formId }) => {
    console.log("FORM ID: ", formId);
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
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="project-title">Project Title <span className="text-red-500">*</span></label>
                        <Input id="project-title" type="text" name="project-title" required />
                        <ValidationError prefix="Project Title" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="live-date">Campaign Live Date <span className="text-red-500">*</span></label>
                        <Input id="live-date" type="date" name="live-date" required />
                        <ValidationError prefix="Campaign Live Date" field="date" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="full-name">Full Name <span className="text-red-500">*</span></label>
                        <Input id="full-name" type="text" name="full-name" required />
                        <ValidationError prefix="Full Name" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                        <Input id="email" type="email" name="email" placeholder="email@domain.com" required />
                        <ValidationError prefix="Email Address" field="email" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="media-buyer">Media Buyer</label>
                        <Input id="media-buyer" type="text" name="media-buyer" />
                        <ValidationError prefix="Media Buyer" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="media-buyer-email">Media Buyer Email Address</label>
                        <Input id="media-buyer-email" type="email" name="media-buyer-email" placeholder="email@domain.com" />
                        <ValidationError prefix="Media Buyer Email Address" field="email" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="ft-campaign-manager">Flashtalking Campaign Manager</label>
                        <Input id="ft-campaign-manager" type="text" name="ft-campaign-manager" />
                        <ValidationError prefix="Flashtalking Campaign Manager" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="ad-file-size-limit">Ad File Size Limit</label>
                        <Input id="ad-file-size-limit" type="text" name="ad-file-size-limit" />
                        <ValidationError prefix="Ad File Size Limit" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="creative-sizes">Creative Sizes Required <span className="text-red-500">*</span></label>
                        <Input id="creative-sizes" type="text" name="creative-sizes" required />
                        <ValidationError prefix="Creative Sizes Required" field="subject" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="languages">Additional Languages</label>
                        <Input id="languages" type="text" name="languages" />
                        <ValidationError prefix="Additional Languages" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="dynamic-versions">Dynamic Messaging Versions</label>
                        <select id="dynamic-versions" name="dynamic-versions" defaultValue="Choose">
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
                        <label htmlFor="update-versions">Does client or their partners intend to update versions themselves in the future</label>
                        <select id="update-versions" name="update-versions" defaultValue="Choose">
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
                                <div className="checkbox-input"><Input id="no-feed" type="checkbox" name="no-feed" /><label htmlFor="no-feed">No Feed</label></div>
                                <div className="checkbox-input"><Input id="product-feed" type="checkbox" name="product-feed" /><label htmlFor="product-feed">Product Feed (Retargeting)</label></div>
                                <div className="checkbox-input"><Input id="store-feed" type="checkbox" name="store-feed" /><label htmlFor="store-feed">Store Locator Feed</label></div>
                            </div>
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="weather-feed" type="checkbox" name="weather-feed" /><label htmlFor="weather-feed">Weather Feed</label></div>
                                <div className="checkbox-input"><Input id="live-event-feed" type="checkbox" name="live-event-feed" /><label htmlFor="live-event-feed">Live Event Feed</label></div>
                                <div className="checkbox-input"><Input id="other-feed" type="checkbox" name="other-feed" /><label htmlFor="other-feed">Other Feed</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Feed Integrations" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="project-description">Project Description <span className="text-red-500">*</span></label>
                        <textarea id="project-description" name="project-description" required />
                        <ValidationError prefix="Project Description" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="business-objectives">Business Objective & KPI's <span className="text-red-500">*</span></label>
                        <textarea id="business-objectives" name="business-objectives" required />
                        <ValidationError prefix="Business Objective & KPI's" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Design</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="designs-supplied">Designs To Be Supplied By <span className="text-red-500">*</span></label>
                        <select id="designs-supplied" name="designs-supplied" defaultValue="Choose" required>
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
                            <div className="checkbox-input"><Input id="brand-guidelines" type="checkbox" name="brand-guidelines" /><label htmlFor="brand-guidelines">Brand Guidelines</label></div>
                            <div className="checkbox-input"><Input id="brand-fonts" type="checkbox" name="brand-fonts" /><label htmlFor="brand-fonts">Brand Fonts</label></div>
                            <div className="checkbox-input"><Input id="logos" type="checkbox" name="logos" /><label htmlFor="logos">Logos</label></div>
                            <div className="checkbox-input"><Input id="artwork" type="checkbox" name="artwork" /><label htmlFor="artwork">Artwork</label></div>
                            <div className="checkbox-input"><Input id="videos" type="checkbox" name="videos" /><label htmlFor="videos">Videos</label></div>
                            <div className="checkbox-input"><Input id="messaging" type="checkbox" name="messaging" /><label htmlFor="messaging">Messaging</label></div>
                        </div>
                        <ValidationError prefix="Assets Supplied" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="date-supplied">Date Assets To Be Supplied</label>
                        <Input id="date-supplied" type="date" name="date-supplied" />
                        <ValidationError prefix="Date Assets To Be Supplied" field="date" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="sign-off-email">Contact Email For Assets and Design Sign Off</label>
                        <Input id="sign-off-email" type="email" name="sign-off-email" placeholder="email@domain.com" />
                        <ValidationError prefix="Sign Off Email" field="email" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Production</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="required-functionality">Any Specific Required Functionality</label>
                        <textarea id="required-functionality" name="required-functionality" />
                        <ValidationError prefix="Required Functionality" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="required-tracking">Any Specific Required Tracking</label>
                        <textarea id="required-tracking" name="required-tracking" />
                        <ValidationError prefix="Required Tracking" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Delivery</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="versions-setup">Dynamic Messaging Versions To Be Set Up By</label>
                        <select id="versions-setup" name="versions-setup" defaultValue="Choose">
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
                        <textarea id="backup-messaging" name="backup-messaging" />
                        <ValidationError prefix="Backup Messaging" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Additional Information</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="additional-requirements">Please Send Us Anything Required Here (WeTransfer, DropBox etc.)</label>
                        <Input id="additional-requirements" type="text" name="additional-requirements" />
                        <ValidationError prefix="Additional Requirements" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="additional-notes">Additional Notes</label>
                        <textarea id="additional-notes" name="additional-notes" />
                        <ValidationError prefix="Additional Notes" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full mb-2">
                    <div className="question-wrapper">
                        <label htmlFor="additional-url">Additional URL</label>
                        <Input id="additional-url" type="text" name="additional-url" />
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