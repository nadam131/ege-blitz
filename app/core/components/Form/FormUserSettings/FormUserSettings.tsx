import { useSession } from "@blitzjs/auth"
import { Box, Stack } from "@mui/material"
import { Exams } from "app/auth/components/SignupForm"
import { useCurrentUser } from "app/users/hooks/useCurrentUser"
import React from "react"
import Form, { FORM_ERROR } from "../Form"
import { Fields } from "./Fields"
import { UserSettingsSchema } from "./validation"

import userSettings from "../../../../users/mutations/changeUserSettings"
import { useMutation } from "@blitzjs/rpc"

export interface UserSettingsFormFields {
  firstName: string
  lastName: string
  nickName: string
  email: string
  // exam: Exams
  // password: string
}

type SignupFormProps = {
  onSuccess?: () => void
}

export const FormUserSettings = () => {
  const [userMutation] = useMutation(userSettings)
  const user = useCurrentUser()

  const initialValues: UserSettingsFormFields = {
    firstName: user?.firstName as string,
    lastName: user?.lastName as string,
    email: user?.email as string,
    nickName: user?.nickName as string,
    // password: "",
    // exam: user?.exam as Exams,
  }

  return (
    <Box>
      <Stack spacing={4}>
        <Form
          submitText="Change settings"
          schema={UserSettingsSchema}
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(values, "values")

            try {
              const response = await userMutation(values)
              console.log(response, "response")
            } catch (error) {
              if (error.code === "P2002" && error.meta?.target?.includes("nickName")) {
                return { nickName: "This nickName is already being used" }
              } else {
                return { [FORM_ERROR]: error.toString() }
              }
            }

            // try {
            //   await signupMutation(values)
            //   onSuccess?.()
            // } catch (error: any) {
            //   if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            //     return { email: "This email is already being used" }
            //   } else {
            //     return { [FORM_ERROR]: error.toString() }
            //   }
            // }
          }}
        >
          <Fields />
        </Form>
      </Stack>
    </Box>
  )
}
