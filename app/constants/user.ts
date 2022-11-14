import { Exams } from "app/types/exam"

export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
}

export const ADMIN_USER = {
  firstName: "Lift",
  lastName: "Liftenok",
  nickName: "admin",
  email: "admin@ttester.ru",
  exam: "ege" as Exams,
  role: USER_ROLE.ADMIN,
}

export const TEST_USER = {
  firstName: "Nikita",
  lastName: "Adamov",
  nickName: "nadam131",
  email: "test@test.ru",
  exam: "ege" as Exams,
}
