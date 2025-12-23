import deliveryImage from "@/assets/delivery.jpg";

const DeliverySection = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-sm">
                        <img
                            src={deliveryImage}
                            alt="Sin comisión por delivery - Vos controlás las tarifas"
                            className="w-full rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverySection;
