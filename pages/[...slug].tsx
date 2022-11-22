import { useRouter } from "next/router"
import { isEmpty } from "lodash"

import { Dashboard } from "app/core/layouts/Dashboard/Dashboard"
import { DashboardUserSettings } from "app/core/layouts/Dashboard/DashboardUserSettings"
import { DashboardUsers } from "app/core/layouts/Dashboard/DashboardUsers"

const CATEGORIES = {
  reading: "Reading",
}

const TASKS = {
  3: "Задание 3",
}

const PAGES = {
  profile: {
    title: "Profile Settings",
    children: <DashboardUserSettings />,
  },
  users: {
    title: "Users",
    children: <DashboardUsers />,
  },
  exam: {
    title: "Title of Exam",
    children: () => "render exam",
  },
}

const DashboardPage = () => {
  const {
    query: { slug },
  } = useRouter()

  if (isEmpty(slug)) return

  if (["oge", "ege"].includes(slug?.[0] as string)) {
    return (
      <Dashboard
        {...PAGES["exam"]}
        title={`${slug?.[0]?.toUpperCase() as string} / ${CATEGORIES[slug?.[1] as string]} / ${
          TASKS[slug?.[2] as string]
        }`}
      />
    )
  }

  return <Dashboard {...PAGES[slug?.[0] as string]} />
}

DashboardPage.authenticate = true
DashboardPage.suppressFirstRenderFlicker = true

export default DashboardPage
