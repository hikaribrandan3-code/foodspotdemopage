import problemChaos from "@/assets/problem-chaos.jpg";

const ProblemSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-3 max-w-sm">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-foreground">
              PDFs. Links.
              <br />
              Mensajes. <span className="italic">Caos.</span>
            </h2>
          </div>

          <div className="w-full max-w-sm">
            <img
              src={problemChaos}
              alt="PDFs, Links, Mensajes, Caos - fragmentation and confusion"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
