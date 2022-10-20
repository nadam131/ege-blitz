import { Box, Stack } from "@mui/material"
import { FormInputText } from "app/core/components/Form/FormInputText"
import React from "react"
import { useForm } from "react-hook-form"
import { SignUpFormFields } from "./SignUp"

export const Fields = ({ defaultValues }) => {
  return (
    <Box>
      <Stack spacing={2}>
        <FormInputText label="First Name" name="firstName" />
        <FormInputText label="Last Name" name="lastName" />
      </Stack>
    </Box>
  )
}
