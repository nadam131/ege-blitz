import db from "db"
import { TEST_PASSWORD, TEST_USER } from "app/constants/user"

import signup from "./signup"
import { authenticateUser } from "./login"

beforeEach(async () => {
  await db.$reset()
})

const mockCtx: any = {
  session: {
    $create: jest.fn,
  },
}

const generatedToken = "plain-token"
jest.mock("@blitzjs/auth", () => ({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...jest.requireActual<Record<string, unknown>>("@blitzjs/auth")!,
  generateToken: () => generatedToken,
}))

describe("signup mutation", () => {
  it("works correctly", async () => {
    await signup({ ...TEST_USER, password: TEST_PASSWORD }, mockCtx)
    const authUser = await authenticateUser(TEST_USER.email, TEST_PASSWORD)
    expect(authUser.email).toBe(TEST_USER.email)
  })
})
