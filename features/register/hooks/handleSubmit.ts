import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation'

export const useRegisterSubmit = () => {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const { data, error } = await authClient.signUp.email({
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            callbackURL: "/dashboard" // go to verifyEmail
        }, {
            onRequest: () => {
                console.log("cargando...")
            },
            onSuccess: (ctx) => {
                console.log("Todo bien!")
                router.push("/")
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
        });
    };

    return { handleSubmit };
}