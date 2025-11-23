import { motion } from 'framer-motion';

export default function Stats() {
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
            <span className="neon-text-cyan">GitHub</span>{' '}
            <span className="neon-text-green">Stats</span>
          </h2>
          <p className="text-muted-foreground">My coding journey in numbers</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card overflow-hidden rounded-lg p-4"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Abdulaziz-developer1&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1f2e&title_color=00C3FF&icon_color=2aa149&text_color=ffffff"
              alt="GitHub Stats"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card overflow-hidden rounded-lg p-4"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abdulaziz-developer1&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1f2e&title_color=00C3FF&text_color=ffffff"
              alt="Top Languages"
              className="w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <div className="glass-card overflow-hidden rounded-lg p-4">
            <img
              src="https://streak-stats.demolab.com/?user=Abdulaziz-developer1&theme=tokyonight&hide_border=true&background=1a1f2e&ring=00C3FF&fire=2aa149&currStreakLabel=00C3FF"
              alt="GitHub Streak"
              className="w-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-6 text-2xl font-bold neon-text-green">Codewars Progress</h3>
          <div className="inline-block glass-card rounded-lg p-4">
            <img
              src="https://www.codewars.com/users/Abdulaziz12/badges/large"
              alt="Codewars Badge"
              className="mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
