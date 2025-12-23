const AudienceSection = () => {
    const audiences = [
        {
            emoji: "🍔",
            title: "Street Food & Food Trucks",
            description: "Negocios que operan 100% desde el celular, con stock cambiante y el dueño como staff.",
            bullets: [
                "Cambios rápidos de menú",
                "Control total desde el teléfono",
                "Velocidad y claridad",
                "Sin fricción operativa"
            ]
        },
        {
            emoji: "☕",
            title: "Cafés, Panaderías & Postres",
            description: "Negocios donde lo visual vende y el tráfico viene de Instagram.",
            bullets: [
                "Estética consistente",
                "Experiencia visual cuidada",
                "Un lugar digno de enviar tráfico",
                "Ideal para clientes recurrentes"
            ]
        },
        {
            emoji: "🍽",
            title: "Restaurantes Casual & Full Service",
            description: "Operación con staff, dueño no siempre presente, riesgo en delivery.",
            bullets: [
                "Control operativo",
                "Autonomía del staff",
                "Gestión de pedidos segura",
                "Branding propio sin intermediarios"
            ]
        },
        {
            emoji: "🎪",
            title: "Eventos & Pop-Ups",
            description: "Operaciones temporales con presión de tiempo y branding por evento.",
            bullets: [
                "Setup rápido",
                "Sin onboarding pesado",
                "Branding flexible",
                "Listo para usar en minutos"
            ]
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center space-y-10">
                    {/* Section Header */}
                    <div className="text-center space-y-2 max-w-md">
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground">
                            ¿Para quién es FoodSpot?
                        </h2>
                        <p className="text-base text-muted-foreground">
                            Pensado para negocios que operan desde el celular y necesitan control real.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {audiences.map((audience, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                            >
                                <div className="space-y-3">
                                    <h3 className="text-lg font-medium text-foreground">
                                        {audience.emoji} {audience.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {audience.description}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {audience.bullets.map((bullet, bulletIndex) => (
                                            <li
                                                key={bulletIndex}
                                                className="text-sm text-foreground flex items-start gap-2"
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
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
