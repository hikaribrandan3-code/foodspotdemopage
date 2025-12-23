import cameraFeature from "@/assets/camera-feature.png";

const CameraSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
                    {/* TOP TEXT */}
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
                            Todo entra por los ojos.
                            <br />
                            La primera app con cámara integrada.
                        </h2>
                    </div>

                    {/* IMAGE CENTER */}
                    <div className="w-full">
                        <img
                            src={cameraFeature}
                            alt="Cámara integrada - fotos, edición, publicación"
                            className="w-full rounded-xl"
                        />
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="space-y-3">
                        <p className="text-lg font-medium text-foreground">
                            Sacá la foto. Editá. Vendé.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Y dejá que tus clientes compartan tu contenido directo a redes, con ubicación incluida.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CameraSection;
