import React from 'react';
import PropTypes from 'prop-types';

// render text field
export function TextFieldRender(props) {
  return <label>
    <input type="text"
      name={props.name}
      value={props.value}
      onInput={props.oninput}
      placeholder={props.placeholder}
    />
    <span>{props.label}</span>
  </label>
}

TextFieldRender.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  oninput: PropTypes.func
};