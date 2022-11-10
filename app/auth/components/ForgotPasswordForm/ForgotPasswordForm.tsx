import { FC } from "react"
import { AuthenticationError } from "blitz"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { Alert, AlertTitle, Divider, Paper } from "@mui/material"

import { Form, FORM_ERROR } from "app/core/components/Form"
import forgotPassword from "app/auth/mutations/forgotPassword"

import { ForgotPasswordSchema } from "./validation"
import { Fields } from "."

export interface ForgotPasswordFormFields {
  email: string
}

const INITIAL_VALUES: ForgotPasswordFormFields = {
  email: "",
}

export const ForgotPasswordForm: FC = () => {
  const [forgotMutation, { isSuccess }] = useMutation(forgotPassword)

  return isSuccess ? (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      Please, check your email for reset link and click it
    </Alert>
  ) : (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <h1>Forgot Password</h1>
      <Form
        submitText="Reset Password"
        schema={ForgotPasswordSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={async (values) => {
          try {
            await forgotMutation(values)
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <Fields />
        <Divider />
        <Link href={Routes.LoginPage()}>
          <a>Sign In?</a>
        </Link>
      </Form>
    </Paper>
  )
}

export default ForgotPasswordForm
