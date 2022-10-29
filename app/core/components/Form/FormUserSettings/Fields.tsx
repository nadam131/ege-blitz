import { Box, Divider, Stack } from "@mui/material"

import { FormInputText } from "app/core/components/Form/FormInputText"

export const Fields = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <FormInputText label="Email" name="email" disabled />
        <FormInputText label="First Name" name="lastName" />
        <FormInputText label="Last Name" name="firstName" />
        <FormInputText label="Nickname" name="nickName" />
        <Divider />
      </Stack>
    </Box>
  )
}
