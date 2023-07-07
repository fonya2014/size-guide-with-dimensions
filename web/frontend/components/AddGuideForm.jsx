import React, { useState } from 'react';
import {
  Form, FormLayout,
  DataTable,
  Button
} from "@shopify/polaris";

import { SelectTypeRender } from "./SelectTypeRender";
import { SelectNameRender } from "./SelectNameRender";
import { TextFieldRender } from "./textFieldRender";

export default function AddGuideForm(props) {

  //const parsedMetafield = parseMetafield(props.data.dbResult.body.data.appInstallation.metafield);
  //const [settings, setSettings] = useState(parsedMetafield);

  const [settings, setSettings] = useState({
    guides: [
      {
        type: "body",
        name: "Sleeve length",
        size_literal: "M",
        size_numeric: "38",
        dimention_cm: "46",
        dimention_inches: "18.15"
      },
      {
        type: "head",
        name: "Head circumstances",
        size_literal: "S",
        size_numeric: "30",
        dimention_cm: "23",
        dimention_inches: "10"
      }
    ]
  });

  /* change type of the guide (body) */
  const handleSelectTypeChange = (e) => {
    setSettings({ ...settings, type: e.target.value });
  }

  /* change name of the guide (Sleeve length) */
  const handleSelectNameChange = (e) => {
    setSettings({ ...settings, name: e.target.value });
  }

  /* change size of the guide (M) */
  const handleSizeLiteralChange = (e, index) => {
    const reSizeLiteral = /^[A-Za-z, ]*$/;
    const fieldName = e.target.name;
    let fieldValue = e.target.value;
    if (reSizeLiteral.test(fieldValue)) {
      settings.size_literal = fieldValue;
      setSettings({ ...settings, size_literal: settings.size_literal });
    } else {
      props.changeToast('Use only latin letters', true);
    }
  }

  /* change size of the guide (38) */
  const handleSizeNumericChange = (e, index) => {
    const reSizeNumeric = /^[0-9,. ]*$/;
    const fieldName = e.target.name;
    let fieldValue = e.target.value;
    if (reSizeNumeric.test(fieldValue)) {
      settings.size_numeric = fieldValue;
      setSettings({ ...settings, size_numeric: settings.size_numeric });
    } else {
      props.changeToast('Use only numbers', true);
    }
  }

  /* Add new row to the guide */
  const handleAddRow = () => {
    setSettings({
      ...settings, guides: [...settings.guides, {
        type: "body",
        name: "Sleeve length",
        size_literal: "",
        size_numeric: "",
        dimention_cm: "",
        dimention_inches: ""
      }]
    });
  }

  /* Remove the row */
  const handleRemoveRow = (index) => {
    settings.guides.splice(index, 1);
    setSettings({ guides: settings.guides });
  }

  /* geneate rows from the DB */
  const rows =
    settings.guides?.map((guide) => {
      return [
        <SelectTypeRender name="guide_type" label="Type" selected={guide.type} onchange={handleSelectTypeChange} />,
        <SelectNameRender name="guide_name" label="Name" type={guide.type} selected={settings.name} onchange={handleSelectNameChange} />,
        <div className="inputsOneCol">
          <TextFieldRender name="size_literal" placeholder="M" value={guide.size_literal} oninput={(e) => handleSizeLiteralChange(e, index)} isDisabled={false} />
          <TextFieldRender name="size_numeric" placeholder="38" value={guide.size_numeric} oninput={(e) => handleSizeNumericChange(e, index)} isDisabled={false} />
        </div>,
        <div className="inputsOneCol">
          <TextFieldRender name="dimention_cm" placeholder="46" value={guide.dimention_cm} oninput={(e) => handleSizeLiteralChange(e, index)} isDisabled={false} label="cm" />
          <TextFieldRender name="dimention_inches" placeholder="18,1102" value={guide.dimention_inches} oninput={(e) => handleSizeNumericChange(e, index)} isDisabled={true} label="inches" />
        </div>,
        <Button onClick={handleRemoveRow}>Remove</Button>
      ];
    });

  /* Add the row with the Add row button */
  rows.push([<Button onClick={handleAddRow}>Add row</Button>]);

  /* render adding form */
  return (
    <Form /*onSubmit={handleSubmit}*/>
      <FormLayout>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text'
          ]}
          headings={[
            'Type',
            'Name',
            'Size',
            'Dimensions',
            ''
          ]}
          rows={rows}
        />
        <Button primary>Save</Button>
      </FormLayout>
    </Form>
  );
}