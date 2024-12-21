'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Palette, GraduationCap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Développement Web",
      description: "Expertise en React, Next.js, Node.js et bases de données modernes"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design UI/UX",
      description: "Création d'interfaces élégantes et intuitives avec Tailwind CSS"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Apprentissage Continu",
      description: "Veille technologique et formation continue"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-4 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
            Découvrez mon parcours
          </span>
          <h2 className="text-4xl font-bold mb-4">
            À propos de <span className="text-primary-500">moi</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:flex-1 w-full"
          >
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent rounded-2xl -z-10 blur-3xl" />
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-primary-500/10 rounded-2xl transform rotate-6" />
                <div className="absolute inset-0 bg-background rounded-2xl shadow-xl">
                  <Image
                    src="/images/portfolio.jpg"
                    alt="Fitahiana Moussa - Développeur Web"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:flex-1"
          >
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                Je suis un développeur web passionné avec une solide expérience dans la création d'applications web modernes et réactives. Mon parcours m'a permis de maîtriser des technologies de pointe et de développer une approche centrée sur l'utilisateur.
              </p>
              <p>
                J'aime relever des défis techniques et transformer des idées complexes en solutions élégantes et fonctionnelles. Mon objectif est de créer des expériences numériques qui marquent les esprits.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-secondary-50 dark:bg-secondary-900/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-foreground/70 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}