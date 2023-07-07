import React, { useState, useCallback } from 'react';
import {
    Tabs,
    LegacyCard
  } from "@shopify/polaris";
  import GuideTable from "./GuideTable";

export default function MainTabs(props) {

const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'size-guides',
      content: 'Size guides',
      panelID: 'size-guides-panel',
    },
    {
      id: 'popup-setup',
      content: 'Popup setup',
      panelID: 'popup-setup-panel',
    },
    {
      id: 'help',
      content: 'Help',
      panelID: 'help-panel',
    }
  ];

  const tabsContent = [
    {
        content: <GuideTable/>
    },
    {
        content: <PopupSetup/>
    },
    {
        content: 'Content 3'
    }
  ];

  return (
    <div className="tabsPanelsWrapper">
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        {tabsContent[selected].content}
    </Tabs>
    </div>
  );
}