import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Portfolio',
    description: 'Personal portfolio website built with Vue.js and modern design principles',
    link: 'https://github.com/Abdulaziz-developer1/Portfolio',
    topics: ['Vue.js', 'Portfolio', 'Frontend'],
  },
  {
    name: 'Workroom',
    description: 'Collaborative workspace application with real-time features',
    link: 'https://github.com/Abdulaziz-developer1/workroom',
    topics: ['React', 'Collaboration', 'WebSocket'],
  },
  {
    name: 'Algorithm Exam React',
    description: 'Algorithm practice platform with interactive exercises',
    link: 'https://github.com/Abdulaziz-developer1/algoritm-exam-react',
    topics: ['React', 'Algorithms', 'Education'],
  },
  {
    name: 'VirtualR',
    description: 'Virtual reality web experience built with modern web technologies',
    link: 'https://github.com/Abdulaziz-developer1/virtualr',
    topics: ['WebVR', 'Three.js', 'Interactive'],
  },
  {
    name: 'GitHub Profile',
    description: 'Enhanced GitHub profile with custom README and animations',
    link: 'https://github.com/Abdulaziz-developer1/Abdulaziz-developer1',
    topics: ['GitHub', 'Profile', 'Markdown'],
  },
  {
    name: 'GitHub Explorer',
    description: 'GitHub repository explorer with advanced search features',
    link: 'https://github.com/Abdulaziz-developer1/github',
    topics: ['API', 'React', 'GitHub'],
  },
];

export default function Projects() {
  return (
    <section className="relative py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="neon-text-cyan">Featured</span>{' '}
            <span className="neon-text-green">Projects</span>
          </h2>
          <p className="text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card group relative overflow-hidden rounded-lg p-6 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <Github className="h-8 w-8 text-primary" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground group-hover:neon-text-cyan transition-all">
                  {project.name}
                </h3>
                
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
