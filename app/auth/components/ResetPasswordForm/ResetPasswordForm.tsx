import { FC } from "react"
import { useMutation } from "@blitzjs/rpc"
import { useRouterQuery } from "@blitzjs/next"
import { Paper } from "@mui/material"

import { Form, FORM_ERROR } from "app/core/components/Form"
import resetPassword from "app/auth/mutations/resetPassword"

import { ResetPasswordSchema } from "./validation"
import { Fields } from "."

export interface ResetPasswordFormFields {
  password: string
}

type ResetPasswordFormProps = {
  onSuccess?: () => any
}

const INITIAL_VALUES: ResetPasswordFormFields = {
  password: "",
}

export const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ onSuccess }) => {
  const [resetMutation] = useMutation(resetPassword)
  const { token } = useRouterQuery()

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <h1>Set new password</h1>
      <Form
        submitText="Reset Password"
        schema={ResetPasswordSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={async (values) => {
          try {
            await resetMutation({
              password: values.password,
              passwordConfirmation: values.password,
              token: token as string,
            })
            onSuccess?.()
          } catch (error: any) {
            if (error.name === "ResetPasswordError") {
              return {
                [FORM_ERROR]: error.message,
              }
            } else {
              return {
                [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
              }
            }
          }
        }}
      >
        <Fields />
      </Form>
    </Paper>
  )
}

export default ResetPasswordForm
