import problemChaos from "@/assets/problem-chaos.jpeg";

const ProblemSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-sm">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              THE PROBLEM
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-foreground">
              PDFs. Links.
              <br />
              Mensajes. <span className="italic">Caos.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Tus clientes piden precios por WhatsApp. Tu menú es un PDF que nadie descarga. Todo está fragmentado y genera fricción.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <img
              src={problemChaos}
              alt="Communication chaos with PDFs, links, and messages"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
