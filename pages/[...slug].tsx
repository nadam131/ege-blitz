import { Dashboard } from "app/core/layouts/Dashboard"

const DashboardPage = ({ children }) => {
  return <div>{children}</div>
}

DashboardPage.authenticate = true
DashboardPage.suppressFirstRenderFlicker = true
DashboardPage.getLayout = (page) => <Dashboard>{page}</Dashboard>

export default DashboardPage
