import React from 'react';
import {
    Page, 
    LegacyCard, 
    DataTable
  } from "@shopify/polaris";
  import GuideEditLink from "./GuideEditLink";

export default function GuideTable() {
    const rows = [
      ['Shorts guide', 'Shorts', <GuideEditLink link="/?guide=shorts"/>],
      ['Skirts guide', 'Skirts', <GuideEditLink link="/?guide=skirts"/>]
    ];
  
    return (
        <LegacyCard>
          <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text'
            ]}
            headings={[
              'Name',
              'Collection',
              ''
            ]}
            rows={rows}
          />
        </LegacyCard>
    );
  }