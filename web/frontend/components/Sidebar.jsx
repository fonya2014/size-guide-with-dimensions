import React from 'react';
import {
    LegacyCard,
    Layout,
    Button
} from "@shopify/polaris";
import { Support } from "../components/Support";

export default function Sidebar() {
    return (
        <Layout.Section secondary subdued>
            <LegacyCard sectioned title="Have questions?">
                <Support />
            </LegacyCard>
            <LegacyCard sectioned title="We would be happy to get feedback from you!">
                <Button primary url="#">Leave review</Button>
            </LegacyCard>
        </Layout.Section>
    )
}