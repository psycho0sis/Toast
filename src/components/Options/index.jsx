import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { OPTIONS } from '@/constants/options';
import { CreateToastBtn } from '@/components/CreateToastBtn';

import {
  ListOfOptions,
  OptionsItem,
  Select,
  Option,
  Label,
  Form
} from "./styles"

export const Options = memo(({ options, setOptions, createNewToast }) => {

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setOptions(options => {
      return {
        ...options,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <Form>
      <ListOfOptions>
        {OPTIONS.map(option => (
          <OptionsItem key={ option.id }>
            <Label>{ option.title }</Label>
            <Select 
              value={ options[option.name] }
              onChange={ handleChange }
              name={option.name}
            >
              <Option value={ option.option.value1 }>{ option.option.content1 }</Option>
                <Option value={ option.option.value2 }>{ option.option.content2 }</Option>
                <Option value={ option.option.value3 }>{ option.option.content3 }</Option>
                <Option value={ option.option.value4 }>{ option.option.content4 }</Option>
                <Option value={ option.option.value5 }>{ option.option.content5 }</Option>
            </Select>
        </OptionsItem>
        ))}
      </ListOfOptions>
      <CreateToastBtn createNewToast={createNewToast} type={ options.type }/>
    </Form>
  );
});

Options.propTypes = {
  
};
