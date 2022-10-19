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

// type Props = {}

export const Fields = () => {
  return (
    <Box>
      <Stack spacing={2}>
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
          name="nickname"
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
          <FormLabel id="demo-row-radio-buttons-group-label">Экзамен</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="ege" control={<Radio size="small" />} label="ЕГЭ" />
            <FormControlLabel value="oge" control={<Radio size="small" />} label="ОГЭ" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  )
}
