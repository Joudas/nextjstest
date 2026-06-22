import { authClient } from "@/lib/auth-client";

export async function HandleGitHubSignIn() {
    const { data, error } = await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/dashboard'
    });
    console.log(data, error)
}