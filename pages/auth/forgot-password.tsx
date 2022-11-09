import { BlitzPage } from "@blitzjs/next"
import { Box, Container } from "@mui/material"

import { ForgotPasswordForm } from "app/auth/components/ForgotPasswordForm"
import Layout from "app/core/layouts/Layout"

const ForgotPasswordPage: BlitzPage = () => {
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
