import React from "react";
import ReactDOM from "react-dom";

const iframes = {
  form:
    '<iframe data-tally-src="https://tally.so/embed/nG7dpL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1675" frameborder="0" marginheight="0" marginwidth="0" title="Existing Client Order Form"></iframe>'
};

export const TallyForm = (props) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}/>
    );
};