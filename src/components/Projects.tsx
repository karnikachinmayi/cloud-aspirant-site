import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated AWS infrastructure deployment using Terraform and Ansible. Implemented auto-scaling, load balancing, and CI/CD pipelines.",
    tech: ["AWS", "Terraform", "Ansible", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Kubernetes Microservices",
    description: "Built and deployed microservices architecture on Kubernetes cluster with monitoring, logging, and automated scaling capabilities.",
    tech: ["Kubernetes", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "CI/CD Pipeline Implementation",
    description: "Designed and implemented complete CI/CD pipeline using Jenkins and GitHub Actions for automated testing, building, and deployment.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "SonarQube"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Serverless Application",
    description: "Developed serverless web application using AWS Lambda, API Gateway, and DynamoDB with Infrastructure as Code approach.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in Cloud, DevOps, and Web Development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 hover:shadow-elegant transition-smooth hover:-translate-y-1 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" className="flex-1 gradient-hero border-0" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
