import Link from "next/link"
import { posts } from "@/data/posts";

type BlogItemProps = {
    title: string;
    slug: string;
}

export default function BlogItem({title, slug}: BlogItemProps)
{
    const post = posts.find(p => p.slug === slug)

    return (
        <Link href={`/blog/${post?.slug}`}>
            <section className="border p-4 mt-4 hover:bg-gray-50">
                <h2 className="text-xl font-semibold"> {title} </h2>
            </section>
        </Link>
    )
}