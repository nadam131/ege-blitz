import Layout from "app/core/layouts/Layout"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { ResetPassword } from "app/auth/validations"
import resetPassword from "app/auth/mutations/resetPassword"
import { BlitzPage, Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Link from "next/link"
import { ResetPasswordForm } from "app/auth/components/ResetPasswordForm"
import { Container } from "@mui/material"

const ResetPasswordPage: BlitzPage = () => {
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword)

  return (
    <Layout title="Log Up">
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
    </Layout>
  )
}

ResetPasswordPage.redirectAuthenticatedTo = "/"
ResetPasswordPage.getLayout = (page) => <Layout title="Reset Your Password">{page}</Layout>

export default ResetPasswordPage
