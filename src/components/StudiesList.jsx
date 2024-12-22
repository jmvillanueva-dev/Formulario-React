export default function StudiesList() {
const studies = [
    "Licenciatura en Ingeniería Informática",
    "Máster en Desarrollo Web",
    "Curso de Especialización en Inteligencia Artificial",
    "Certificación en Desarrollo de Aplicaciones Móviles"
]

return (
    <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Estudios Realizados</h2>
    <ol className="list-decimal list-inside space-y-2">
        {studies.map((study, index) => (
        <li key={index} className="text-gray-700">{study}</li>
        ))}
    </ol>
    </section>
)
}

