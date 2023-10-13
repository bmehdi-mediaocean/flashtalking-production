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
                        <Input id="project-title" type="text" name="Project Title" required />
                        <ValidationError prefix="Project Title" field="name" errors={state.errors} />
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
                        <label htmlFor="project-owner">Project Owner <span className="text-red-500">*</span></label>
                        <Input id="project-owner" type="text" name="Project Owner" required />
                        <ValidationError prefix="Project Owner" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <Input id="email" type="email" name="Email" placeholder="name@domain.com" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Project Details</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="brands">Brands <span className="text-red-500">*</span></label>
                        <select id="brands" name="Brands" defaultValue="Choose" required>
                            <option value="Choose" disabled hidden>Choose</option>
                            <option value="Flights">Flights</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Both">Both</option>
                        </select>
                        <ValidationError prefix="Brands" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="markets">Markets <span className="text-red-500">*</span></label>
                        <div className="checkbox-wrapper flex-row">
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="uk" type="checkbox" name="Markets: UK" /><label htmlFor="uk">UK</label></div>
                                <div className="checkbox-input"><Input id="fr" type="checkbox" name="Markets: FR" /><label htmlFor="fr">FR</label></div>
                                <div className="checkbox-input"><Input id="ch" type="checkbox" name="Markets: CH" /><label htmlFor="ch">CH</label></div>
                                <div className="checkbox-input"><Input id="de" type="checkbox" name="Markets: DE" /><label htmlFor="de">DE</label></div>
                            </div>
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="nl" type="checkbox" name="Markets: NL" /><label htmlFor="nl">NL</label></div>
                                <div className="checkbox-input"><Input id="it" type="checkbox" name="Markets: IT" /><label htmlFor="it">IT</label></div>
                                <div className="checkbox-input"><Input id="pl" type="checkbox" name="Markets: PL" /><label htmlFor="pl">PL</label></div>
                                <div className="checkbox-input"><Input id="other" type="checkbox" name="Markets: Other" /><label htmlFor="other">Other</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Creative Formats" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="other-markets">If other, please specify below:</label>
                        <Input id="other-markets" type="text" name="Other Markets" />
                        <ValidationError prefix="Other Markets" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="creative-formats">Creative Formats Required <span className="text-red-500">*</span></label>
                        <div className="checkbox-wrapper flex-row">
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="display" type="checkbox" name="Creative Formats Required: Display" /><label htmlFor="display">Display (standard 8 sizes)</label></div>
                                <div className="checkbox-input"><Input id="social-video" type="checkbox" name="Creative Formats Required: Social Video" /><label htmlFor="social-video">Social Video</label></div>
                                <div className="checkbox-input"><Input id="social-static" type="checkbox" name="Creative Formats Required: Social Static" /><label htmlFor="social-static">Social Static</label></div>
                                <div className="checkbox-input"><Input id="olv" type="checkbox" name="Creative Formats Required: OLV" /><label htmlFor="olv">OLV</label></div>
                            </div>
                            <div className="w-1/2">
                                <div className="checkbox-input"><Input id="dooh" type="checkbox" name="Creative Formats Required: DOOH" /><label htmlFor="dooh">DOOH</label></div>
                                <div className="checkbox-input"><Input id="display-direct" type="checkbox" name="Creative Formats Required: Display Direct" /><label htmlFor="display-direct">Display Direct (non-FT)</label></div>
                                <div className="checkbox-input"><Input id="display-statics" type="checkbox" name="Creative Formats Required: Display Statics" /><label htmlFor="display-statics">Display Statics</label></div>
                                <div className="checkbox-input"><Input id="other" type="checkbox" name="Creative Formats Required: Other" /><label htmlFor="other">Other</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Creative Formats" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="other-creative-formats">If other, please specify below:</label>
                        <Input id="other-creative-formats" type="text" name="Other Creative Formats" />
                        <ValidationError prefix="Other Creative Formats" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="creative-information">Creative Sizes / Video Lengths etc.</label>
                        <textarea id="creative-information" name="Creative Sizes / Video Lengths etc." />
                        <ValidationError prefix="Creative Information" field="message" errors={state.errors} />
                        <div className="text-xs pt-[0.375rem]">Please specify sizes required for each channel. For Display, please list any additional sizes/formats beyond the standard 8. For Video, please specify video lengths (e.g., 6&quot;, 10&quot;, etc.)</div>
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="dynamic-versions">Dynamic Messaging Versions <span className="text-red-500">*</span></label>
                        <select id="dynamic-versions" name="Dynamic Messaging Versions" defaultValue="Choose" required>
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
                        <Input id="other-dynamic-versions" type="text" name="Other Number of Dynamic Versions" />
                        <ValidationError prefix="Other Dynamic Versions" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="creative-template">Creative Template <span className="text-red-500">*</span></label>
                        <select id="creative-template" name="Creative Template" defaultValue="Choose" required>
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
                        <Input id="other-creative-template" type="text" name="Other Creative Template" />
                        <ValidationError prefix="Other Creative Template" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="languages">Additional Languages</label>
                        <Input id="languages" type="text" name="Additional Languages" placeholder="If required" />
                        <ValidationError prefix="Additional Languages" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="project-description">Project Description <span className="text-red-500">*</span></label>
                        <textarea id="project-description" name="Project Description" required />
                        <ValidationError prefix="Project Description" field="message" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Copy Deck</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="copy-deck-supplied">Copy Deck Supplied By <span className="text-red-500">*</span></label>
                        <select id="copy-deck-supplied" name="Copy Deck Supplied By" defaultValue="Choose" required>
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
                        <Input id="other-copy-deck-supplier" type="text" name="Other Copy Deck Supplier" />
                        <ValidationError prefix="Other Copy Deck Supplier" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="supplier-email">Email of Supplier</label>
                        <Input id="supplier-email" type="supplier-email" name="Email of Supplier" placeholder="name@domain.com" />
                        <ValidationError prefix="Supplier Email" field="supplier-email" errors={state.errors} />
                        <div className="text-xs pt-[0.375rem]">If not supplied direct</div>
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Image Crops</div>
                </li>
                <li className="form-li-full min-h-[2rem]">
                    <div>Please refer to our <a className="text-[#ff6600] font-bold" href="https://flashtalking.sharepoint.com/:f:/s/ukprod/Eiks4COFmhhDnLafgZq8eLUBkbmHSJGobHWexhYuqAhtiA?e=F7750i">Cropping Specs</a> for details</div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="image-crops-supplied">Image Crops Supplied By <span className="text-red-500">*</span></label>
                        <select id="image-crops-supplied" name="Image Crops Supplied By" defaultValue="Choose" required>
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
                        <Input id="other-image-crops-supplier" type="text" name="Other Image Crops Supplier" />
                        <ValidationError prefix="Other Image Crops Supplier" field="name" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="email-supplier-more-info">Email of Supplier / More Information</label>
                        <textarea id="email-supplier-more-info" name="Email of Supplier / More Information" />
                        <ValidationError prefix="Email Supplier More Info" field="message" errors={state.errors} />
                        <div className="text-xs pt-[0.375rem]">e.g., Existing imagery examples, details of purchased images, etc.</div>
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="assets-supplied">Other Assets To Be Supplied</label>
                        <div className="checkbox-wrapper flex-row">
                            <div className="w-full">
                                <div className="checkbox-input"><Input id="logos" type="checkbox" name="Other Assets To Be Supplied: Logos" /><label htmlFor="logos">Logos</label></div>
                                <div className="checkbox-input"><Input id="artwork" type="checkbox" name="Other Assets To Be Supplied: Artwork" /><label htmlFor="artwork">Artwork</label></div>
                                <div className="checkbox-input"><Input id="videos" type="checkbox" name="Other Assets To Be Supplied: Videos" /><label htmlFor="videos">Videos</label></div>
                                <div className="checkbox-input"><Input id="other" type="checkbox" name="Other Assets To Be Supplied: Other" /><label htmlFor="other">Other</label></div>
                            </div>
                        </div>
                        <ValidationError prefix="Assets Supplied" field="_optin" errors={state.errors} />
                    </div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="other-assets-supplier">If other, please specify below:</label>
                        <Input id="other-assets-supplier" type="text" name="Other Assets To Be Supplied" />
                        <ValidationError prefix="Other Assets Supplier" field="name" errors={state.errors} />
                    </div>
                </li>

                <li className="form-li-headline">
                    <div className="headline-wrapper">Trafficking Information</div>
                </li>
                <li className="form-li-full">
                    <div className="question-wrapper">
                        <label htmlFor="version_file_name_suffix">Version &#38; File Name Suffix</label>
                        <Input id="version_file_name_suffix" type="text" name="Version &#38; File Name Suffix" placeholder="e.g. FTFR_JL_FR" />
                        <ValidationError prefix="Version File Name Suffix" field="name" errors={state.errors} />
                        <div className="text-xs pt-[0.375rem]">Please confirm this with Kepler</div>
                    </div>
                </li>
                <li className="form-li-half">
                    <div className="question-wrapper">
                        <label htmlFor="versions-added-to">Versions To Be Added To</label>
                        <select id="versions-added-to" name="Versions To Be Added To" defaultValue="Choose" required>
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
                        <label htmlFor="other-versions-added-to">If &apos;Existing Basefiles&apos; or other, please give details below:</label>
                        <Input id="other-versions-added-to" type="text" name="Existing Basefiles / Other Details" />
                        <ValidationError prefix="Other Versions Added To" field="name" errors={state.errors} />
                        <div className="text-xs pt-[0.375rem]">e.g., Flashtalking preview link or basefile names</div>
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
                        <button className="btn bg-[#ff6600] hover:bg-[#ff4600]" type="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </li>
            </ul>

        </form>
    );
};