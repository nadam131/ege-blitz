import db from "db"
import { SecurePassword } from "@blitzjs/auth"
import { TEST_PASSWORD, TEST_USER } from "app/constants/user"

import changePassword from "./changePassword"
import login from "./login"
import { createTestUser } from "test/utils/createTestUser"

beforeEach(async () => {
  await db.$reset()
})

const mockCtx: any = {
  session: {
    $create: jest.fn,
    $authorize: jest.fn,
  },
}

const generatedToken = "plain-token"
jest.mock("@blitzjs/auth", () => ({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...jest.requireActual<Record<string, unknown>>("@blitzjs/auth")!,
  generateToken: () => generatedToken,
}))

describe("changePassword mutation", () => {
  it("works correctly", async () => {
    const user = await createTestUser(db)

    const newPassword = "12345678910"
    await changePassword(
      { currentPassword: TEST_PASSWORD, newPassword: newPassword },
      { ...mockCtx, session: { userId: user.id, ...mockCtx.session } }
    )

    expect((await login({ email: user.email, password: newPassword }, mockCtx)).email).toBe(
      user.email
    )
  })
})
