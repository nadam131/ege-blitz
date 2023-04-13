export interface WPTask {
  id: number
  date: string
  slug: string
  title: { rendered: string }
  exercise_difficult: string[]
  exercise_topic: string[]
  exercise_type: string[]
  year: string
  acf: {
    reading_text: string
    reading_task: string
    reading_number: string
  }
}

export interface Task {
  id: number
  date: string
  slug: string
  title: string
  difficult: string[]
  topic: string[]
  type: string[]
  year: string
  acf: {
    reading_text: string
    reading_task: string
    reading_number: string
  }
}
