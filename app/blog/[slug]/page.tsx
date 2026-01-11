import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";

type BlogDetailProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(
    {params}: BlogDetailProps
): Promise<Metadata> {
    const {slug} = await params;

    const q = query(
        collection(db, "posts"),
        where("slug", "==", slug)
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return {
            title: "Post Not Found",
        };
    }

    const post = snapshot.docs[0].data();

    return {
        title: post.title,
        description: post.description,
    };
}

export default async function BlogDetailPage({ params }: any) {
    const { slug } = await params;
    const q = query(
        collection(db, "posts"),
        where("slug", "==", slug)
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return <main className="p-10">Post not found</main>;
    }

    const post = snapshot.docs[0].data();

    const processed = await remark().use(html).process(post.content);

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">
                {post.title}
            </h1>
            <h2>
                {post.description}
            </h2>

            <article
                className="prose mt-6"
                dangerouslySetInnerHTML={{
                    __html: processed.toString(),
                }}
            />
        </main>
    );
}
