import { Grid, Paper, Stack } from "@mui/material"
import { FormChangePassword } from "app/core/components/Form/FormChangePassword/FormChangePassword"
import { FormUserSettings } from "app/core/components/Form/FormUserSettings/FormUserSettings"
import { Suspense } from "react"

// TODO Убрать в другое место
export const DashboardUserSettings = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper
            elevation={0}
            sx={{ backgroundColor: "grey.50", padding: 4, color: "primary.main" }}
          >
            <Stack spacing={3}>
              <h2>User Account Information</h2>
              <Suspense fallback="Loading...">
                <FormUserSettings />
              </Suspense>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={0}
            sx={{ backgroundColor: "grey.50", padding: 4, color: "primary.main" }}
          >
            <Stack spacing={3}>
              <h2>Change password</h2>
              <Suspense fallback="Loading...">
                <FormChangePassword />
              </Suspense>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  )
}
