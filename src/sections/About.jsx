import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, readable, and maintainable code using modern JavaScript practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I focus on optimizing performance and creating fast, responsive web applications.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Eager to collaborate with teams, share ideas, and learn from experienced developers while building real-world applications.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I stay updated with the latest technologies and continuously apply best practices to build efficient and scalable applications.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building real-world solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-md text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am an MCA graduate and an entry-level MERN Stack Developer with hands-on experience in building full-stack web applications using React.js, Node.js, Express.js, MongoDB, and improving my problem-solving skills through consistent practice.
              </p>
              <p>
                I have developed several real-world projects including a Job Portal, WanderLust (Airbnb clone), SigmaGPT (AI-powered application using OpenAI), a Portfolio Website , and a basic Version Control System. Through these projects, I have worked on frontend development, backend APIs, database integration, and deployment.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                enjoy dancing, listening to music, and reading books, which keep me inspired and creative.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I am currently looking for an opportunity as a Web Developer where I can apply my skills, learn from experienced developers, and contribute to real-world projects."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-md text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};