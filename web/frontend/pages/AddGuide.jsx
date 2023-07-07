import React, {useState, useCallback} from 'react';
import {
    LegacyCard,
    Page,
    Layout,
    Button,
    Toast, 
    Link
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import AddGuideForm from "../components/AddGuideForm";
  import Sidebar from "../components/Sidebar";
  import '../assets/style.css';

export default function AddGuidePage() {

    const [toastActive, setToastActive] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
  
    const toggleToastActive = useCallback(() => setToastActive((toastActive) => !toastActive), []);
    const toastMarkup = toastActive ? (
      <Toast content={toastMessage} onDismiss={toggleToastActive} />
    ) : null;

    return (
        <Page>
      <TitleBar title="Add new size guide" primaryAction={null} />
      <Layout>
        <Layout.Section>
        <Link url="/">&#8592; To all size guides</Link>
        <br/><br/>
        <AddGuideForm 
              changeToast={
                (toastMessage, toastActive) => {
                  setToastMessage(toastMessage);
                  setToastActive(toastActive);
                }
              } />
        </Layout.Section>
        <Sidebar/>
      </Layout>
      {toastMarkup}
    </Page>
    );
}