import React, { useState, useCallback } from 'react';
import {
  LegacyCard,
  Page,
  Layout,
  Button,
  Toast
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import MainTabs from "../components/Tabs";
import { Support } from "../components/Support";
import AddGuideForm from "../components/AddGuideForm";
import '../assets/style.css';

export default function HomePage() {

  const [toastActive, setToastActive] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const toggleToastActive = useCallback(() => setToastActive((toastActive) => !toastActive), []);
  const toastMarkup = toastActive ? (
    <Toast content={toastMessage} onDismiss={toggleToastActive} />
  ) : null;

  const { t } = useTranslation();
  return (
    <Page>
      <TitleBar title="Size guide with dimensions" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <MainTabs/>
          <Button primary url="#">New size guide</Button>
          <AddGuideForm 
              changeToast={
                (toastMessage, toastActive) => {
                  setToastMessage(toastMessage);
                  setToastActive(toastActive);
                }
              } />
        </Layout.Section>
        <Layout.Section secondary subdued>
          <LegacyCard sectioned title="Have questions?">
            <Support />
          </LegacyCard>
          <LegacyCard sectioned title="We would be happy to get feedback from you!">
            <Button primary url="#">Leave review</Button>
          </LegacyCard>
        </Layout.Section>
      </Layout>
      {toastMarkup}
    </Page>
  );
}
