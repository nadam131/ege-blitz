import { Box, Divider, Stack } from "@mui/material"

import { FormInputText } from "app/core/components/Form/FormInputText"

export const Fields = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <FormInputText label="Email" name="email" />
        <Divider />
      </Stack>
    </Box>
  )
}
