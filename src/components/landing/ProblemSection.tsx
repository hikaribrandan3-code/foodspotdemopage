import problemChaos from "@/assets/problem-chaos.jpg";

const ProblemSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
          {/* TOP TEXT */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
              Tus clientes quieren pedir, no chatear.
            </h2>
          </div>

          {/* IMAGE CENTER */}
          <div className="w-full">
            <img
              src={problemChaos}
              alt="PDFs, Links, Mensajes, Caos"
              className="w-full rounded-xl"
            />
          </div>

          {/* BOTTOM TEXT */}
          <div className="space-y-3">
            <p className="text-xl font-medium text-foreground">
              PDFs. Links. Mensajes. <span className="italic">Caos.</span>
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Dejá de perder ventas en conversaciones interminables.
              <br />
              Dales una experiencia de compra, no una charla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
