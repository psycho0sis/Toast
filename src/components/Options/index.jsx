import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  ListOfOptions,
  OptionsItem,
  CreateToastBtn,
  Select,
  Option,
  Label
} from "./styles"

export const Options = memo(({ options, setOptions, createNewToast }) => {

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setOptions(options => {
      return {
        ...options,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <form>
      <ListOfOptions>
        <OptionsItem>
            <Label>Title</Label>
            <Select 
              value={options.title}
              onChange={handleChange}
              name="title">
              <Option value="">-- Choose --</Option>
                <Option value="error">Error</Option>
                <Option value="warning">Warning</Option>
                <Option value="success">Success</Option>
                <Option value="info">Info</Option>
            </Select>
        </OptionsItem>
        <OptionsItem>
            <Label>Type</Label>
            <Select 
              value={options.type}
              onChange={handleChange}
              name="type">
              <Option value="">-- Choose --</Option>
                <Option value="error">Error</Option>
                <Option value="warning">Warning</Option>
                <Option value="success">Success</Option>
                <Option value="info">Info</Option>
            </Select>
        </OptionsItem>
        <OptionsItem>
            <Label>Position</Label>
            <Select 
              value={options.position}
              onChange={handleChange}
              name="position">
              <Option value="">-- Choose --</Option>
                <Option value="top-right">Top-right</Option>
                <Option value="top-left">Top-left</Option>
                <Option value="bottom-right">Bottom-right</Option>
                <Option value="bottom-left">Bottom-left</Option>
            </Select>
        </OptionsItem>
      </ListOfOptions>
      <CreateToastBtn
        onClick={createNewToast}
      >
        Create new toast
      </CreateToastBtn>
    </form>
  );
});

Options.propTypes = {
  
};
