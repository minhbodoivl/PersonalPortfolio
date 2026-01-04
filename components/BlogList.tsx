import BlogItem from "./BlogItem";
import { posts } from "@/data/posts";

export default function BlogList()
{    
    return (
        <section className="mt-6">
            <h2 className="text-2xl font-bold mb-4">
                Blog Posts
            </h2>

            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <BlogItem
                    title={post.title}
                    slug={post.slug}
                    />
                </li>
                ))}
            </ul>
        </section>
    );
    
}