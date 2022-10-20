import { FC } from "react"
import { Controller } from "react-hook-form"

import { TextField, TextFieldProps } from "@mui/material"

export interface FormInputProps {
  name: string
  label: string
  control: any
  setValue?: any
}

export const FormInputText: FC<TextFieldProps & FormInputProps> = ({ name, control, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          inputProps={{
            autoComplete: "new-password",
          }}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          {...props}
        />
      )}
    />
  )
}
