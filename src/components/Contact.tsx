import { motion } from 'framer-motion';
import { Send, Instagram, Globe } from 'lucide-react';

const socialLinks = [
  {
    name: 'Telegram',
    url: 'https://t.me/t_abdulaziz_t',
    icon: Send,
    color: '#26A5E4',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/t__abdulaz1z',
    icon: Instagram,
    color: '#E4405F',
  },
  {
    name: 'Portfolio',
    url: 'https://vue-portfolio-dark.vercel.app/',
    icon: Globe,
    color: '#2aa149',
  },
];

export default function Contact() {
  return (
    <section className="relative py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="neon-text-cyan">Get</span>{' '}
            <span className="neon-text-green">In Touch</span>
          </h2>
          <p className="mb-12 text-muted-foreground">
            Let's connect and build something amazing together
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card group relative overflow-hidden rounded-lg p-8 transition-all"
                style={{
                  boxShadow: `0 0 0 rgba(${link.color}, 0)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${link.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(${link.color}, 0)`;
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative flex flex-col items-center gap-4">
                  <link.icon
                    className="h-12 w-12 transition-colors"
                    style={{ color: link.color }}
                  />
                  <span className="font-semibold text-foreground">{link.name}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <p className="italic text-muted-foreground">
              "Striving for clean code and continuous learning."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
