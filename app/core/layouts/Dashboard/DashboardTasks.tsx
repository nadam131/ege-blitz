import { Stack, Typography } from "@mui/material"
import { TableTasks } from "app/core/components/Table/TableTasks/TableTasks"
import { useWPTasks, useWPTaskType } from "app/hooks/useWP"
import { Task } from "app/types/task"
import { useRouter } from "next/router"

export const DashboardTasks = () => {
  const {
    query: { slug },
  } = useRouter()

  const { type } = useWPTaskType(slug?.[2])
  const { tasks } = useWPTasks("reading", slug?.[2])

  if (!type || !tasks) return <div>loading</div>

  const prepareTableTaskList = (tasks: Task[]) => {
    return tasks.map((task: Task) => [task.title, task.topic?.[0], task.difficult?.[0], task.slug])
  }

  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2">Задания ЕГЭ ({type.name})</Typography>
        <Typography>{type.description}</Typography>
      </Stack>
      <TableTasks data={prepareTableTaskList(tasks)} />
    </>
  )
}
