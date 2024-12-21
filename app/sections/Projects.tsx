import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Laptop, Code2, Boxes } from 'lucide-react';

const projects = [
  {
    title: 'Application E-commerce',
    description: 'Une plateforme de commerce électronique moderne construite avec Next.js et Tailwind CSS.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/username/project1',
    demo: 'https://project1.demo.com',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    features: [
      'Paiement en ligne sécurisé',
      'Interface administrateur',
      'Panier dynamique'
    ]
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec visualisations de données en temps réel.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/username/project2',
    demo: 'https://project2.demo.com',
    tags: ['React', 'D3.js', 'Firebase'],
    features: [
      'Graphiques temps réel',
      'Export de données',
      'Filtres avancés'
    ]
  },
  {
    title: 'Application Mobile Fitness',
    description: 'Application de suivi fitness avec plans d\'entraînement personnalisés.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/username/project3',
    demo: 'https://project3.demo.com',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    features: [
      'Suivi des progrès',
      'Plans personnalisés',
      'Statistiques détaillées'
    ]
  },
  {
    title: 'Plateforme d\'Apprentissage',
    description: 'Plateforme e-learning avec cours interactifs et suivi de progression.',
    image: '/api/placeholder/800/600',
    github: 'https://github.com/username/project4',
    demo: 'https://project4.demo.com',
    tags: ['Vue.js', 'Express', 'MySQL'],
    features: [
      'Cours vidéo HD',
      'Quiz interactifs',
      'Certificats'
    ]
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium text-white bg-white/20 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Fonctionnalités principales</h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <Code2 className="h-4 w-4 text-purple-500" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Démo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Boxes className="h-8 w-8 text-primary-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
          >
            Mes Projets
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 h-1 w-20 bg-gradient-to-r  from-blue-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}