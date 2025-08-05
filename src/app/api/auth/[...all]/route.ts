import { auth } from "@/lib/auth";
import {toNextJsHandler} from "better-auth/next-js";

// Convert the better-auth handler into Next.js API routes.
// Destructure POST and GET so that Next.js knows how to handle incoming HTTP methods.
// This enables dynamic handling of authentication requests (sign in, callbacks, etc.) through this catch-all route
export const { POST, GET } = toNextJsHandler(auth);