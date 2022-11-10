import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React from "react"
import { withBlitz } from "app/blitz-client"
import { LoginForm } from "app/auth/components/LoginForm"
import { useRouter } from "next/router"
import { Box, Container, CssBaseline } from "@mui/material"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  const router = useRouter()

  const renderError = () => {
    if (error instanceof AuthenticationError) {
      return (
        <LoginForm
          onSuccess={() => {
            const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
            return router.push(next)
          }}
        />
      )
    } else if (error instanceof AuthorizationError) {
      return (
        <ErrorComponent
          statusCode={error.statusCode}
          title="Sorry, you are not authorized to access this"
        />
      )
    } else {
      return (
        <ErrorComponent
          statusCode={(error as any)?.statusCode || 400}
          title={error.message || error.name}
        />
      )
    }
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Container maxWidth="sm">{renderError()}</Container>
    </Box>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </>
  )
}

export default withBlitz(MyApp)
