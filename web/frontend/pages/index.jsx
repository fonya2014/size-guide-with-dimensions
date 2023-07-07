import React from 'react';
import {
  LegacyCard,
  Page,
  Layout,
  Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import MainTabs from "../components/Tabs";
import Sidebar from "../components/Sidebar";
import '../assets/style.css';

export default function HomePage() {

  const { t } = useTranslation();
  return (
    <Page>
      <TitleBar title="Size guide with dimensions" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <MainTabs />
          <Button primary url="/AddGuide">New size guide</Button>
        </Layout.Section>
        <Sidebar/>
      </Layout>
    </Page>
  );
}
