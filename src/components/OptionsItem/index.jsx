import React from 'react';
import PropTypes from 'prop-types';

import {
  OptionsItem,
  Select,
  Option,
  Label
} from "./styles"

export const OptionsItem = (props) => {
  return (
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
  );
};

OptionsItem.propTypes = {
  
};
