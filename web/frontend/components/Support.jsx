import React from 'react';
import { TextStyle } from "@shopify/polaris";

export function Support() {
  
  const links = {
    support: "mailto:support@get-great.site",
    faq: "#",
    terms: "#",
    policy: "#"
  }

  return <div>
    Contact support:<br />
    <a href={links.support} rel="noreferrer noopener" target="_blank">support@get-great.site</a><br />
    (We will reply in 1-2 business days)<br /><br />
    Or read:<br />
    <a href={links.faq} rel="noreferrer noopener" target="_blank">FAQ</a><br />
    <br />
    <TextStyle variation="subdued">Please note: If you are contacting technical support about an error, indicate the approximate time of the error.</TextStyle><br /><br />
    <div className="secondary">
    <a href={links.terms} rel="noreferrer noopener" target="_blank">Terms of Use</a> | <a href={links.policy} rel="noreferrer noopener" target="_blank">Privacy Policy</a>
    </div>
  </div>
}