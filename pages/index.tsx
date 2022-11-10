import { BlitzPage } from "@blitzjs/next"

const Home: BlitzPage = () => {
  return <div>Home</div>
}

Home.authenticate = true
Home.redirectAuthenticatedTo = "/profile"

export default Home
