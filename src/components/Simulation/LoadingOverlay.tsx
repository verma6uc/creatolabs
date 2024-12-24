'use client';

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-dark-bg/80">
      <div className="glass-card p-8 rounded-2xl text-center max-w-md">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            {/* Loading Animation */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-white/10" />
              <div className="absolute inset-0 rounded-full border-4 border-sage-green border-t-transparent animate-spin" />
            </div>
          </div>
          <h3 className="text-xl font-montserrat font-bold text-white mb-2">
            AI Processing
          </h3>
          <p className="text-white/80">
            Analyzing data and generating your website...
          </p>
        </div>

        {/* Card Border Glow */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl" />
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>
    </div>
  );
}
