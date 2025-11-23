import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const titles = [
  'React JS Developer',
  'Vue JS Developer',
  'Frontend Enthusiast',
  'Clean Code Advocate',
  'Active Github Contributor',
  'Codewars Active User',
  'Always Learning 💪',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-neon rounded-full blur-2xl" />
              <h1 className="relative text-7xl font-bold md:text-9xl">
                <span className="neon-text-cyan">Abdulaziz</span>
              </h1>
            </div>
          </motion.div>

          <div className="mb-8 h-16">
            <p className="text-2xl font-semibold md:text-4xl">
              <span className="neon-text-green">{displayText}</span>
              <span className="animate-glow neon-text-cyan">|</span>
            </p>
          </div>

          <motion.p
            className="mb-12 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Frontend Developer from Namangan, Uzbekistan 🇺🇿
            <br />
            Building clean, modern, and user-friendly web applications
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://vue-portfolio-dark.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group relative overflow-hidden rounded-lg px-8 py-4 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative font-semibold text-foreground">Visit Portfolio</span>
            </a>
            <a
              href="https://t.me/t_abdulaziz_t"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group relative overflow-hidden rounded-lg px-8 py-4 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative font-semibold text-foreground">Contact Me</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
