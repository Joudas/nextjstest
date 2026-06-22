import ButtonsSignIn from "@/features/login/components/buttonsSignIn";
import FormLogin from "@/features/login/components/FormLogin";
import Link from "next/link";

export default function LoginPage() {

    return (
        <div className=" h-screen justify-center items-center flex">
            <div className="container h-[60%] max-w-100 bg-white shadow-white rounded-lg flex justify-center items-center">
                <FormLogin />
            </div>
        </div>
    )
}