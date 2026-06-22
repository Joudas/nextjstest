import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ButtonSignOut from "@/features/auth/components/buttonSignOut";
import EmailInformation from "@/features/dashboard/components/EmailInformation";
import TwoFactor from "@/features/auth/components/twoFactor";

export default async function DashBoardPage() {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    return (
        <div className="min-w-screen min-h-screen flex flex-col justify-center align-center gap-20">
            <p className="text-3xl">Session INIT</p>
            <EmailInformation />
            <TwoFactor />
            <ButtonSignOut />
        </div>
    )
}