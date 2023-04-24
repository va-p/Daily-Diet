import React from 'react';
import { TextInputProps } from 'react-native';
import { Label, Input, ErrorMessage } from './styles';

import { Control, Controller, FieldError } from 'react-hook-form';

export interface ControlledInputProps extends TextInputProps {
  label: string;
  name: string;
  control: Control<any>;
  error?: FieldError;
}

export function ControlledInput({
  label,
  name,
  control,
  error,
  ...rest
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <Label>{label}</Label>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          <Input onChangeText={onChange} value={value} {...rest} />
        </>
      )}
    />
  );
}
