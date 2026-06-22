'use client'
import { authClient } from "@/lib/auth-client"
export default function EmailInformation() {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();
    if (isPending) return (<div>Loading...</div>)
    if (!session) return (<div>No session found</div>)
    return (
        <div>
            <p>
                {session.user.name}
            </p>
            <p>
                {session.user.email}
            </p>
        </div>
    )
}