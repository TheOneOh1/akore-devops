'use client';

import React from 'react';
import { Github, Linkedin, Mail, Terminal, Download } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-100">Anand Kore</h1>
          <p className="mt-2 text-xl text-gray-400">DevOps Engineer</p>
          <div className="mt-4 flex space-x-4">
            <a href="mailto:anandkore1@gmail.com" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/TheOneOh1" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anandkore101/" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="AnandKore-020624.pdf" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">About</h2>
          <p className="text-gray-300">
            DevOps Engineer with expertise in IT infrastructure, network security, and deployment operations. Proficient in CI/CD pipelines, containerization, and cloud services.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2 text-gray-100">CI/CD</h3>
              <p className="text-gray-300">GitLab CI/CD, GitHub Actions, Jenkins, BitBucket</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2 text-gray-100">Containerization</h3>
              <p className="text-gray-300">Docker, Kubernetes, Docker Swarm</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2 text-gray-100">Monitoring</h3>
              <p className="text-gray-300">Prometheus, Grafana, Loki, SPLUNK, Nagios</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2 text-gray-100">Scritping</h3>
              <p className="text-gray-300">Bash, YAML, Powershell, Python</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2 text-gray-100">Web Servers</h3>
              <p className="text-gray-300">Nginx, Apache, IIS, TomCat</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2 text-gray-100">SAST</h3>
              <p className="text-gray-300">SonarQube</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Featured Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Terminal className="w-5 h-5 mr-2 text-blue-400" />
                <h3 className="font-semibold text-gray-100">K8s Cluster IDS with SPLUNK</h3>
              </div>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Multiple AWS Instances spawed using EC2 in a master-slave architecture</li>
                <li>This architecture is secured with SNORT intrusion detection system</li>
                <li>SLUNK node is installed configured to display the dashboard for monitoring</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Terminal className="w-5 h-5 mr-2 text-blue-400" />
                <h3 className="font-semibold text-gray-100">Centralized Microservices Monitoring</h3>
              </div>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Configured a centralized Syslog Server, where logs of all microservices are captured.</li>
                <li>Scraping the metrics and logs using Prometheus, Promtail and Loki.</li>
                <li>Server is microservices have been configured with Node Exporters by Prometheus for server monitoring.</li>
                <li>Using Prometheus and Loki as a datasource in Grafana to display various dashboards for monitoring.</li>
                <li>Integrated Grafana with C-DAC's Secure LDAP, SSL certificate with nginx reverse proxy, email and SMS alerting and custom login page.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Terminal className="w-5 h-5 mr-2 text-blue-400" />
                <h3 className="font-semibold text-gray-100">Containerized Services</h3>
              </div>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Deployed multiple microservices and their corresponding containerized databases within a Docker network.</li>
                <li>This setup streamlined the deployment process, improved resource utilization, and ensured seamless communication between microservices and their databases.</li>
                <li>The project enhanced scalability, maintainability, and overall system performance.</li>
                <li>Future scope involves, these container be added in a SWARM or Kubernetes cluster for better management and monitoring.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Terminal className="w-5 h-5 mr-2 text-blue-400" />
                <h3 className="font-semibold text-gray-100">Public Deployments</h3>
              </div>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Led the design and implementation of system architecture for various public hosted services, including the ACTS Website and ACTS PMS, at CDAC.</li>
                <li>Ensured seamless migration with minimal downtime during public deployments.</li>
                <li>Including a Grafana node in a DMZ network with reverse proxy, which shows live statistics for internal network use.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Terminal className="w-5 h-5 mr-2 text-blue-400" />
                <h3 className="font-semibold text-gray-100"><a href="https://github.com/TheOneOh1/Darkly-Scanner" target="_blank">Darkly Scanner</a></h3>
              </div>
              <ul className="text-gray-300 list-disc list-inside">
                <li>A shell script automation mini-project.</li>
                <li>Uses Nmap to help scan the ports of multiple domains and subdomains at once.</li>
                <li>Mostly useful for Pentesters and Bug Bounty Hunters.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-gray-100">Project Engineer</h3>
              <p className="text-gray-400">
              <a href="https://cdac.in/" target="_blank">C-DAC: Centre for Development of Advanced Computing</a>
              </p>
              <p className="text-gray-400">Nov 2022 - Present</p>
              <p className="amazon-text">2 Years</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-gray-100">CSA and SME</h3>
              <p className="text-gray-400">Amazon</p>
              <p className="text-gray-400">Jul 2018 - Mar 2021</p>
              <p className="amazon-text">2 Years 8 months</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};


export default Portfolio;