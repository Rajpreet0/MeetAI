import {drizzle} from "drizzle-orm/neon-http";

// Initialize a Drizzle database client using your environment-defined Neon-compatible DATABASE_URL
// The non-null assertion (!) ensures that TypeScript doesn't complain about undefined env values.
export const db = drizzle(process.env.DATABASE_URL!);


