import db from "db"
import { hash256 } from "@blitzjs/auth"
import forgotPassword from "./forgotPassword"
import previewEmail from "preview-email"
import { Ctx } from "@blitzjs/next"
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
jest.mock("preview-email", () => jest.fn())

describe("forgotPassword mutation", () => {
  it("does not throw error if user doesn't exist", async () => {
    await expect(forgotPassword({ email: "no-user@email.com" }, {} as Ctx)).resolves.not.toThrow()
  })

  it("works correctly", async () => {
    const user = await createTestUser(db, {
      data: {
        tokens: {
          create: {
            type: "RESET_PASSWORD",
            hashedToken: "token",
            expiresAt: new Date(),
            sentTo: "user@example.com",
          },
        },
      },
      include: { tokens: true },
    })

    // Invoke the mutation
    await forgotPassword({ email: user.email }, {} as Ctx)

    const tokens = await db.token.findMany({ where: { userId: user.id } })
    const token = tokens[0]
    if (!user.tokens[0]) throw new Error("Missing user token")
    if (!token) throw new Error("Missing token")

    // delete's existing tokens
    expect(tokens.length).toBe(1)

    expect(token.id).not.toBe(user.tokens[0].id)
    expect(token.type).toBe("RESET_PASSWORD")
    expect(token.sentTo).toBe(user.email)
    expect(token.hashedToken).toBe(hash256(generatedToken))
    expect(token.expiresAt > new Date()).toBe(true)
    expect(previewEmail).toBeCalled()
  })
})
