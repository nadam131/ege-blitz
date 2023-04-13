import { useRouter } from "next/router"
import { isEmpty } from "lodash"

import { Dashboard } from "app/core/layouts/Dashboard/Dashboard"
import { DashboardUserSettings } from "app/core/layouts/Dashboard/DashboardUserSettings"
import { DashboardUsers } from "app/core/layouts/Dashboard/DashboardUsers"
import { DashboardTasks } from "app/core/layouts/Dashboard/DashboardTasks"
import { DashBoardTask } from "app/core/layouts/Dashboard/DashBoardTask"

const CATEGORIES = {
  reading: "Reading",
}

const TASKS = {
  "ege-12-18": "Задание 3",
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
    children: <DashboardTasks />,
  },
  task: {
    title: "Task",
    children: <DashBoardTask />,
  },
}

const isExam = (slug) => ["ege", "oge"].includes(slug)
const isExamSection = (slug) => ["reading"].includes(slug)
const isTask = (slug) => slug.length === 2

const DashboardPage = () => {
  const {
    query: { slug },
  } = useRouter()

  if (isEmpty(slug)) return

  // This is internal router
  if (Array.isArray(slug)) {
    const [appSection] = slug

    // Routes for exams: EGE, OGE
    if (isExam(appSection)) {
      const [_, examSection] = slug

      // For Reading and etc lists
      if (isExamSection(examSection)) {
        const [exam, examSection, examSectionSlug] = slug
        return (
          <Dashboard
            {...PAGES["exam"]}
            title={`${exam?.toUpperCase() as string} / ${CATEGORIES[examSection as string]} / ${
              TASKS[examSectionSlug as string]
            }`}
          />
        )
      }

      // For Exam Task
      if (isTask(slug)) {
        const [_, taskSlug] = slug
        return taskSlug
      }
    }
  }

  return <Dashboard {...PAGES[slug?.[0] as string]} />
}

DashboardPage.authenticate = true
DashboardPage.suppressFirstRenderFlicker = true

export default DashboardPage
