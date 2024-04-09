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
import * as certifications from "./schema/certifications"
import * as exams from "./schema/exams"
import * as frenquentlyAskedQuestions from "./schema/frequently_questions"
import * as mercadoPagoAccessKeys from "./schema/mp_access_keys";
const schema = { ...users, ...frenquentlyAskedQuestions, ...exams, ...mercadoPagoAccessKeys, ...course_progress, ...testimonials, ...courses, ...news, ...modules, ...instructors, ...usersToCourses, ...modules_items, ...payment, ...certifications };
export default schema;