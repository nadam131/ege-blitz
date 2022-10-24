import { useRouter } from "next/router"
import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mui/material"

import Layout from "app/core/layouts/Layout"
import SignupForm from "app/auth/components/SignupForm/SignUpForm"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  const handleNavigateToHome = () => router.push("/")

  return (
    <Layout title="Sign Up">
      <Container maxWidth="sm">
        <SignupForm onSuccess={handleNavigateToHome} />
      </Container>
    </Layout>
  )
}

export default SignupPage
