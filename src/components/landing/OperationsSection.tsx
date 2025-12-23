import operationsEditor from "@/assets/operations-editor.jpg";

const OperationsSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
                    {/* TOP TEXT */}
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
                            Cambiá precios y stock en tiempo real.
                        </h2>
                    </div>

                    {/* IMAGE CENTER */}
                    <div className="w-full">
                        <img
                            src={operationsEditor}
                            alt="Editor de menú y gestión en tiempo real"
                            className="w-full rounded-xl"
                        />
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="space-y-3">
                        <p className="text-lg font-medium text-foreground">
                            Control total desde tu celular.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Lo que editás acá se actualiza al instante para tus clientes.
                            <br />
                            Sin técnicos. Sin esperas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationsSection;
