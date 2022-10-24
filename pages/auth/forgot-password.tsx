import { useMutation } from "@blitzjs/rpc"
import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mui/material"

import { ForgotPasswordForm } from "app/auth/components/ForgotPasswordForm"
import Layout from "app/core/layouts/Layout"
import { FORM_ERROR } from "app/core/components/Form"
import forgotPassword from "app/auth/mutations/forgotPassword"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <Layout title="Forgot Password">
      <Container maxWidth="sm">
        <ForgotPasswordForm
          onSubmit={async (values) => {
            try {
              await forgotPasswordMutation(values)
            } catch (error: any) {
              return {
                [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
              }
            }
          }}
        />
      </Container>
    </Layout>
  )
}

export default ForgotPasswordPage
