import React, { useState } from 'react';
import {
    Form, FormLayout,
    DataTable,
    Button
  } from "@shopify/polaris";

  import {SelectTypeRender} from "./SelectTypeRender";
  import {SelectNameRender} from "./SelectNameRender";
  import {TextFieldRender} from "./textFieldRender";

  export default function AddGuideForm(props) {

    //const parsedMetafield = parseMetafield(props.data.dbResult.body.data.appInstallation.metafield);
  //const [settings, setSettings] = useState(parsedMetafield);

  const [settings, setSettings] = useState({
    type:"body",
    name:"Sleeve length",
    size_literal: "M",
    size_numeric: "38",
  });

  const handleSelectTypeChange = (e) => {
    setSettings({ ...settings, type: e.target.value });
  }

  const handleSelectNameChange = (e) => {
    setSettings({ ...settings, name: e.target.value });
  }

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

  const handleSizeNumericChange = (e, index) => {
    const reSizeNumeric = /^[0-9, ]*$/;
    const fieldName = e.target.name;
    let fieldValue = e.target.value;
    if (reSizeNumeric.test(fieldValue)) {
      settings.size_numeric = fieldValue;
      setSettings({ ...settings, size_numeric: settings.size_numeric });
    } else {
      props.changeToast('Use only numbers', true);
    }
  }

  const rows = [
    [

    <SelectTypeRender name="guide_type" label="Type" selected={settings.type} onchange={handleSelectTypeChange} />,

    <SelectNameRender name="guide_name" label="Name" type={settings.type} selected={settings.name} onchange={handleSelectNameChange} />,

    <div className="inputsOneCol">
    <TextFieldRender name="size_literal" placeholder="M" value={settings.size_literal} oninput={(e) => handleSizeLiteralChange(e, index)} />
    <TextFieldRender name="size_numeric" placeholder="38" value={settings.size_numeric} oninput={(e) => handleSizeNumericChange(e, index)} />
    </div>,

    <div className="inputsOneCol">
    <TextFieldRender name="dimention_cm" placeholder="46" value={settings.dimention_cm} oninput={(e) => handleSizeLiteralChange(e, index)} />
    <TextFieldRender name="dimention_inches" placeholder="18,1102" value={settings.size_numeric} oninput={(e) => handleSizeNumericChange(e, index)} />
    </div>,

    <Button>Remove</Button>
  ]
  ];

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

                </FormLayout>
        </Form>
    );
  }