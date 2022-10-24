import { FC } from "react"
import { useMutation } from "@blitzjs/rpc"
import { Paper } from "@mui/material"

import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"

import { LoginSchema } from "./validation"
import { Fields } from "."

export interface LoginFormFields {
  email: string
  password: string
}

type LoginFormProps = {
  onSuccess?: (_user: any) => any
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
            const user = await loginMutation(values)

            onSuccess?.(user)
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <Fields />
      </Form>
    </Paper>
  )
}

export default LoginForm
