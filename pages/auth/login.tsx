import { useRouter } from "next/router"
import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mui/material"

import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Log Up">
      <Container maxWidth="sm">
        <LoginForm
          onSuccess={(_user) => {
            const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
            return router.push(next)
          }}
        />
      </Container>
    </Layout>
  )
}

export default LoginPage
