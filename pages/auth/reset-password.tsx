import Link from "next/link"
import { BlitzPage, Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import { Box, Container } from "@mui/material"

import Layout from "app/core/layouts/Layout"
import resetPassword from "app/auth/mutations/resetPassword"
import { ResetPasswordForm } from "app/auth/components/ResetPasswordForm"

const ResetPasswordPage: BlitzPage = () => {
  const [_, { isSuccess }] = useMutation(resetPassword)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Container maxWidth="sm">
        {isSuccess ? (
          <div>
            <h2>Password Reset Successfully</h2>
            <p>
              Go to the <Link href={Routes.Home()}>homepage</Link>
            </p>
          </div>
        ) : (
          <ResetPasswordForm />
        )}
      </Container>
    </Box>
  )
}

ResetPasswordPage.redirectAuthenticatedTo = "/"
ResetPasswordPage.getLayout = (page) => <Layout title="Reset Your Password">{page}</Layout>

export default ResetPasswordPage
