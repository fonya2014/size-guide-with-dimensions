import React from 'react';
import {
    Link
  } from "@shopify/polaris";

  export default function GuideEditLink(props) {
    return (
        <Link url={props.link}>Edit</Link>
    );
  }