import { Exams } from "./exam"

export interface User {
  firstName: string
  lastName: string
  nickName: string
  email: string
  exam: Exams
  id?: number
}
