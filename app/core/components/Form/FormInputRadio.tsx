import { FC } from "react"
import { Controller } from "react-hook-form"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

import { FormInputProps } from "./FormInputText"

export const FormInputRadio: FC<FormInputProps & { options: any }> = ({
  name,
  control,
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
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  )
}
