import { Task, WPTask } from "app/types/task"

export const mapTask = (task: WPTask): Task => ({
  ...task,
  title: task.title.rendered,
  difficult: task.exercise_difficult,
  topic: task.exercise_topic,
  type: task.exercise_type,
})
