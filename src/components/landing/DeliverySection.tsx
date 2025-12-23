import deliveryImage from "@/assets/delivery.jpg";

const DeliverySection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
                    {/* TOP TEXT */}
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
                            Tu margen es tuyo.
                            <br />
                            Sin comisiones ocultas.
                        </h2>
                    </div>

                    {/* IMAGE CENTER */}
                    <div className="w-full">
                        <img
                            src={deliveryImage}
                            alt="Sin comisión por delivery"
                            className="w-full rounded-xl"
                        />
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="space-y-3">
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Configurá zonas, precios y reglas claras.
                            <br />
                            Nosotros ponemos la tecnología.
                            <br />
                            Vos te quedás con la ganancia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverySection;
