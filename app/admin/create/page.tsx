"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function CreatePostPage(){
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    async function handleCreate(){
        await addDoc(collection(db, "posts"), {
            title,
            slug,
            content,
            description,
            createdAt: serverTimestamp()
        });
        /*template 
        id: string
        title: string
        slug: string
        content: string
        description: string
        createdAt: Timestamp
        updatedAt: Timestamp
        published: boolean*/

        router.push("/admin");
    }

    return (
        <main className="p-10 max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">
                Create Post
            </h1>

            <input
                className="border p-2 w-full mb-2"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Slug"
                value={slug}
                onChange={e => setSlug(e.target.value)}
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <textarea
                className="border p-2 w-full h-60 mb-4 font-mono"
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
            />

            <button
                onClick={handleCreate}
                className="w-full border border-white-700 px-4 py-2 text-white font-bold rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:-translate-y-1 cursor-pointer"
            >
                Create
            </button>
        </main>
    )
}