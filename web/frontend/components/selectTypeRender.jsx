import React from 'react';
import PropTypes from 'prop-types';

export function SelectTypeRender(props) {
  const typeOptions = [
    { value: 'body', text: 'Body' },
    { value: 'head', text: 'Head' }
  ];
  let selected = props.selected; //selected VALUE

  return <label>
    <select onChange={props.onchange} value={selected}>
      {typeOptions.map(typeOptions => (
        <option key={typeOptions.value} value={typeOptions.value} >
          {typeOptions.text}
        </option>
      ))}
    </select>
  </label>
} 

SelectTypeRender.propTypes = { 
  label: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.string,
  onchange: PropTypes.func
};