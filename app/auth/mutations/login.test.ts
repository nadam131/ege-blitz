import db from "db"
import { TEST_PASSWORD, TEST_USER } from "app/constants/user"

import { authenticateUser } from "./login"
import { createTestUser } from "test/utils/createTestUser"

beforeEach(async () => {
  await db.$reset()
})

const generatedToken = "plain-token"
jest.mock("@blitzjs/auth", () => ({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...jest.requireActual<Record<string, unknown>>("@blitzjs/auth")!,
  generateToken: () => generatedToken,
}))

describe("login mutation", () => {
  it("works correctly", async () => {
    await createTestUser(db)

    const authUser = await authenticateUser(TEST_USER.email, TEST_PASSWORD)
    expect(authUser.email).toBe(TEST_USER.email)
  })
})
