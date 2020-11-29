import withDatabase from "./withDatabase"
/* import withSession from "./withSession" */
import withAuthentication from "./withAuthentication";

const middleware = handler => withDatabase(handler)

export default middleware