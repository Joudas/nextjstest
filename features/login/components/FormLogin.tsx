'use client'

import Link from "next/link"
import ButtonsSignIn from "./buttonsSignIn"
import { useLoginSubmit } from "../hooks/handleSubmit"

export default function FormLogin() {
    const { handleSubmit } = useLoginSubmit();

    return (
        <form action={handleSubmit} className="p-4 w-full">
            <h1 className="font-bold text-center text-slate-700 text-3xl">Login</h1>
            <div className="flex flex-col mt-8 text-gray-600 gap-12">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label htmlFor="" className="text-slate-400">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                    <label htmlFor="" className="text-slate-400">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                </div>
                <div>
                    <button className="bg-[#252525] text-white h-10 w-full rounded-lg p-2 font-semibold flex items-center justify-center cursor-pointer hover:bg-slate-700  duration-300 ease">Login</button>
                    <Link href="register" className="hover:text-blue-500 text-sm">Dont you have a acount? register acount</Link>
                </div>
                <div className="flex gap-2">
                    <ButtonsSignIn />
                </div>
            </div>
        </form>
    )
}