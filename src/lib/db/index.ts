
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import schema from './schema';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
// Disable prefetch as it is not supported for "Transaction" pool mode 



declare global {
    var client: undefined | postgres.Sql<{}>
}

let client: postgres.Sql<{}>
if (process.env.NODE_ENV !== 'production') {
    if (!global.client) {
        global.client = postgres(connectionString)
    }
    client = global.client;
} else {
    client = postgres(connectionString)
}


export const db = drizzle(client, { schema, });
