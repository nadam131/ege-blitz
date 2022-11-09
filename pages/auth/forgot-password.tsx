import { useMutation } from "@blitzjs/rpc"
import { BlitzPage } from "@blitzjs/next"
import { Box, Container } from "@mui/material"

import { ForgotPasswordForm } from "app/auth/components/ForgotPasswordForm"
import Layout from "app/core/layouts/Layout"
import { FORM_ERROR } from "app/core/components/Form"
import forgotPassword from "app/auth/mutations/forgotPassword"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <Layout title="Forgot Password">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Container maxWidth="sm">
          <ForgotPasswordForm />
        </Container>
      </Box>
    </Layout>
  )
}

export default ForgotPasswordPage
