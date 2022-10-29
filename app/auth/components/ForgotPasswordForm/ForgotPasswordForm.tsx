import { FC } from "react"
import { AuthenticationError } from "blitz"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { Paper } from "@mui/material"

import { Form, FORM_ERROR } from "app/core/components/Form"
import forgotPassword from "app/auth/mutations/forgotPassword"

import { ForgotPasswordSchema } from "./validation"
import { Fields } from "."

export interface ForgotPasswordFormFields {
  email: string
}

type ForgotPasswordFormProps = {
  onSubmit?: any
}

const INITIAL_VALUES: ForgotPasswordFormFields = {
  email: "",
}

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onSubmit }) => {
  const [forgotMutation] = useMutation(forgotPassword)

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <h1>Forgot Password</h1>
      <Form
        submitText="Reset Password"
        schema={ForgotPasswordSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={async (values) => {
          try {
            await forgotMutation(values)
            onSubmit?.()
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
        <Link href={Routes.SignupPage()}>
          <a>Sign In?</a>
        </Link>
      </Form>
    </Paper>
  )
}

export default ForgotPasswordForm
