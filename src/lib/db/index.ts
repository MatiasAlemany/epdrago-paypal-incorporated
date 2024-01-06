
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import schema from './schema';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
// Disable prefetch as it is not supported for "Transaction" pool mode 
const client = postgres(connectionString)
export const db = drizzle(client, { schema :schema, });
