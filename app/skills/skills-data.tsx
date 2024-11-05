export interface SkillCategory {
    category: string;
    skills: string[];
  }
  
  export const skills: SkillCategory[] = [
    {
      category: "CI/CD",
      skills: ["GitLab CI/CD", "GitHub Actions", "Jenkins", "BitBucket"],
    },
    {
      category: "Containerization",
      skills: ["Docker", "Kubernetes", "Docker Swarm"],
    },
    {
      category: "Monitoring",
      skills: ["Prometheus", "Grafana", "Loki", "Nagios", "SPLUNK"],
    },
    {
      category: "Scritping",
      skills: ["Shell", "Python", "YAML", "Powershell"],
    },
    {
      category: "Web Servers",
      skills: ["Nginx", "IIS", "TomCat", "Apache"],
    },
    {
      category: "SAST",
      skills: ["SonarQube"],
    },
    // Add more categories and skills as needed
  ];
  