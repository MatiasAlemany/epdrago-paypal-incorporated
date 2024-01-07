import * as users from './schema/users'
import * as testimonials from './schema/testimonials'
import * as courses from './schema/course';
import * as news from './schema/news';
import * as modules from './schema/modules';
import * as instructors from './schema/instructors';
import * as usersToCourses from './schema/users_to_courses';
import * as payment from './schema/payment';
const schema = { ...users, ...testimonials, ...courses, ...news, ...modules, ...instructors, usersToCourses, ...payment };
export default schema;