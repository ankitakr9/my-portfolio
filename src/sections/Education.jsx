const education = [
  {
    period: "2023 — 2025",
    degree: "Master of Computer Applications (MCA)",
    institute: "LNCT University, Bhopal",
    score: "81.30%",
    description:
      "Focused on web development, data structures, and modern technologies. Built multiple real-world projects using MERN stack.",
    current: true,
  },
  {
    period: "2018 — 2022",
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Tilka Manjhi University, Bhagalpur",
    score: "71.31%",
    description:
      "Built strong foundation in programming, databases, and computer fundamentals.",
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shaped my foundation.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My academic journey has helped me build a strong base in computer
            science and develop problem-solving skills essential for real-world
            applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {edu.degree}
                    </h3>

                    <p className="text-muted-foreground">
                      {edu.institute}
                    </p>

                    <p className="text-sm text-muted-foreground mt-2">
                      🎯 {edu.score}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};