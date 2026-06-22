import { betterAuth } from "better-auth";
import { Pool } from "pg"; //Postgres  // pnpm i -D @types/pg
import { twoFactor } from "better-auth/plugins"
export const auth = betterAuth({
    //...
    plugins: [
        twoFactor()
    ],
    database: new Pool({
        // connection options
        connectionString: process.env.DATABASE_URL,
        ssl: false, // Si es etorno local false, si es bd en la nube true
    }),
    emailAndPassword: { // Proveedores de email
        enabled: true,
        requireEmailVerification: true
    },
    socialProviders: { // Proveedores de sociales
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    emailVerification: {
        sendOnSignIn: true,
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url, token }) => {
            console.log("verificacion email: ", { user, url, token })

        }
    }
});