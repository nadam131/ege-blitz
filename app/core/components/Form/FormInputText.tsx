import { FC } from "react"
import { Controller } from "react-hook-form"

import { TextField, TextFieldProps } from "@mui/material"

export interface FormInputProps {
  name: string
  label: string
  control?: any
  setValue?: any
}

export const FormInputText: FC<TextFieldProps & FormInputProps> = ({ name, control, ...props }) => {
  console.log(control, "control")
  console.log(name, "name")
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          name={name}
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
