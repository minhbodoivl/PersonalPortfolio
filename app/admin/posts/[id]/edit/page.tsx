"use client";

import {doc, getDoc, updateDoc} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import router from "next/router";

export default function EditPostPage({ params }: { params: { id: string }}){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts(){
            const snap = await getDoc(doc(db, "posts", params.id));
            if(snap.exists()){
                const data = snap.data();
                setTitle(data.title);
                setContent(data.content);
            }
        }
        fetchPosts();
    }, [params.id]);

    async function handleSave(){
        await updateDoc(doc(db, "posts", params.id), {
            title,
            content,
            updateAt: new Date(),
        });
    }

    async function handleDelete(){
        if(!confirm("Delete this post?")) return;

        setLoading(true);
        try{
            await updateDoc(doc(db, "posts", params.id),{
                published: false,
                updateAt: new Date(),
            });
            router.push("/admin/posts");
        }catch (e){
            setError("Failed to delete the post.");
        }finally{
            setLoading(false);
        }
    }

    return(
        <main>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <button 
                className="w-full border border-white-700 px-4 py-2 text-white font-bold rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:-translate-y-1 cursor-pointer"
                onClick={handleSave}
            >
            Save
            </button>
        </main>
    )
}