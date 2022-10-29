import { Box, Divider, Stack } from "@mui/material"

import { FormInputText } from "app/core/components/Form/FormInputText"

export const Fields = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <FormInputText type="password" label="Current Password" name="currentPassword" />
        <FormInputText type="password" label="New Password" name="newPassword" />
        <Divider />
      </Stack>
    </Box>
  )
}
