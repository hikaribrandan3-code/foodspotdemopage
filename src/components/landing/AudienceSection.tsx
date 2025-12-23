const AudienceSection = () => {
    const audiences = [
        {
            emoji: "🍔",
            title: "Street Food & Food Trucks",
            bullets: [
                "Operan 100% desde el celular",
                "Stock cambiante",
                "Dueño = staff",
                "Velocidad y claridad"
            ]
        },
        {
            emoji: "☕",
            title: "Cafés, Panaderías & Postres",
            bullets: [
                "Marca visual primero",
                "Tráfico desde Instagram",
                "Clientes recurrentes",
                "Estética consistente"
            ]
        },
        {
            emoji: "🍽",
            title: "Restaurantes Casual & Full Service",
            bullets: [
                "Staff opera pedidos",
                "Dueño no siempre presente",
                "Riesgo en delivery",
                "Control operativo real"
            ]
        },
        {
            emoji: "🎪",
            title: "Eventos & Pop-Ups",
            bullets: [
                "Operación temporal",
                "Presión de tiempo",
                "Branding por evento",
                "Setup inmediato"
            ]
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center space-y-10 max-w-2xl mx-auto">
                    {/* TOP TEXT */}
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground">
                            ¿Para quién es FoodSpot?
                        </h2>
                    </div>

                    {/* CARDS (IMAGE EQUIVALENT) */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {audiences.map((audience, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                            >
                                <div className="space-y-3">
                                    <h3 className="text-lg font-medium text-foreground">
                                        {audience.emoji} {audience.title}
                                    </h3>
                                    <ul className="space-y-1.5">
                                        {audience.bullets.map((bullet, bulletIndex) => (
                                            <li
                                                key={bulletIndex}
                                                className="text-sm text-muted-foreground flex items-start gap-2"
                                            >
                                                <span className="text-accent mt-0.5">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="text-center space-y-2">
                        <p className="text-lg font-medium text-foreground">
                            Pensado para operadores reales.
                        </p>
                        <p className="text-base text-muted-foreground">
                            Negocios que viven en el celular y necesitan control profesional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
