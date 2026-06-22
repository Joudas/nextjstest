'use client'

import { useSignOut } from "../hooks/useSignOut"

export default function ButtonSignOut() {
    const { signOut } = useSignOut()
    const handleSignOut = () => {
        signOut();
    }
    return (
        <div>
            <button
                onClick={handleSignOut}
                className="bg-gray-800 text-white w-30 h-10 text-center rounded-sm cursor-pointer hover:bgg-gray-900" >Sign OUT</button>
        </div>
    )
}