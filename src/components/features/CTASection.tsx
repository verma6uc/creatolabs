export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark to-sage-green-dark" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center backdrop-blur-lg bg-white/10">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6 animate-fade-up">
              Ready to Start Your Own Show?
            </h2>
            <p className="text-xl text-white/90 mb-10 animate-fade-up animate-delay-100">
              Step into the spotlight and let Creator Lab&apos;s AI stage the perfect website for you—constantly changing, always evolving.
            </p>
            <button className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
