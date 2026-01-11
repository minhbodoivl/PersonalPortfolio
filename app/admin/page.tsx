"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminPage(){
    const {user, loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if(loading) {
        return <p className="p-10">Loading...</p>;
    }

    if (!user) {
        return null;
    }

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">
                Admin Dashboard
            </h1>

            <p className="mt-4">
                Logged in as: {user.email}
            </p>

            <button onClick={() => signOut(auth)} className="border px-4 py-2 mt-4">
                Logout
            </button>
        </main>
    );
}
