"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPostList(){
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchPosts(){
            const snapshot = await getDocs(collection(db, "posts"));
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })));
        }
        fetchPosts();
    }, []);

    return(
        <main>
            <h1>Manage Posts</h1>

            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    {post.title}
                    {" — "}
                    <Link href={`/admin/posts/${post.id}/edit`}>
                    Edit
                    </Link>
                </li>
                ))}
            </ul>
        </main>
    )
}