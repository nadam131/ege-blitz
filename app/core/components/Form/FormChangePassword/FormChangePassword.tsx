import { useSession } from "@blitzjs/auth"
import { Box, Stack } from "@mui/material"
import { Exams } from "app/auth/components/SignupForm"
import { useCurrentUser } from "app/users/hooks/useCurrentUser"
import React from "react"
import Form, { FORM_ERROR } from "../Form"
import { Fields } from "./Fields"
import { ChangePasswordSchema } from "./validation"

import changePassword from "../../../../auth/mutations/changePassword"
import { useMutation } from "@blitzjs/rpc"

export interface ChangePasswordFormFields {
  currentPassword: string
  newPassword: string
}

export const FormChangePassword = () => {
  const [passwordMutation] = useMutation(changePassword)
  const user = useCurrentUser()

  const initialValues: ChangePasswordFormFields = {
    currentPassword: "",
    newPassword: "",
  }

  return (
    <Box>
      <Stack spacing={4}>
        <Form
          clearValues
          submitText="Change settings"
          schema={ChangePasswordSchema}
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              const response = await passwordMutation(values)
            } catch (error) {
              if (error.code === "P2002" && error.meta?.target?.includes("nickName")) {
                return { nickName: "This nickName is already being used" }
              } else {
                return { [FORM_ERROR]: error.toString() }
              }
            }
          }}
        >
          <Fields />
        </Form>
      </Stack>
    </Box>
  )
}
