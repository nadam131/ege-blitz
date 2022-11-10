import { FC } from "react"
import { Controller } from "react-hook-form"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

import { FormInputProps } from "./FormInputText"

export const FormInputRadio: FC<FormInputProps & { options: any; label: string }> = ({
  name,
  label,
  options,
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ))
  }

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  )
}
