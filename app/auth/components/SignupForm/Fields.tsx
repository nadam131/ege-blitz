import { Box, Divider, Stack } from "@mui/material"

import { FormInputRadio } from "app/core/components/Form/FormInputRadio"
import { FormInputText } from "app/core/components/Form/FormInputText"

export const Fields = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <FormInputText label="First Name" name="firstName" />
        <FormInputText label="Last Name" name="lastName" />
        <FormInputText label="Nick" name="nickName" />
        <FormInputText type="email" label="Email" name="email" />
        <FormInputText type="password" label="Password" name="password" />
        <Divider />
        <FormInputRadio
          options={[
            { label: "OGE", value: "oge" },
            { label: "EGE", value: "ege" },
          ]}
          label="Choose exam"
          name="exam"
        />
      </Stack>
    </Box>
  )
}
