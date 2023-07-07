import React from 'react';
import PropTypes from 'prop-types';

export function SelectNameRender(props) {
  const nameOptions = [
    {
      type: 'body',
      values: [
        {
          name: "sleeve_length",
          label: "Sleeve length"
        },
        {
          name: "shoulder_length",
          label: "Shoulder length"
        }
      ]
    },
    {
      type: 'head',
      values: [
        {
          name: "head_circumference",
          label: 'Head circumference'
        }
      ]
    }
  ];
  let selected = props.selected; //selected VALUE

  let namesList = nameOptions.find(item => item.type === props.type);
  let valuesList = namesList.values;

  return <label>
    <select onChange={props.onchange} value={selected}>

      {valuesList.map(valuesList => (

        <option key={valuesList.name} value={valuesList.name} >
          {valuesList.label}
        </option>
      ))}
    </select>
  </label>
}

SelectNameRender.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.string,
  onchange: PropTypes.func
};