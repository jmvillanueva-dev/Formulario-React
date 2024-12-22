export default function ToolsList() {
const tools = [
    "JavaScript", "React", "Node.js", "Python",
    "Git", "Docker", "AWS", "MongoDB"
]

return (
    <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Herramientas Utilizadas</h2>
    <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
        <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            {tool}
        </span>
        ))}
    </div>
    </section>
)
}

