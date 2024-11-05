export interface Experience {
    title: string[];
    company: string;
    year: string;
    description: string[];
    // url: string;
  }
  
  export const projects: Experience[] = [
    {
      title: ["Project Engineer ", "@", " CDAC, Pune"],
      company: "CDAC, Pune",
      year: "Nov 2022 - Present",
      description: [
        "• Led the transition from local development to GitLab flow, implementing an efficient branching strategy." ,
        "• Migrated projects to GitLab CI/CD, automating processes for improved efficiency.",
        "• Integrated SonarQube with CI/CD pipelines for enhanced code quality analysis.",
        "• Containerized multiple microservices applications using Docker and Docker Swarm.",
        "• Developed a logging and tracing workflow for Spring Boot microservices using Rsyslog, Promtail-Loki, Prometheus, and Grafana.",
        "• Responsible for setup of CI/CD process implementation using Jenkins to automate routine jobs.",
        "• Hands-on experience in Installation and Configuration of Distributed Version Control System GIT and GitLab",
        "• Worked as an SCM admin to manage version control, assisting programmers and developers with tasks such as project creation, branch management, merge requests, code reverts, and resolving merge conflicts.",
    ]
      // url: "https://example.com/",
    },
    {
      title: ["CSA & SME ", "@", " Amazon, Pune"],
      company: "Amazon",
      year: "Jul 2018 - Mar 2021",
      description:[
        "• Developed interpersonal skills while helping in amazing customer service and troubleshooting issues.",
        "• Trained new personnel on company operations, policies, and services, gaining leadership skills."
      ]
        //   url: "https://example.com/",
    },
  ];
  