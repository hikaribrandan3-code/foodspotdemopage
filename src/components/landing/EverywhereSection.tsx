import everywhereApp from "@/assets/everywhere-app.jpg";

const EverywhereSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-md">
                        <img
                            src={everywhereApp}
                            alt="FoodSpot everywhere - customers sharing, social exposure"
                            className="w-full rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EverywhereSection;
