import { useForm } from "react-hook-form"
import { useMutation } from "@blitzjs/rpc"
import { Button, Paper } from "@mui/material"

import { FormInputRadio } from "app/core/components/Form/FormInputRadio"
import { FormInputText } from "app/core/components/Form/FormInputText"
import signup from "app/auth/mutations/signup"
import { FORM_ERROR } from "app/core/components/Form"

type Exams = "ege" | "oge"
interface IFormInput {
  firstName: string
  lastName: string
  nickName: string
  email: string
  age: string
  exam: Exams | null
  password: string
}

const defaultValues: IFormInput = {
  firstName: "",
  lastName: "",
  nickName: "",
  email: "",
  age: "",
  exam: null,
  password: "",
}

const examsOptions: { label: string; value: Exams }[] = [
  {
    label: "EGE",
    value: "ege",
  },
  {
    label: "OGE",
    value: "oge",
  },
]

const SignupForm = () => {
  const methods = useForm<IFormInput>({ defaultValues })
  const [signupMutation] = useMutation(signup)
  const { handleSubmit, getValues, reset, control, setValue, watch } = methods

  const onSubmit = async (values) => {
    try {
      console.log(getValues(), "getValues")
      await signupMutation(getValues())
    } catch (error: any) {
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        return { email: "This email is already being used" }
      } else {
        return { [FORM_ERROR]: error.toString() }
      }
    }
  }

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <h2>Registration</h2>
      <FormInputText name="firstName" control={control} label="First Name" />
      <FormInputText name="lastName" control={control} label="Last Name" />
      <FormInputText name="email" control={control} label="Email" />
      <FormInputText name="nickName" control={control} label="Nickname" />
      <FormInputText name="age" control={control} label="Age" />
      <FormInputText name="password" control={control} type="password" label="Password" />
      <FormInputRadio name="exam" control={control} label={"Exam"} options={examsOptions} />

      <Button onClick={onSubmit} variant="contained">
        Submit
      </Button>
    </Paper>
  )
}

// import { Form, FORM_ERROR } from "app/core/components/Form"
// import signup from "app/auth/mutations/signup"
// import { Signup } from "app/auth/validations"
// import { useMutation } from "@blitzjs/rpc"

// import { Fields } from "."
// import { Container } from "@mui/material"

// type SignupFormProps = {
//   onSuccess?: () => void
// }

// export const SignupForm = (props: SignupFormProps) => {
//   console.log(props, "props")
//   const [signupMutation] = useMutation(signup)
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     nickName: "",
//     password: "",
//     exam: "ege",
//   }
//   return (
//     <Container maxWidth="sm">
//       <h1>Registration</h1>
//       <Form
//         submitText="Create Account"
//         schema={Signup}
//         initialValues={initialValues}
//         onSubmit={async (values) => {
//           try {
//             await signupMutation(values)
//             props.onSuccess?.()
//           } catch (error: any) {
//             if (error.code === "P2002" && error.meta?.target?.includes("email")) {
//               // This error comes from Prisma
//               return { email: "This email is already being used" }
//             } else {
//               return { [FORM_ERROR]: error.toString() }
//             }
//           }
//         }}
//       >
//         <Fields />
//       </Form>
//     </Container>
//   )
// }

// export default SignupForm
