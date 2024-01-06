import { users } from './schema/users'
import { testimonials } from './schema/testimonials'
const schema = { ...users, ...testimonials };
export default schema;