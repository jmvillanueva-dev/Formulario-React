export default function SportsGallery() {
const sports = [
    { title: "Fútbol", image: "/placeholder.svg?height=200&width=300" },
    { title: "Baloncesto", image: "/placeholder.svg?height=200&width=300" },
    { title: "Tenis", image: "/placeholder.svg?height=200&width=300" },
    { title: "Natación", image: "/placeholder.svg?height=200&width=300" }
]

return (
    <section>
    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Deportes Favoritos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sports.map((sport, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img src={sport.image} alt={sport.title} className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <h3 className="text-lg font-semibold">{sport.title}</h3>
            </div>
        </div>
        ))}
    </div>
    </section>
)
}

