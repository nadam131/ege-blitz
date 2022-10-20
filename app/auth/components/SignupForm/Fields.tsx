import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"

export const Fields = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues })
  const { handleSubmit, reset, control, setValue, watch } = methods
  return (
    <Box>
      <Stack spacing={2}>
        <TextField
          required
          name="firstName"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          name="lastName"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          name="nickName"
          id="outlined-basic"
          label="Nickname"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
        />
        <Divider />
        <FormControl required>
          <FormLabel id="exam">Экзамен</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="exam">
            <FormControlLabel value="ege" control={<Radio size="small" />} label="ЕГЭ" />
            <FormControlLabel value="oge" control={<Radio size="small" />} label="ОГЭ" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  )
}
