import { motion } from 'framer-motion';

const technologies = [
  { name: 'HTML5', color: '#E34F26', category: 'Languages' },
  { name: 'CSS3', color: '#1572B6', category: 'Languages' },
  { name: 'JavaScript', color: '#F7DF1E', category: 'Languages' },
  { name: 'React.js', color: '#61DAFB', category: 'Languages' },
  { name: 'Vue.js', color: '#4FC08D', category: 'Languages' },
  { name: 'Tailwind CSS', color: '#06B6D4', category: 'Tools' },
  { name: 'Vite', color: '#646CFF', category: 'Tools' },
  { name: 'Git', color: '#F05032', category: 'Tools' },
  { name: 'GitHub', color: '#181717', category: 'Tools' },
  { name: 'Node.js', color: '#43853D', category: 'Backend' },
  { name: 'Express', color: '#404D59', category: 'Backend' },
  { name: 'MongoDB', color: '#47A248', category: 'Backend' },
];

const categories = ['Languages', 'Tools', 'Backend'];

export default function TechStack() {
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
            <span className="neon-text-cyan">Tech</span>{' '}
            <span className="neon-text-green">Stack</span>
          </h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-6 text-2xl font-semibold text-primary"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card group relative overflow-hidden rounded-lg p-4 text-center transition-all"
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
                      style={{ backgroundColor: tech.color }}
                    />
                    <div className="relative">
                      <div
                        className="mx-auto mb-2 h-12 w-12 rounded-full"
                        style={{
                          backgroundColor: tech.color,
                          boxShadow: `0 0 20px ${tech.color}40`,
                        }}
                      />
                      <p className="text-sm font-medium text-foreground">{tech.name}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
