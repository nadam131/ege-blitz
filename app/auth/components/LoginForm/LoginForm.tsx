import { FC } from "react"
import { useMutation } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import { Paper } from "@mui/material"

import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"

import { LoginSchema } from "./validation"
import { Fields } from "."
import Link from "next/link"
import { Routes } from "@blitzjs/next"

export interface LoginFormFields {
  email: string
  password: string
}

type LoginFormProps = {
  onSuccess?: () => void
}

const INITIAL_VALUES: LoginFormFields = {
  email: "",
  password: "",
}

export const LoginForm: FC<LoginFormProps> = ({ onSuccess }) => {
  const [loginMutation] = useMutation(login)

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <h1>Login</h1>
      <Form
        submitText="Login"
        schema={LoginSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            onSuccess?.()
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
        <Link href={Routes.ForgotPasswordPage()}>
          <a>Forgot your password?</a>
        </Link>
        <Link href={Routes.SignupPage()}>
          <a>Sign Up?</a>
        </Link>
      </Form>
    </Paper>
  )
}

export default LoginForm
