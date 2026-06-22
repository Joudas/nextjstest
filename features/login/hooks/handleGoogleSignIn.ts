import { authClient } from "@/lib/auth-client";

export async function HandleGoogleSignIn() {
    const { data, error } = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/dashboard'
    });
    console.log(data, error)
}