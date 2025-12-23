import customizationControl from "@/assets/customization-control.jpg";

const IdentitySection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
                    {/* TOP TEXT */}
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
                            No es una plantilla.
                            <br />
                            Es tu identidad.
                        </h2>
                    </div>

                    {/* IMAGE CENTER */}
                    <div className="w-full">
                        <img
                            src={customizationControl}
                            alt="Personalización de colores y estilos"
                            className="w-full rounded-xl"
                        />
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="space-y-3">
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Configurá colores, estilos y visuales a la altura de tu local.
                            <br />
                            Un espacio digital donde tu marca se ve profesional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdentitySection;
