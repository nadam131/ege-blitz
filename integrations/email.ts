const Sib = require("sib-api-v3-sdk")

export const sendEmail = async (email, subject, htmlContent) => {
  const client = Sib.ApiClient.instance
  const apiKey = client.authentications["api-key"]
  apiKey.apiKey = process.env.SEND_IT_BLUE_API_TOKEN

  const tranEmailApi = new Sib.TransactionalEmailsApi()

  const sender = {
    email: "info@ttester.ru",
    name: "Liftenok",
  }

  tranEmailApi
    .sendTransacEmail({
      sender,
      to: [
        {
          email,
        },
      ],
      subject,
      htmlContent,
      params: {
        role: "Frontend",
      },
    })
    .then(console.log)
    .catch(console.log)
}
