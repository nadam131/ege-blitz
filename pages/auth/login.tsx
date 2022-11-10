import { useRouter } from "next/router"
import { BlitzPage } from "@blitzjs/next"
import { Box, Container } from "@mui/material"

import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Log Up">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Container maxWidth="sm">
          <LoginForm
            onSuccess={() => {
              const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
              return router.push(next)
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export default LoginPage
