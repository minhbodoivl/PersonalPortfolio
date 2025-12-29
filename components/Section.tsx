type SectionProps = {
    title: string;
    content: string;
}


export default function Section({title, content}: SectionProps)
{
    return (
        <section className="border p-4 mt-4">
            <h2 className="text-xl font-semibold">
                {title}
            </h2>
            <p>
                {content}
            </p>
        </section>
    )
}