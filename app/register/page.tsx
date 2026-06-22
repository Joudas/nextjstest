import FormRegister from "@/features/register/components/FormRegister";

export default function RegisterPage() {
    return (
        <div className=" h-screen justify-center items-center flex">
            <div className="container h-[60%] max-w-100 bg-white shadow-white rounded-lg flex justify-center items-center">
                <FormRegister />
            </div>
        </div>
    )
}