import React from 'react';
import {TextFieldRender} from "./textFieldRender";

export function AddSize(props) {
    return (
        <TextFieldRender name="size_literal" placeholder="M" value="{shippingMethod.region}" oninput={(e) => handleShippingCountryRegionChange(e, index)} />
    )
}