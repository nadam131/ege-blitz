import { useMutation } from "@blitzjs/rpc"
import { Box, Stack } from "@mui/material"

import { useCurrentUser } from "app/users/hooks/useCurrentUser"
import Form, { FORM_ERROR } from "../Form"
import { Fields } from "./Fields"
import { UserSettingsSchema } from "./validation"

import userSettings from "../../../../users/mutations/changeUserSettings"

export interface UserSettingsFormFields {
  firstName: string
  lastName: string
  nickName: string
  email: string
}

export const FormUserSettings = () => {
  const [userMutation] = useMutation(userSettings)
  const user = useCurrentUser()

  const initialValues: UserSettingsFormFields = {
    firstName: user?.firstName as string,
    lastName: user?.lastName as string,
    email: user?.email as string,
    nickName: user?.nickName as string,
  }

  return (
    <Box>
      <Stack spacing={4}>
        <Form
          submitText="Change settings"
          schema={UserSettingsSchema}
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              await userMutation(values)
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
