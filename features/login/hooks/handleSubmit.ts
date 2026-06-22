import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";

export const useLoginSubmit = () => {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/dashboard",
            rememberMe: false
        }, {
            //callbacks
            onRequest: () => {
                console.log("cargando...")
            },
            onSuccess: (ctx) => {
                console.log("Todo bien!")
                router.push("/")
            },
            onError: (ctx) => {
                // display the error message
                console.log({ context_error: ctx.error })
                alert(ctx.error.message);
            },
        })
    }

    return { handleSubmit };
}
