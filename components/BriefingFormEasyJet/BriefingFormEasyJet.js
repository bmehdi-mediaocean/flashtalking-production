"use client";
import { ValidationError, useForm } from "@formspree/react";
import { Input } from "components/Input";

export const BriefingFormEasyJet = ({ formId }) => {
    //console.log("FORM ID: ", formId);
    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p className="max-w-5xl mx-auto my-5 text-center">Thanks for submitting a brief! We will be in contact as soon as possible.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
            
            <ul className="form-ul">

                <li className="form-li-headline border-t-0">
                    <div className="headline-wrapper">Project Overview</div>
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
                        <label htmlFor="project-owner">Project Owner <span className="text-red-500">*</span></label>
                        <Input id="project-owner" type="text" name="project-owner" required />
                        <ValidationError prefix="Project Owner" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <Input id="email" type="email" name="email" placeholder="name@domain.com" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline border-t-0">
                    <div className="headline-wrapper">Project Details</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="creative-formats">Creative Formats Required <span className="text-red-500">*</span></label>
                        <div className="checkbox-wrapper flex-row">
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="display" type="checkbox" name="display" /><label htmlFor="display">Display (standard 8 sizes)</label></div>
                                <div className="checkbox-input"><Input id="social-video" type="checkbox" name="social-video" /><label htmlFor="social-video">Social Video</label></div>
                                <div className="checkbox-input"><Input id="social-static" type="checkbox" name="social-static" /><label htmlFor="social-static">Social Static</label></div>
                                <div className="checkbox-input"><Input id="olv" type="checkbox" name="olv" /><label htmlFor="olv">OLV</label></div>
                            </div>
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="dooh" type="checkbox" name="dooh" /><label htmlFor="dooh">DOOH</label></div>
                                <div className="checkbox-input"><Input id="display-direct" type="checkbox" name="display-direct" /><label htmlFor="display-direct">Display Direct (non-FT)</label></div>
                                <div className="checkbox-input"><Input id="display-statics" type="checkbox" name="display-statics" /><label htmlFor="display-statics">Display Statics</label></div>
                                <div className="checkbox-input"><Input id="other" type="checkbox" name="other" /><label htmlFor="other">Other</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Creative Formats" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="other-creative-formats">If other, please specify below:</label>
                        <Input id="other-creative-formats" type="text" name="other-creative-formats" />
                        <ValidationError prefix="Other Creative Formats" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="creative-information">Creative Sizes / Video Lengths etc.</label>
                        <textarea id="creative-information" name="creative-information" placeholder="Please specify sizes required for each channel. For Display, please list any additional sizes/formats beyond the standard 8. For Video, please specify video lengths (e.g., 6&quot;, 10&quot;, etc.)" />
                        <ValidationError prefix="Creative Information" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="dynamic-versions">Dynamic Messaging Versions <span className="text-red-500">*</span></label>
                        <select id="dynamic-versions" name="dynamic-versions" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Only a single version required">Only a single version required</option>
                            <option value="2-5 versions">2-5 versions</option>
                            <option value="6-10 versions">6-10 versions</option>
                            <option value="11-20 versions">11-20 versions</option>
                            <option value="20+ versions">20+ versions</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Dynamic Messaging Versions" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="other-dynamic-versions">If other, please specify below:</label>
                        <Input id="other-dynamic-versions" type="text" name="other-dynamic-versions" />
                        <ValidationError prefix="Other Dynamic Versions" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="creative-template">Creative Template <span className="text-red-500">*</span></label>
                        <select id="creative-template" name="creative-template" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Generic (Flights, BAU, etc.)">Generic (Flights, BAU, etc.)</option>
                            <option value="Flights + Holidays">Flights + Holidays</option>
                            <option value="Holidays">Holidays</option>
                            <option value="Sales">Sales</option>
                            <option value="New Template">New Template</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Creative Template" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="other-creative-template">If other, please specify below:</label>
                        <Input id="other-creative-template" type="text" name="other-creative-template" />
                        <ValidationError prefix="Other Creative Template" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="languages">Additional Languages</label>
                        <Input id="languages" type="text" name="languages" placeholder="If required" />
                        <ValidationError prefix="Additional Languages" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="project-description">Project Description <span className="text-red-500">*</span></label>
                        <textarea id="project-description" name="project-description" required />
                        <ValidationError prefix="Project Description" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Copy Deck</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="copy-deck-supplied">Copy Deck Supplied By <span className="text-red-500">*</span></label>
                        <select id="copy-deck-supplied" name="copy-deck-supplied" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="VCCP">VCCP</option>
                            <option value="FCB">FCB</option>
                            <option value="Direct">Direct</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Copy Deck Supplied" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="other-copy-deck-supplier">If other, please specify below:</label>
                        <Input id="other-copy-deck-supplier" type="text" name="other-copy-deck-supplier" />
                        <ValidationError prefix="Other Copy Deck Supplier" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="supplier-email">Supplier Email</label>
                        <Input id="supplier-email" type="supplier-email" name="supplier-email" placeholder="If not supplied direct" />
                        <ValidationError prefix="Supplier Email" field="supplier-email" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Image Crops</div>
                </li>
                <li className="form-li-full">
                    <div>Please refer to our <a href="https://flashtalking.sharepoint.com/:f:/s/ukprod/Eiks4COFmhhDnLafgZq8eLUBkbmHSJGobHWexhYuqAhtiA?e=F7750i">Cropping Specs</a> for details</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="image-crops-supplied">Image Crops Supplied By <span className="text-red-500">*</span></label>
                        <select id="image-crops-supplied" name="image-crops-supplied" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="VCCP">VCCP</option>
                            <option value="FCB">FCB</option>
                            <option value="Existing Imagery">Existing Imagery</option>
                            <option value="Created by Flashtalking">Created by Flashtalking</option>
                            <option value="Direct">Direct</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Image Crops Supplied" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="other-image-crops-supplier">If other, please specify below:</label>
                        <Input id="other-image-crops-supplier" type="text" name="other-image-crops-supplier" />
                        <ValidationError prefix="Other Image Crops Supplier" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="email-supplier-more-info">Email of Supplier / More Information</label>
                        <textarea id="email-supplier-more-info" name="email-supplier-more-info" />
                        <ValidationError prefix="Email Supplier More Info" field="message" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="assets-supplied">Other Assets To Be Supplied</label>
                        <div className="checkbox-wrapper flex-row">
                            <div className="w-full">
                                <div className="checkbox-input"><Input id="logos" type="checkbox" name="logos" /><label htmlFor="logos">Logos</label></div>
                                <div className="checkbox-input"><Input id="artwork" type="checkbox" name="artwork" /><label htmlFor="artwork">Artwork</label></div>
                                <div className="checkbox-input"><Input id="videos" type="checkbox" name="videos" /><label htmlFor="videos">Videos</label></div>
                                <div className="checkbox-input"><Input id="other" type="checkbox" name="other" /><label htmlFor="other">Other</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Assets Supplied" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="other-assets-supplier">If other, please specify below:</label>
                        <Input id="other-assets-supplier" type="text" name="other-assets-supplier" />
                        <ValidationError prefix="Other Assets Supplier" field="name" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Tracking Information</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="version_file_name_suffix">Version & File Name Suffix</label>
                        <Input id="version_file_name_suffix" type="text" name="version_file_name_suffix" placeholder="e.g. FTFR_JL_FR" />
                        <ValidationError prefix="Version & File Name Suffix" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="versions-added-to">Versions To Be Added To</label>
                        <select id="versions-added-to" name="versions-added-to" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Existing Basefiles">Existing Basefiles</option>
                            <option value="New Basefiles">New Basefiles</option>
                            <option value="Not Applicable">Not Applicable</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Versions Added To" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="other-versions-added-to">If 'Existing Basefiles' or other, please give details below:</label>
                        <Input id="other-versions-added-to" type="text" name="other-versions-added-to" />
                        <ValidationError prefix="Other Versions Added To" field="name" errors={state.errors} />
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
                        <button className="btn bg-[#ff6600] hover:bg-[#c75000]" type="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </li>
            </ul>

        </form>
    );
};