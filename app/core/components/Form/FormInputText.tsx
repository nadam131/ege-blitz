import { FC } from "react"
import { Controller } from "react-hook-form"

import { TextField, TextFieldProps } from "@mui/material"

export interface FormInputProps {
  name: string
}

export const FormInputText: FC<TextFieldProps & FormInputProps> = ({ name, ...props }) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          variant="filled"
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
