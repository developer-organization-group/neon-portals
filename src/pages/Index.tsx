import Scene3D from '@/components/Scene3D';
import CursorGlow from '@/components/CursorGlow';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Scene3D />
      <CursorGlow />
      
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Stats />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built with React, Three.js, and Framer Motion
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © 2025 Abdulaziz. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
