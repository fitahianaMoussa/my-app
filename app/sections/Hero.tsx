'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about') || document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-6"
            >
              Développeur Web Full Stack
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Je suis{' '}
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text"
              >
                Fitahiana Moussa
              </motion.span>
              <br />
              <span className="text-3xl md:text-5xl text-foreground/80">
                développeur web passionné
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-foreground/70 max-w-2xl">
              Spécialisé dans la création d'expériences web innovantes et performantes,
              je transforme vos idées en solutions digitales impactantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-lg text-base font-medium shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              >
                Me Contacter
              </motion.a>
              
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-secondary-50 dark:bg-secondary-900/50 text-foreground px-6 py-2.5 rounded-lg text-base font-medium hover:bg-secondary-100 dark:hover:bg-secondary-900 transition-all duration-300"
              >
                Voir mes projets
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent rounded-2xl -z-10 blur-3xl" />
              <Image
                src="/images/portfolio.jpeg"
                alt="Fitahiana Moussa - Développeur Web"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground/80 transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}