'use client'

import { authClient } from "@/lib/auth-client";

export default function TwoFactor() {
    const handleSubmit = async (formData: FormData) => {
        const _password = formData.get("password") as string;

        const { data, error } = await authClient.twoFactor.enable({
            password: _password,
        });
        console.log({ data, error })
        if (error) {
            alert(error.message);
            return;
        }
    }
    return (
        <form action={handleSubmit}>
            <div className="w-full max-w-sm min-w-[200px]">
                <label htmlFor="" className="text-slate-400">Password</label>
                <input
                    type="password"
                    name="password"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
            </div>
            <button type="submit" className="bg-[#252525] text-white h-10 w-60 rounded-lg p-2 font-semibold flex items-center justify-center cursor-pointer hover:bg-slate-700  duration-300 ease">Login</button>
        </form>
    )
}