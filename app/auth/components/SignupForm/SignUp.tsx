import { FC } from "react"
import { useMutation } from "@blitzjs/rpc"
import { Paper } from "@mui/material"

import { Form, FORM_ERROR } from "app/core/components/Form"

import signup from "../../mutations/signup"
import { SignupSchema } from "./validation"
import { Fields } from "."
import { DevTool } from "@hookform/devtools"

type Exams = "ege" | "oge"

export interface SignUpFormFields {
  firstName: string
  lastName: string
  //   nickName: string
  //   email: string
  //   age: string
  //   exam: Exams
  //   password: string
}

type SignupFormProps = {
  onSuccess?: () => void
}

const INITIAL_VALUES: SignUpFormFields = {
  firstName: "",
  lastName: "",
  //   email: "",
  //   nickName: "",
  //   password: "",
  //   age: "",
  //   exam: "ege",
}

export const SignupForm: FC<SignupFormProps> = ({ onSuccess }) => {
  const [signupMutation] = useMutation(signup)

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <h1>Registration</h1>
      <Form
        submitText="Create Account"
        schema={SignupSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={async (values) => {
          console.log(values, "values")
          try {
            await signupMutation(values)
            onSuccess?.()
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <Fields defaultValues={INITIAL_VALUES} />
      </Form>
    </Paper>
  )
}

export default SignupForm
