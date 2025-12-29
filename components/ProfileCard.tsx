type ProfileCardProps = {
    name: string;
    role: string;
    goal: string;
}

export default function ProfileCard({name, role, goal}: ProfileCardProps)
{
    return (
        <section className="border p-4 mt-4">
            <h2 className="text-xl font-semibold">
                {name}
            </h2>
            <p>
                {role}
            </p>
            <p>
                {goal}
            </p>
        </section>
    )
}