import { use } from "react"
import { posts } from "@/data/posts";
import { getPostBySlug } from "@/lib/posts";

type BlogDetailProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
    const { slug } = await(params)
    const post = await getPostBySlug(slug);

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">
                {post.title}
            </h1>

            <article
                className="prose mt-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </main>
    );
}
