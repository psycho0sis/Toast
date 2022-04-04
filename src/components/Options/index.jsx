import React from 'react';
import PropTypes from 'prop-types';

import { CreateToastBtn } from '@/components/CreateToastBtn';
import { OPTIONS } from '@/constants/options';

import {
  ListOfOptions,
  OptionsItem,
  Select,
  Option,
  Label,
  Form,
  Input,
  InputCheckbox
} from './styles';

export const Options = ({ options, setOptions, createNewToast }) => {
  const { autoHidden, type, title, description } = options;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOptions((options) => {
      return {
        ...options,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  };

  return (
    <Form>
      <ListOfOptions>
        <OptionsItem>
          <Label>Title</Label>
          <Input
            type='text'
            placeholder='Title'
            onChange={handleChange}
            name='title'
            value={title}
          />
        </OptionsItem>
        <OptionsItem>
          <Label>Description</Label>
          <Input
            type='text'
            placeholder='Description'
            onChange={handleChange}
            name='description'
            value={description}
          />
        </OptionsItem>
        {OPTIONS.map(({ id, title, selectName, option }) => (
          <OptionsItem key={id}>
            <Label>{title}</Label>
            <Select
              value={options[selectName]}
              onChange={handleChange}
              name={selectName}
            >
              <Option value={option.value1}>{option.content_1}</Option>
              <Option value={option.value2}>{option.content_2}</Option>
              <Option value={option.value3}>{option.content_3}</Option>
              <Option value={option.value4}>{option.content_4}</Option>
              <Option value={option.value5}>{option.content_5}</Option>
            </Select>
          </OptionsItem>
        ))}
        <OptionsItem>
          <Label>Autohidden</Label>
          <InputCheckbox
            type='checkbox'
            checked={autoHidden}
            onChange={handleChange}
            name='autoHidden'
          />
        </OptionsItem>
      </ListOfOptions>
      <CreateToastBtn
        createNewToast={createNewToast}
        type={type}
      />
    </Form>
  );
};

Options.propTypes = {
  options: PropTypes.object,
  setOptions: PropTypes.func,
  createNewToast: PropTypes.func
};
