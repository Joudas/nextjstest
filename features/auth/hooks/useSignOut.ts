import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const useSignOut = () => {
    const router = useRouter();

    const signOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.refresh(); // redirect to login page
                },
            },
        });
    }
    return { signOut }
}