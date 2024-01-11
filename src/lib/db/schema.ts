import * as users from './schema/users'
import * as testimonials from './schema/testimonials'
import * as courses from './schema/course';
import * as news from './schema/news';
import * as modules_items from './schema/modules_items';
import * as instructors from './schema/instructors';
import * as usersToCourses from './schema/users_to_courses';
import * as payment from './schema/payment';
import * as modules from './schema/modules'
import * as course_progress from './schema/course_progress';
const schema = { ...users, ...course_progress, ...testimonials, ...courses, ...news, ...modules, ...instructors, usersToCourses, ...modules_items, ...payment };
export default schema;