import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema";

// Initialize and configure better-auth
export const auth = betterAuth({
    // Define social login providers (GitHub and Google)
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    // Enable email and password authentication alongside social providers
    emailAndPassword: {
        enabled: true
    },
    // Configure the database adapter
    database: drizzleAdapter(db, {
        // Specify your database provider (PostgreSQL)
        provider: "pg",
        // Provide the schema for better-auth to create and query tables
        schema: {
            ...schema,
        },
    }),
});