import { Card } from "@/components/ui/card";
import { Code2, Cloud, Server, Workflow } from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "AWS, Azure, GCP",
  },
  {
    icon: Server,
    title: "DevOps Tools",
    description: "Docker, Kubernetes, Jenkins",
  },
  {
    icon: Code2,
    title: "Programming",
    description: "Python, JavaScript, Bash",
  },
  {
    icon: Workflow,
    title: "CI/CD",
    description: "GitHub Actions, GitLab CI",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I'm a Computer Science Engineering student with a deep passion for Cloud Computing,
              DevOps practices, and Web Technologies. I love building automated solutions that make
              deployment processes seamless and infrastructure management efficient.
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              My goal is to bridge the gap between development and operations, creating robust
              systems that scale effortlessly. I'm constantly learning new technologies and
              implementing them in real-world projects to gain hands-on experience.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-3 gradient-card border-border/50 hover:shadow-elegant transition-smooth hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
