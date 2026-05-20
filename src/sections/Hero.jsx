import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github, 
  Linkedin, 
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Express.js",
  "MongoDB(Atlas)",
  "Node.js",
  "javascript",
  "HTML",
  "MySQL",
  "CSS",
  "Tailwind CSS",
  "SQL",
  "Vercel",
  "Hoppscotch",
  "Postman",
  "Render",
  "netlify",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-25 pb-14 relative z-10" >
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full glass text-md text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting real-world <span className="text-primary glow-text">digital</span>
                <br />
                Solutions with
                <br />
                <span className="font-serif italic font-normal text-white">
                  code and creativity.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Ankita Kumari — An MCA student passionate about building projects, learning continuously, and solving real-world problems through code.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="md" className="pl-3 h-10">
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
              
              <AnimatedBorderButton>
                <a href="/resume.pdf" download className="flex items-center gap-2">
                <Download className="w-3 h-3" />Download Resume
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
              <span className="text-md text-muted-foreground">Connect With me: </span>
              {[
                 { icon: Github, href: "https://github.com/ankitakr9" }, 
               { icon: Linkedin, href: "https://www.linkedin.com/in/ankitakr9/" }, 
               
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div> 

          {/* Right Column - Profile Image */}
          <div className="flex justify-end items-start relative animate-fade-in animation-delay-300 ">
            {/* Profile Image */}
            <div className="relative w-[290px] md:w-[330px] ">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-3xl animate-pulse"
              />
              <div className="relative glass rounded-2xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Ankita Kumari"
                  className="w-full h-[300px] md:h-[350px] object-contain rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 glass rounded-xl px-3 py-2 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 gap-1 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-small">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-2 -left-2 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-md font-bold text-primary">5+ Projects</div>
                  <div className="text-sm text-muted-foreground">
                    Built & Deployed
                  </div>
                </div>
              </div>
            </div>
          </div>
        
</div>
         {/* Skills Section */}
        <div className="mt-10 animate-fade-in animation-delay-600">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Technologies and Tools I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
  
    </section>
  );
};