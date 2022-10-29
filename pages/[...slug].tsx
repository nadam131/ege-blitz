import { useRouter } from "next/router"
import { isEmpty } from "lodash"

import { Dashboard } from "app/core/layouts/Dashboard/Dashboard"
import { DashboardUserSettings } from "app/core/layouts/Dashboard/DashboardUserSettings"

const PAGES = {
  profile: {
    title: "Profile Settings",
    children: <DashboardUserSettings />,
  },
}

const DashboardPage = () => {
  const {
    query: { slug },
  } = useRouter()

  if (isEmpty(slug)) return

  return <Dashboard {...PAGES[slug?.[0] as string]} />
}

DashboardPage.authenticate = true
DashboardPage.suppressFirstRenderFlicker = true

export default DashboardPage
